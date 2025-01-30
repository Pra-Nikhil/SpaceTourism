import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
// import TitanImage from "./image-titan.png"

export default function TitanImg() {
  return (
    <div className="md:w-[42%] xl:w-[25%] md:h-[400px] w-[80%] sm:h-[180px] h-[168px]">
       < Canvas >
       <directionalLight position={[-5, 5, 5]} intensity={1.2} />
       <directionalLight position={[2, -5, -10]} intensity={0.8} />

          < OrbitControls />
        < Model />
        </ Canvas >
        
</div>
  )
}