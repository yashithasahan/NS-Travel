import Image from "next/image";
import React from "react";

const exploreData = [
  { id: 1, name: "Kandy", image: "/images/explore/expo1.jpg" },
  { id: 2, name: "Galle", image: "/images/explore/expo2.jpg" },
  { id: 3, name: "Yala", image: "/images/explore/expo3.png" },
];

interface ExploreProps {
  id: number;
  name: string;
  image: string;
}

const Explore = () => {
  return (
    <div className="">
      <h2 className="text-xl text-left font-bold pb-2 ">
        Explore what you can have
      </h2>
      <div className="w-full relative flex flex-row h-[440px] bg-green-300">
        {exploreData.map((expo) => (
          <ExploreCard
            key={expo.id}
            id={expo.id}
            name={expo.name}
            image={expo.image}
          />
        ))}
      </div>
    </div>
  );
};

const ExploreCard: React.FC<ExploreProps> = ({ id, name, image }) => {
  return (
    <div
      className="h-full w-[1000px] bg-amber-400 border border-2-black "
      key={id}
    >
      <Image
        className=""
        src={`${image}`}
        width={1000}
        height={567}
        alt={name}
      />
    </div>
  );
};

export default Explore;
