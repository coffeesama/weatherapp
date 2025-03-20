"use client";
import Image from "next/image";
import { useWeather } from "../contexts/weatherContext.context";

function formatUnixTimestamp(timestamp?: number) {
  if (!timestamp) return ""; // Handle undefined values safely

  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function MiniCards() {
  const { weather } = useWeather();
  return (
    <div className="w-[800px] h-max flex flex-col gap-[40px] justify-center items-center">
      {/* Cards Section Start */}
      <div className="top">
        <div className="w-max h-max flex flex-row items-center justify-center gap-[30px] md:gap-[80px] lg:gap-[100px]">
          {/* Temperature Card Start */}
          <div className="w-[75px] h-max flex flex-col items-center justify center gap-[3px]">
            <Image
              src="/temperature.png"
              alt="Temperature"
              width={200}
              height={200}
              className="w-[40px] h-[40px]"
            />
            <div className="text-white text-[16px] font-extralight">
              Feels Like
            </div>
            <div className="text-white text-[16px] font-light">
              {weather?.main.feels_like ?? "--"}°C
            </div>
          </div>
          {/* Temperature Card End */}
          {/* Humidity Card Start */}
          <div className="w-[75px] h-max flex flex-col items-center justify center gap-[3px]">
            <Image
              src="/humidity.png"
              alt="Humidity"
              width={200}
              height={200}
              className="w-[40px] h-[40px]"
            />
            <div className="text-white text-[16px] font-extralight">
              Humidity
            </div>
            <div className="text-white text-[16px] font-light">
              {weather?.main.humidity ?? "--"}%
            </div>
          </div>
          {/* Humidity Card End */}
          {/* Wind Card Start */}
          <div className="w-[75px] h-max flex flex-col items-center justify center gap-[3px]">
            <Image
              src="/wind.png"
              alt="Wind"
              width={200}
              height={200}
              className="w-[40px] h-[40px]"
            />
            <div className="text-white text-[16px] font-extralight">Wind</div>
            <div className="text-white text-[16px] font-light">
              {weather?.wind.speed ?? "--"}m/s
            </div>
          </div>
          {/* Wind Card End */}
        </div>
      </div>
      <div className="bottom">
        <div className="w-max h-max flex flex-row items-center justify-center gap-[80px]">
          {/* Sunrise Card Start */}
          <div className="w-[75px] h-max flex flex-col items-center justify center gap-[3px]">
            <Image
              src="/sunrise.png"
              alt="Sunrise"
              width={200}
              height={200}
              className="w-[40px] h-[40px]"
            />
            <div className="text-white text-[16px] font-extralight">
              Sunrise
            </div>
            <div className="text-white text-[16px] font-light">
              {formatUnixTimestamp(weather?.sys.sunrise) ?? "--"}
            </div>
          </div>
          {/* Sunrise Card End */}
          {/* Sunset Card Start */}
          <div className="w-[75px] h-max flex flex-col items-center justify-center gap-[3px]">
            <Image
              src="/sunset.png"
              alt="Sunset"
              width={200}
              height={200}
              className="w-[40px] h-[40px]"
            />
            <div className="text-white text-[16px] font-extralight">Sunset</div>
            <div className="text-white text-[16px] font-light">
              {formatUnixTimestamp(weather?.sys.sunset) ?? "--"}
            </div>
          </div>
          {/* Sunset Card End */}
        </div>
      </div>
      {/* Cards Section End */}
    </div>
  );
}
