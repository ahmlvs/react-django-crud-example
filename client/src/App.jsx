import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [releaseYear, setReleaseYear] = useState(0)

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
        </div>
      ))}
    </>
  )
}

export default App
