import Crew1Img from "./Image.png"

export default function Content() {
  return ( 
    <>
    <div className="md:mt-[120px] sm:mt-[12%] w-full h-[80%] flex flex-col md:flex-row md:justify-center justify-between items-center md:gap-16 xl:pb-16">
    <div className="xl:w-[35%] md:w-[40%] sm:w-[76%] w-[80%] items-center md:block flex flex-col pt-6 md:pt-10">
        <p className="md:text-[26px] text-[18px] text-gray-400">COMMANDER</p>
        <p className="mb-1 xl:text-[34px] md:text-[32px] sm:text-[28px] text-[26px] sm:tracking-wider md:tracking-widest">DOUGLAS HURLEY</p>
        <p className="xl:text-[16px] md:text-start text-center text-[14px] text-gray-200">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as 
            commander of Crew Dragon Demo-2.
        </p>

        <div className="my-6 flex gap-2 md:gap-5 pt-0 md:pt-[112px]">
        <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-white rounded-full" href="/crew/commander"></a>
        <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/specialist"></a>
        <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/pilot"></a>
        <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/flight_engineer"></a>
    </div>

    </div>

    <div className="xl:w-[280px] md:w-[224px] sm:w-[268px] w-[256px]">
        <img src={Crew1Img} alt="crew 1 commander" />
    </div>
</div>
</>
  )
}
