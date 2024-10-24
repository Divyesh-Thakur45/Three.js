import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Computer from './Components/Computer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Computer />
    </div>
  )
}

export default App
