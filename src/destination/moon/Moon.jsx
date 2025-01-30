import SmallNav from "./SmallNav"

export default function Moon() {
  return ( <>
    <div className="z-10 xl:w-[28%] md:w-[40%] sm:w-[76%] w-[80%] items-center md:block flex flex-col md:pt-10">
< SmallNav />

<p className="md:text-[82px] sm:text-[64px] text-[54px] sm:tracking-wider md:tracking-widest">MOON</p>
                <p className="text-[14px] md:text-start text-center md:text-[16px] text-gray-200">
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                    regain perspective and come back refreshed. While you’re there, take in some history
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </p>

                <span className="w-full inline-block h-[1px] bg-gray-500 my-[16px] md:my-0"></span>

                <section
                    className="w-full flex flex-col sm:flex-row justify-between md:justify-start md:gap-[24%] md:pt-[14px] text-center">
                    <p className="text-[14px] md:text-[16px] mb-2">Avg. distance <br/> <span
                            className="text-[22px] md:text-[26px]">384,400 km</span></p>
                    <p className="text-[14px] md:text-[16px]">Est. travel time <br/> <span
                            className="text-[22px] md:text-[26px]">3 days</span></p>
                </section>
    </div>
    </>
    )
}
