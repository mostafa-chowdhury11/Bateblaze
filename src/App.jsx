import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import BookMarks from './Pages/BookMarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Home/>
 <Blogs/>
 <BookMarks/>
    </>
  )
}

export default App
