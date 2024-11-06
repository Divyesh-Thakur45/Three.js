import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Computer = (props) => {
    const { nodes, materials } = useGLTF('/computer.gltf')
    return (
        <group {...props} dispose={null} position={[0, 0, 0]} scale={3.5}>
            <group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group>
                            <group
                                position={[2.684, 83.159, 64.775]}
                                rotation={[-1.484, 0, -Math.PI]}
                                scale={100}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Display_iMac_0.geometry}
                                    material={materials.iMac}
                                />
                            </group>
                            <group
                                position={[2.684, -0.125, 67.889]}
                                rotation={[-Math.PI / 2, 0, -Math.PI]}
                                scale={100}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Base_Base_0.geometry}
                                    material={materials.Base}
                                />
                            </group>
                            <group position={[22.163, 1.566, -0.477]} rotation={[-1.58, 0, 3.139]} scale={100}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Keyboard_Keyboard_0.geometry}
                                    material={materials.Keyboard}
                                />
                            </group>
                            <group
                                position={[-49.729, 1.055, 2.455]}
                                rotation={[-Math.PI / 2, 0, 0.023]}
                                scale={100}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Mouse001_Mouse_0.geometry}
                                    material={materials.Mouse}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/computer.gltf')

export default Computer