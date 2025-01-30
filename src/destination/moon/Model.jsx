
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Model(props) {
  const viewport = useThree((state) => state.viewport)
  const modelScalingFactor = Math.min(Math.max(window.innerWidth / 1300, 0.4), 0.5)
  const { nodes, materials } = useGLTF('/Moon.glb')
  // object.rotation.y += 0.01
  return (
    <group {...props} dispose={null} scale={modelScalingFactor}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Moon.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 1, 1, -1]}
        scale={5.4}
      />
    </group>
  )
}

useGLTF.preload('/Moon.glb')
