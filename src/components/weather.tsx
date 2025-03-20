import Image from "next/image";

export default function Weather() {
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
          <div className="">Rainy</div>
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
            3°C
          </div>
        </div>
      </div>
      {/* Weather Name Section End */}
    </div>
  );
}
