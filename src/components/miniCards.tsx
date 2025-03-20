import Image from "next/image";

export default function MiniCards() {
  return (
    <div className="w-[800px] h-max flex flex-col gap-[40px] justify-center items-center">
      {/* Cards Section Start */}
      <div className="w-max h-max flex flex-row items-center justify-center gap-[150px]">
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
          <div className="text-white text-[16px] font-light">3°C</div>
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
          <div className="text-white text-[16px] font-extralight">Humidity</div>
          <div className="text-white text-[16px] font-light">91%</div>
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
          <div className="text-white text-[16px] font-light">5 m/s</div>
        </div>
        {/* Wind Card End */}
      </div>
      {/* Cards Section End */}
    </div>
  );
}
