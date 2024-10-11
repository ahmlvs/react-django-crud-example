import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    	<h1>Book Library</h1>

      <div>
        <input type="text" placeholder="Book Title.." />
        <input type="number" placeholder="Release Year.." />
        <button> Add Book </button>
      </div>
    </>
  )
}

export default App
