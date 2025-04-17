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
  if (hoveredDestination) {
    selectedDestination = hoveredDestination;
  }
  return (
    <div className="flex flex-col gap-4 group rounded-md shadow-none hover:shadow-xl duration-500">
      <Image
        src={selectedDestination.image}
        alt={selectedDestination.name}
        width={500}
        height={300}
        className="w-full rounded-md shadow-lg group-hover:shadow-none duration-500"
      />
      <p className="my-2 mb-8 mx-6 text-sm">
        The place is in {selectedDestination.city}. Located in{" "}
        {selectedDestination.province}, <span className="font-semibold">{selectedDestination.name}</span>{" "}
        is {selectedDestination.description}
      </p>
    </div>
  );
}
