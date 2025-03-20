"use client";
import Image from "next/image";
import { useWeather } from "../contexts/weatherContext";

export default function Weather() {
  const { weather, error } = useWeather();

  if (error) {
    return (
      <div className="w-max max-w-[200px] md:max-w-[600px] lg:max-w-[800px] h-max overflow-hidden flex flex-col gap-[20px] justify-center items-center rounded-4xl bg-red-100 p-2">
        <div className="text-red-600 font-medium text-center">{error}</div>
      </div>
    );
  }
  return (
    <div className="w-[800px] h-max flex flex-col gap-[40px] justify-center items-center rounded-4xl">
      {/* Weather Name Section Start */}
      <div className="w-max h-max text-[30px] text-white font-semibold text-center flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4">
        <div className="flex flex-row items-center gap-1">
          <Image
            src={`https://openweathermap.org/img/wn/${
              weather?.weather[0]?.icon || "10d"
            }@2x.png`}
            alt={weather?.weather[0]?.description || "Weather Icon"}
            width={200}
            height={200}
            className="w-[40px] h-[40px]"
          />
          <div className="">{weather?.weather[0].description}</div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image
            src="/temperature.png"
            alt="Temperature"
            width={200}
            height={200}
            className="w-[30px] h-[30px]"
          />
          <div className="w-max h-max text-[20px] text-white font-light text-center">
            {weather?.main.temp}°C
          </div>
          <div className="w-max h-max text-[12px] text-white font-extralight text-center flex flex-col justify-center items-center">
            <div className="up flex gap-1">
              {weather?.main.temp_max}°C
              <Image
                src="/uparrow.png"
                alt="uparrow"
                width={200}
                height={200}
                className="w-[10px] h-[10px]"
              />
            </div>
            <div className="down flex gap-1">
              {weather?.main.temp_min}°C
              <Image
                src="/downarrow.png"
                alt="downarrow"
                width={200}
                height={200}
                className="w-[10px] h-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Weather Name Section End */}
    </div>
  );
}
