import { useState } from "react"

export default function popup() {
  const [open, close] = useState(true)
  return (
    <div className={`${open ? "block" : "translate-x-60 w-0 h-0 md:w-0 md:h-0"} transition-all  pt-4 z-10 fixed md:w-[260px] md:h-[180px] w-[204px] h-[160px] rounded-2xl bg-gradient-to-t to-purple-900 from-sky-800 right-2 bottom-4 md:right-8 md:bottom-10`}>
      <button className="absolute right-[16px] top-[10px] text-black" onClick={() => {close(!open)}}>
      <p className="md:w-[20px] w-[14px]"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign--v1.png" alt="delete-sign--v1"/></p>
        </button>
      <p className="text-[14px] md:text-[16px] text-center pt-2">
        WELCOME TO SPACE TOURISM
        <p className="text-[12px] md:text-[14px] text-orange-200">Hii Kim,<br /> Hey, I am Nikhil. I really like to create Front end of websites</p>
        <p className="text-[12px] md:text-[14px] text-lime-200">I'm still learning so Please let me know your opinion by tagging me on Telegram </p>

      </p>
    </div>
  )
}
