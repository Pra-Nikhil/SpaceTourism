import { useState } from "react"

export default function DestinationMenu({}) {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
    <button
    className="z-20 right-0 absolute text-xl block sm:hidden mr-6 cursor-pointer focus:outline-none" onClick={() => {setIsOpen(!isOpen)}}>
    {isOpen ? <p className="md:w-[20px] w-[14px]"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign--v1.png" alt="delete-sign--v1"/></p> : "☰"}
  </button>

    <nav id="menu"
        className={`${isOpen ? "block": "hidden"} z-10 w-[60%] absolute top-4 sm:top-0 right-0 h-[820px] sm:w-[86%] xl:w-[60%] sm:h-[60px] sm:flex justify-around xl:justify-end bg-cover backdrop-blur-sm sm:backdrop-invert-[8%] xl:pr-10`}>
           
        <div
            className="pl-2 sm:pl-0 sm:w-[85%] text-[14px] xl:text-[16px] h-[80px] flex sm:gap-0 gap-4 sm:flex-row flex-col sm:justify-between sm:items-center">
            <a className="hover:border-gray-400 transition-all border-transparent border-b-[3px] pb-[16px] whitespace-pre" href="/"><span className="font-semibold mr-1">00  </span> HOME</a>
         <a className="border-b-[3px] bg-transparent pb-[16px] whitespace-pre" href="/Destination/moon"><span className="font-semibold mr-1">01  </span> DESTINATION</a>
            <a className="hover:border-gray-400 transition-all border-transparent border-b-[3px] pb-[16px] whitespace-pre" href="/crew/commander"><span className="font-semibold mr-1">02  </span> CREW</a>
            <a className="hover:border-gray-400 transition-all border-transparent border-b-[3px] pb-[16px] whitespace-pre" href="/technology/launch_vehicle"><span className="font-semibold mr-1">03   </span>TECHNOLOGY</a>
        </div>
    </nav>
    </>
    
  )
}   
