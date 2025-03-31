import Image from "next/image";

export const Subscribe = () => {
  return (
    <div className="w-full ">
      <div className=" flex  flex-col md:flex-row justify-center gap-2 items-center pt-16 py-2   ">
        <Image
          className=""
          src={"/images/subscribe/man-read.png"}
          alt="man reading a news paper"
          width={282}
          height={210}
        ></Image>
        <div className="h-full  ">
          <div>
            <p className="font-bold">GET OUR WEEKLEY</p>
            <span className="w-64 h-14 justify-center text-blue-900 text-2xl font-bold tracking-widest">
              NEWSLETTER
            </span>
          </div>
          <p className="w-[90%]">
            Get weekly updates on the newest design stories, case studies and
            tips right in your mailbox.
            <span className="font-bold">Subscribe now!</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-[90%] max-w-[600px] h-14 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <button className="bg-blue-900 text-white font-bold py-3 px-8 h-14  hover:bg-blue-950 hover:text-white transition duration-200 ease-in-out cursor-pointer">
          Subscribe
        </button>
      </div>
      <Image
        className="w-full object-fit object-center"
        src={"/images/banners/end-banner.png"}
        alt="Sri lankan rain forest"
        width={1504}
        height={564}
      ></Image>
    </div>
  );
};
