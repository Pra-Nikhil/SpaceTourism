import SmallNav from "./SmallNav"

export default function EuropaContent() {
  return (
    <div className="z-10 xl:w-[28%] md:w-[40%] sm:w-[76%] w-[80%] items-center md:block flex flex-col md:pt-10">
    < SmallNav />
    
    <p className="md:text-[82px] sm:text-[64px] text-[54px] sm:tracking-wider md:tracking-widest">EUROPA</p>
                    <p className="text-[14px] md:text-start text-center md:text-[16px] text-gray-200">
    
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of
                        ice skating, curling, hockey, or simple relaxation in your snug
                        wintery cabin.
                    </p>
    
                    <span className="w-full inline-block h-[1px] bg-gray-500 my-[16px] md:my-0"></span>
    
                    <section
                        className="w-full flex flex-col sm:flex-row justify-between md:justify-start md:gap-[24%] md:pt-[14px] text-center">
                        <p className="text-[14px] md:text-[16px] mb-2">Avg. distance <br/> <span
                                className="text-[22px] md:text-[26px]">628 mil. km</span></p>
                        <p className="text-[14px] md:text-[16px]">Est. travel time <br/> <span
                                className="text-[22px] md:text-[26px]">3 years</span></p>
                    </section>
        </div>
  )
}
