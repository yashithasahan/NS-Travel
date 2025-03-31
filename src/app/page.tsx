import Destinations from "@/components/home/Destination";
import Explore from "@/components/home/Explore";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-white/5 to-white/0 opacity-100"></div>

        <Image
          src={"/images/banners/sigiriya.jpg"}
          width={1440}
          height={2440}
          className="min-h-[75vh] w-full object-cover object-center "
          alt="Vercel Logo"
        ></Image>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 text-white max-w-[1440px] mx-auto p-4">
          <p className="font-black  text-lg md:text-xl w-full md:w-3/5">
            Explore the Mysteries
          </p>
          <h1 className="font-black text-3xl md:text-5xl w-full md:w-3/5">
            Going to travel join with SN Tours.
          </h1>
          <button className="mt-4">
            <span className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-blue-950 hover:text-white transition duration-200 ease-in-out cursor-pointer">
              Join Now
            </span>
          </button>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-2 ">
        {/* <Destinations /> */}
      </div>
      <Explore />
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-2 ">
        {/* <Destinations /> */}
      </div>
    </div>
  );
}
