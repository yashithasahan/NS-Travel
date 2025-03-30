import Image from "next/image";
import React from "react";

const destinationsData = [
  { id: 1, name: "Kandy", image: "/images/destinations/kandy.png" },
  { id: 2, name: "Galle", image: "/images/destinations/galle.png" },
  { id: 3, name: "Yala", image: "/images/destinations/yala.png" },
  { id: 4, name: "Jaffna", image: "/images/destinations/jaffna.png" },
];

interface DestinationProps {
  id: number;
  name: string;
  image: string;
}

const Destinations = () => {
  return (
    <div className="">
      <h2 className="text-xl text-left font-bold pb-2 ">Top Destinations</h2>
      <div className="w-max grid grid-cols-2 lg:grid-cols-4 gap-4">
        {destinationsData.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            image={destination.image}
          />
        ))}
      </div>
    </div>
  );
};

const DestinationCard: React.FC<DestinationProps> = ({ id, name, image }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden relative w-[275px] h-[400px] group cursor-pointer"
      key={id}
    >
      <Image
        className="group-hover:scale-200 transition-transform duration-200 ease-in-out"
        src={`${image}`}
        width={275}
        height={400}
        alt={name}
      />
      <h3 className="absolute bottom-8 left-4 text-white font-black text-5xl group-hover:scale-105 trasnlate-y-16 transition-transform duration-200 ease-in-out ">
        {name}
      </h3>
    </div>
  );
};

export default Destinations;
