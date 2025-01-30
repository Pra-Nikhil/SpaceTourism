import Navbar from "./navbar";
import Main from "./main";
import FallingStar from "./FallingStar";
import Popup from "./popup";

export default function AppSection() {
  return (
    
    <div className=" overflow-hidden text-white font-thin max-w-[1440px] min-h-[1024px] mx-auto">
    <div className=" max-w-[1440px] min-h-[1024px] bg-no-repeat bg-cover sm:bg-none">
    <Popup />
    <FallingStar/>
      <div
        id="home"
        className="overflow-hidden max-sm:bg-[right_0_top_-2rem] bg-cover bg-no-repeat sm:bg-[right_0_top_-10rem] md:bg-[center_top_0] w-full min-h-[780px] bg-[url('./assets/tablet-earth1.png')] md:bg-[url('./assets/desktop-earth1.png')]"
      >
        <Navbar />
        <Main />
      </div>
    </div>
  </div>
  )
}
