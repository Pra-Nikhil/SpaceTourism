import crew3Img from "./CREW3.png"

export default function ContentSection() {
  return (
        <div class="md:mt-[120px] sm:mt-[8%] max-w-[1440px] h-[80%] flex flex-col md:flex-row md:justify-center justify-between items-center md:gap-16 xl:pb-16">
            <div class="xl:w-[35%] md:w-[40%] sm:w-[76%] w-[80%] items-center md:block flex flex-col pt-6 md:pt-10">
                <p class="md:text-[26px] text-[18px] text-gray-400">PILOT</p>
                <p class="text-center sm:text-start mb-1 xl:text-[34px] md:text-[32px] sm:text-[28px] text-[26px] sm:tracking-wider md:tracking-widest">VICTOR GLOVER</p>
                <p class="xl:text-[16px] md:text-start text-center text-[14px] text-gray-200">
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                    International Space Station. Glover is a commander in the U.S. Navy where 
                    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                    station systems flight engineer. 
                </p>

                <div class="my-6 flex gap-2 md:gap-5 pt-0 md:pt-[112px]">
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/commander"></a>
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/specialist"></a>
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-white rounded-full" href="/crew/pilot"></a>
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/flight_engineer"></a>
                </div>

            </div>

            <div class="xl:w-[280px] md:w-[224px] sm:w-[246px] w-[44%] max-[500px]:w-[186px]">
                <img src={crew3Img} alt="crew image" />
            </div>
        </div>
  )
}
