import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/books/')
      const data = await res.json()
      setBooks(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    	<h1>Book Library</h1>

      <div>
        <input type="text" placeholder="Book Title.." />
        <input type="number" placeholder="Release Year.." />
        <button> Add Book </button>
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
