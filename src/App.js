import './App.css'
import { Routes, Route } from 'react-router-dom'
import Game from './Maze Game/Game'
import Home from './Maze Game/Home'

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home></Home>}></Route>
      <Route path = '/Game' element = {<Game></Game>}></Route>
    </Routes>
  )
}

export default App
