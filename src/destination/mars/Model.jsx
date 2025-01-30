import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const viewport = useThree((state) => state.viewport);
  const modelScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.4),
    0.5
  );

  const { nodes, materials } = useGLTF("/Mars2.glb");
  return (
    <group {...props} dispose={null} scale={modelScalingFactor}>
      <mesh
        
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
        rotation={[Math.PI / 1, 2, 1]}
        scale={0.0105}
      />
    </group>
  );
}

useGLTF.preload("/Mars2.glb");
