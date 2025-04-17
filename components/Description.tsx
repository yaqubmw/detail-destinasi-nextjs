"use client";

import { Destination } from "@/types/destination";
import Image from "next/image";

interface DescriptionProps {
  selectedDestination: Destination;
  hoveredDestination: Destination | null;
}

export default function Description({
  selectedDestination,
  hoveredDestination,
}: DescriptionProps) {
  const destination = hoveredDestination ?? selectedDestination;

  return (
    <div className="flex flex-col gap-4 group/desc rounded-md shadow-none hover:shadow-xl duration-500">
      <Image
        src={destination.image}
        alt={destination.name}
        width={500}
        height={280}
        className="w-full aspect-video rounded-md shadow-xl group-hover/desc:shadow-none duration-500 object-cover object-center"
      />
      <p className="my-2 mx-2 sm:mx-4 text-sm">
        The place is in {destination.city}. Located in{" "}
        {destination.province},{" "}
        <span className="font-semibold">{destination.name}</span> is{" "}
        {destination.description}
      </p>
      <div className="mx-2 sm:mx-4 mb-8 flex items-center gap-3 group/seemore cursor-pointer">
        <span className="text-sm group-hover/seemore:text-[#7e8ac3] duration-500">
          See More
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 group-hover/seemore:translate-x-1.5 duration-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
