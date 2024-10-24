import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextureLoad from './Components/TextureLoad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TextureLoad />
    </div>
  )
}

export default App
