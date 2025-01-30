import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';


export function Model(props) {
    const viewport = useThree((state) => state.viewport);
  const modelScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.4),
    0.5
  );
  const { nodes, materials } = useGLTF('/Europa.glb')
  return (
    <group {...props} dispose={null} scale={modelScalingFactor}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cylindrically_mapped_sphere.geometry}
        material={materials['Default OBJ.001']}
        scale={0.011}
        rotation={[Math.PI / 1, 0, 4]}
      />
    </group>
  )
}

useGLTF.preload('/Europa.glb')
