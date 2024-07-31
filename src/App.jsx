import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Testing</h1>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
      </nav>

      <Routes>
        <Route path='/About' element={ <About /> }></Route>
        <Route path='/' element={ <Home /> }></Route>
      </Routes>

    </div>
  )
}

export default App
