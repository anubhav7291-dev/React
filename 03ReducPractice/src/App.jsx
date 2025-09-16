import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import RemoveTodo from './components/RemoveTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>redux practice three</h1>
      <AddTodo/>
      <RemoveTodo/>
    </>
  )
}

export default App
