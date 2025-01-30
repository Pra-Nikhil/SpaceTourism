import Destinationnavbar from "../Destinationnavbar"
import Europa from "./Europa"
import FallingStar from "../FallingStar"

export default function EuropaSection() {
  return (<>
  <FallingStar/>
    <div className="text-white font-thin mx-auto max-w-[1440px] min-h-[920px] bg-cover bg-no-repeat bg-[right_-12rem_top_0] sm:bg-[right_-10rem_top_0] md:bg-[right_0_top_0] bg-[url(./destination/space-background.jpg)]">
      < Destinationnavbar />
      <p
            className="text-[16px] flex justify-center sm:text-[18px] md:text-[24px] sm:absolute sm:top-[82px] sm:left-[56px] mt-2">
            <span className="text-gray-500 font-semibold pr-3">01 </span>Pick your destination
        </p>

        < Europa />
    </div>
    </>
  )
}
