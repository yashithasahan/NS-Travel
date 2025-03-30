import Destinations from "@/components/home/Destination";
import Explore from "@/components/home/Explore";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50  to-white/10 opacity-100"></div>

        <Image
          src={"/images/banners/sigiriya.jpg"}
          width={1440}
          height={2440}
          className="h-96 w-full object-fill object-center bg-amber-900"
          alt="Vercel Logo"
        ></Image>
      </div>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-2 ">
        <Destinations />
      </div>
      <Explore />
    </div>
  );
}
