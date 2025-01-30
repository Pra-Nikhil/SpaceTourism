// import MoonImage from "./image-moon.png"
// import MoonMod from "./moon.obj"
import { Model } from "./Model"
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

export default function MoonImg() {
  return (
    <div className="md:w-[42%] xl:w-[25%] md:h-[400px] w-[80%] h-[200px]">
       < Canvas >
       <directionalLight position={[-5, 5, 5]} intensity={1.2} />
       <directionalLight position={[2, -5, -10]} intensity={0.8} />

          < OrbitControls />
        < Model />
        </ Canvas >
        
</div>
  )
}

// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useLoader } from '@react-three/drei';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// function MoonModel() {
//   // Load the Moon OBJ file using OBJLoader
//   const obj = useLoader(OBJLoader, './moon.obj');
//   return <primitive object={obj} scale={1.5} />;
// }

// export default function MoonImg() {
//   return (
//     <Canvas>
      
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
      
//       <MoonModel />

//       <OrbitControls />
//     </Canvas>
//   );
// }
