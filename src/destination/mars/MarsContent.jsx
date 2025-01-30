import Mars from "./Mars"
import MarsImg from "./MarsImg"

export default function MarsContent() {
  return (
    <div className="w-full sm:h-[740px] h-[640px] flex flex-col md:flex-row justify-center items-center md:gap-4 xl:gap-12 xl:pb-16 sm:pb-24 pb-16">
< MarsImg />
< Mars />
    </div>
  )
}
