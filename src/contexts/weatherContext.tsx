"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { WeatherData } from "@/models/weatherdata.model";
import { getWeatherData } from "@/app/actions";

interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  handleSearch: (formData: FormData) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = async (formData: FormData) => {
    const city = formData.get("city") as string;
    const { data }: any = await getWeatherData(city);

    if (data) {
      setWeather(data);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather, handleSearch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
