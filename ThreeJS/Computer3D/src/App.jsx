import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Threejs from './Component/Threejs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Three JS 3D Model</h1>
      <Threejs />
    </div>
  )
}

export default App
