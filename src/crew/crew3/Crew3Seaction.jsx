import ContentSection from "./ContentSection";
import Destinationnavbar from "../Destinationnavbar";

export default function Crew3Seaction() {
  return (
       <div
        className="text-white bg-black mx-auto max-w-[1440px] min-h-[940px] bg-cover bg-no-repeat bg-[right_-12rem_top_-2rem] sm:bg-[right_-10rem_top_-12rem] md:bg-[right_0_top_-14rem] bg-[url(./crew/backgroundCrew.jpg)]">
            < Destinationnavbar/>

            <p
            className="text-[16px] flex justify-center sm:text-[18px] md:text-[24px] sm:absolute sm:top-[10%] sm:left-[4%] md:top-[12%] md:left-[8%] mt-2">
            <span className="text-gray-500 font-semibold pr-3">02 </span>Meet your crew
        </p>
        < ContentSection />
        </div>
  )
}
