"use client";
import Image from "next/image";
import { useWeather } from "../contexts/weatherContext";

export default function Weather() {
  const { weather, error } = useWeather();

  if (error) {
    return (
      <div className="w-[800px] h-max flex flex-col gap-[20px] justify-center items-center rounded-4xl bg-red-100 p-4">
        <div className="text-red-600 font-medium text-center">{error}</div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="w-[800px] h-max flex flex-col gap-[20px] justify-center items-center rounded-4xl">
        <div className="text-white font-medium text-center">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="w-[800px] h-max flex flex-col gap-[40px] justify-center items-center rounded-4xl">
      {/* Weather Name Section Start */}
      <div className="w-max h-max text-[30px] text-white font-semibold text-center flex flex-row items-center justify-center gap-4">
        <div className="flex flex-row items-center gap-1">
          <Image
            src="/cloudy.png"
            alt="Cloudy"
            width={200}
            height={200}
            className="w-[40px] h-[40px]"
          />
          <div className="">{weather?.weather[0]?.main}</div>
        </div>
      </div>
      {/* Weather Name Section End */}
    </div>
  );
}
