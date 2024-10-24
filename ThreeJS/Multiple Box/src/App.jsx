import { useState } from 'react'
import './App.css'
import Box from './Components/Box'
import MultiBox from './Components/MultiBox'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Box />
    <MultiBox />
   </div>
  )
}

export default App
