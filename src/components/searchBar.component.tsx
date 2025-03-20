"use client";
import { useWeather } from "../contexts/weatherContext.context";
import Image from "next/image";

export default function SearchBar() {
  const { handleSearch } = useWeather();

  return (
    <form
      action={handleSearch}
      className="w-[200px] md:w-[600px] lg:w-[800px] h-[40px] bg-white flex flex-row justify-center items-center rounded-4xl"
    >
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Enter city name..."
        className="w-[90%] text-center outline-0"
      />
      <button className="w-[10%] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center">
        <Image
          src="/searchBtn.png"
          alt="Search"
          width={100}
          height={100}
          className="w-[20px] h-[20px] self-center"
        />
      </button>
    </form>
  );
}
