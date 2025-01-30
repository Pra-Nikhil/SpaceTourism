// import MarsImage from "./image-mars.png"
import { Model } from "./Model"
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

export default function MarsImg() {
  return (
    <div className="md:w-[42%] xl:w-[25%] md:h-[400px] w-[80%] h-[200px]">
         < Canvas >
         <directionalLight position={[-5, 5, 5]} intensity={1.4} />
         <directionalLight position={[2, -5, -10]} intensity={0.8} />

                  < OrbitControls />
                  
                < Model />
                </ Canvas >
</div>
  )
}