import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [releaseYear, setReleaseYear] = useState(0)
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/books/')
      const data = await res.json()
      setBooks(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addBook = async () => {
    const bookData = { 
      title, 
      release_year: releaseYear
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/api/books/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
      const data = await res.json()
      setBooks((prev) => [...prev, data])
    } catch (error) {
      console.log(error)
    }
  }

  const updateTitle = async (pk, release_year) => {
    const bookData = { 
      title: newTitle,
      release_year
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
      const data = await res.json()
      setBooks((prev) => prev.map((book) => (book.id === pk ? data : book)))
    }
    catch (error) {
      console.log(error)
    }
  }

  const deleteBook = async (pk) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'DELETE',
      })
      setBooks((prev) => prev.filter((book) => book.id !== pk))
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    	<h1>Book Library</h1>

      <div>
        <input 
          type="text" 
          placeholder="Book Title.." 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Release Year.."
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={addBook} > Add Book </button>
      </div>

      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.release_year}</p>
          <input 
            type="text" 
            placeholder="Book Title.." 
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => updateTitle(book.id, book.release_year)} > Update </button>
          <button onClick={() => deleteBook(book.id)} > Delete </button>
        </div>
      ))}
    </>
  )
}

export default App
