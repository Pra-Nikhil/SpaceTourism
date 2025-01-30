import Crew4Img from "./CREW4.png"

export default function crew4seaction() {
  return (
    <div
            class="md:mt-[120px] sm:mt-[8%] max-w-[1440px] h-[80%] flex flex-col md:flex-row md:justify-center justify-between items-center md:gap-16 xl:pb-16">
            <div class="xl:w-[35%] md:w-[40%] sm:w-[76%] w-[80%] items-center md:block flex flex-col pt-6 md:pt-10">
                <p class="md:text-[26px] text-[18px] text-gray-400">FLIGHT ENGINEER</p>
                <p
                    class="text-center sm:text-start mb-1 xl:text-[34px] md:text-[32px] sm:text-[28px] text-[26px] sm:tracking-wider md:tracking-widest">
                    ANOUSHEH ANSARI</p>
                <p class="xl:text-[16px] md:text-start text-center text-[14px] text-gray-200">
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to
                    fly to the ISS, and the first Iranian in space.
                </p>

                <div class="my-6 flex gap-2 md:gap-5 pt-0 md:pt-[112px]">
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/commander"></a>
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/specialist"></a>
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full" href="/crew/pilot"></a>
                    <a class="inline-block md:w-3 md:h-3 w-2 h-2 rounded-full bg-white" href="/crew/flight_engineer"></a>
                </div>

            </div>

            <div class="xl:w-[280px] md:w-[224px] sm:w-[246px] w-[44%] max-[500px]:w-[176px]">
                <img src={Crew4Img} alt="crew image" />
            </div>
        </div>
  )
}
