export default function SmallNav() {
  return (
    <nav class="font-normal h-7 text-[12px] sm:text-[15px] md:text-[16px] flex gap-5">
      <a
        class="hover:border-b-2 pb-[8px] border-gray-400"
        href="/Destination/moon"
      >
        MOON
      </a>
      <a
        class="hover:border-b-2 pb-[8px] border-gray-400"
        href="/Destination/mars"
      >
        MARS
      </a>
      <a
        class="border-b-2 pb-[8px]"
        href="/Destination/europa"
      >
        EUROPA
      </a>
      <a
        class="hover:border-b-2 pb-[8px] border-gray-400"
        href="/Destination/Titan"
      >
        TITAN
      </a>
    </nav>
  );
}
