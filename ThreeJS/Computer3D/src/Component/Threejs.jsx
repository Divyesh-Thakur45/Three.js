import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Computer from '../../public/Computer'

const Threejs = () => {
  return (
    <div>
      <Canvas style={{ width: '500px', height: '400px', border: '1px solid white' }}>
        <PerspectiveCamera  position={[0, -15, 0]} />
        <ambientLight intensity={1} />
        
        <pointLight intensity={1} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Computer scale={5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Threejs