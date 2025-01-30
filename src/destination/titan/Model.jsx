import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const viewport = useThree((state) => state.viewport);
  const modelScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.4),
    0.5
  );
  const { nodes, materials } = useGLTF("/Titan.glb");
  return (
    <group {...props} dispose={null} scale={modelScalingFactor}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenusSurface.geometry}
        material={materials.VenusSurfaceTexture}
        scale={1.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenusAtmosphere.geometry}
        material={materials.VenusAtmosphereTexture}
        scale={1.8}
      />
    </group>
  );
}

useGLTF.preload("/Titan.glb");
