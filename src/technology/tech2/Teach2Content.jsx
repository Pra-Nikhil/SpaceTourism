import React from "react";
import Tech2img from "./tech2.png";
import Tech2img2 from "./Bitmap.png";
import Imgmobile from "./tech2mobile.png";

export default function Teach2Content() {
  return (
    <div class="max-w-[1440px] min-h-[634px] max-[400px]:min-h-[560px] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center xl:pb-16">
      <div class="xl:w-[50%] min-h-[320px] md:w-[52%] sm:w-[76%] w-[80%] items-center flex md:flex-row  flex-col xl:ml-24 md:ml-12 md:mr-2">
        <div class="text-center  text-gray-200 flex md:flex-col gap-2 md:gap-5 pt-0 md:mx-8 my-4">
          <a
            class="border border-gray-600 flex justify-center items-center md:w-10 md:h-10 w-8 h-8 bg-transparent hover:border-white rounded-full"
            href="/technology/launch_vehicle"
          >
            1
          </a>
          <a
            class="flex justify-center items-center md:w-10 md:h-10 w-8 h-8 text-black bg-white rounded-full"
            href="/technology/spaceport"
          >
            2
          </a>
          <a
            class="border border-gray-600 flex justify-center items-center md:w-10 md:h-10 w-8 h-8 bg-transparent hover:border-white rounded-full"
            href="/technology/space_capsule"
          >
            3
          </a>
        </div>

        <div class="">
          <p class="md:text-[26px] text-[18px] text-neutral-500 md:text-start text-center">
            THE TERMINOLOGY...
          </p>
          <p class="text-center md:text-start mb-1 xl:text-[34px] md:text-[32px] sm:text-[28px] text-[26px] sm:tracking-wider md:tracking-widest">
            SPACEPORT
          </p>
          <p class="xl:text-[16px] md:text-start text-center text-[14px] text-gray-400">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </div>
      </div>

      <div class="xl:w-[480px] md:w-[380px] w-full overflow-hidden md:mt-0 sm:mt-[12%]">
        <img class="md:block hidden" src={Tech2img2} alt="crew image" />
        <img
          class="max-[400px]:hidden md:hidden"
          src={Tech2img}
          alt="crew image"
        />
        <img
          class="hidden w-full max-[400px]:block"
          src={Imgmobile}
          alt="crew image"
        />
      </div>
    </div>
  );
}
