import crew2img from "./CREW2.png"

export default function SectionContent() {
  return (
    <div className="md:mt-[120px] sm:mt-[12%] max-w-[1440px] h-[80%] flex flex-col md:flex-row md:justify-center justify-between items-center md:gap-16 xl:pb-16">
    <div className="xl:w-[35%] md:w-[40%] sm:w-[76%] w-[80%] items-center md:block flex flex-col pt-6 md:pt-10">
        <p className="md:text-[26px] text-[18px] text-gray-400">MISSION SPECIALIST</p>
        <p className="text-center sm:text-start mb-1 xl:text-[34px] md:text-[32px] sm:text-[28px] text-[26px] sm:tracking-wider md:tracking-widest">MARK SHUTTLEWORTH</p>
        <p className="xl:text-[16px] md:text-start text-center text-[14px] text-gray-200">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
            African to travel to space as a space tourist.
        </p>

        <div className="my-6 flex gap-2 md:gap-5 pt-0 md:pt-[112px]">
            <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/commander"></a>
            <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-white rounded-full" href="/crew/specialist"></a>
            <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/pilot"></a>
            <a className="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/flight_engineer"></a>
        </div>

    </div>

    <div className="xl:w-[280px] md:w-[224px] sm:w-[226px] w-[45%] max-[500px]:w-[184px]">
        <img src={crew2img} alt="crew image" />
    </div>
</div>
  )
}
