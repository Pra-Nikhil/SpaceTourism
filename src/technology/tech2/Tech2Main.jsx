import Destinationnavbar from "../Destinationnavbar"
import Teach2Content from "./Teach2Content"

export default function Tech2Main() {
  return (
<div
        class="text-white mx-auto max-w-[1440px] min-h-[940px] bg-cover bg-no-repeat bg-[right_-18rem_top_0] sm:bg-[right_-10rem_top_0] md:bg-[right_0_top_0] bg-[url(./technology/background-technology-desktop.jpg)]">
 < Destinationnavbar />
          
        <p
            class="text-[16px] flex justify-center sm:text-[18px] md:text-[24px] sm:absolute sm:top-[10%] sm:left-[4%] md:top-[12%] md:left-[8%] mt-2">
            <span class="text-gray-500 font-semibold pr-3">03 </span>SPACE LAUNCH 101
        </p>
        
        < Teach2Content />
        </div>
  )
}
