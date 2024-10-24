import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FontThreeD from './Components/FontThreeD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FontThreeD />
    </div>
  )
}

export default App
