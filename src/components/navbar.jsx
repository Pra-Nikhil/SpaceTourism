
import Menu from "./Menu"

export default function navbar() {
    
  return (
    <header className=" h-[60px] xl:h-[100px] pl-6 flex justify-between items-center max-w-[1440px]">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <g fill="none" fill-rule="evenodd">
                <circle className="-z-10" cx="24" cy="24" r="16" fill="#FFF" />
                <path fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
            </g>
        </svg>
    </div>
    
< Menu />
    
</header>
  )
}
