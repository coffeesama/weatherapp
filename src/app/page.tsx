"use client";
import SearchBar from "@/components/searchBar";
import MiniCards from "@/components/miniCards";
import Weather from "@/components/weather";
import { useWeather } from "../contexts/weatherContext";
import { Inter, Instrument_Serif } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ weight: "400" });

export default function Home() {
  const currentDate = new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = currentDate.toLocaleString("en-US", options);

  const lowerCaseFormat = formattedDate.replace("AM", "am").replace("PM", "pm");

  const { weather } = useWeather();
  console.log(weather);
  return (
    <div
      className={`${inter.className} min-h-screen bg-black p-4 flex items-center justify-center relative`}
    >
      <div className="w-full max-w-md flex gap-[60px] items-center justify-center flex-col">
        <div className="flex items-center justify-between flex-col gap-[40px]">
          <div className="w-max text-white text-[16px] font-light">
            {lowerCaseFormat}
          </div>
          <header
            className={`${instrumentSerif.className} w-max text-white text-[64px] font-black`}
          >
            {weather?.name}
          </header>
          <div>
            <SearchBar />
          </div>
          <main>
            <Weather />
          </main>
          <div>
            <MiniCards />
          </div>
          <footer
            className={`${instrumentSerif.className} w-max text-white text-[16px] font-light opacity-30 absolute bottom-4 left-1/2 transform -translate-x-1/2`}
          >
            Made By. Yusuf Eren Elmas
          </footer>
        </div>
      </div>
    </div>
  );
}
