"use client";

import data from "@/data/destinations.json";
import { Destination } from "@/types/destination";
import { useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });
const Description = dynamic(() => import("@/components/Description"), {
  ssr: false,
});

export default function Home() {
  const destinations: Destination[] = data;
  const [selectedDestination, setSelectedDestination] = useState<Destination>(
    destinations[0]
  );
  const [hoveredDestination, setHoveredDestination] =
    useState<Destination | null>(null);

  return (
    <div className="min-h-[100svh] mx-auto w-full min-w-sm max-w-6xl">
      <div className="p-4 flex flex-col md:flex-row justify-evenly gap-4 pt-12">
        <div className="w-full md:w-6/12">
          <Map
            destinations={destinations}
            onSelect={setSelectedDestination}
            onHover={setHoveredDestination}
          />
        </div>
        <div className="w-full md:w-5/12">
          <Description
            selectedDestination={selectedDestination}
            hoveredDestination={hoveredDestination}
          />
        </div>
      </div>
    </div>
  );
}
