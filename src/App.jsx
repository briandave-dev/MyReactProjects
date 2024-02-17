import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
