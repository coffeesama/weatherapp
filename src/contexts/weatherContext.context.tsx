"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { WeatherData } from "@/models/weatherdata.model";
import { getWeatherData } from "@/actions/actions.action";

interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  handleSearch: (formData: FormData) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Sayfa yüklendiğinde New York verisini çek
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const { data, error }: any = await getWeatherData("New York");

        if (error) {
          setError(error.message || "Default City Error.");
          setWeather(null);
        } else if (data) {
          setWeather(data);
          setError(null);
        }
      } catch (err) {
        setError("Error.");
        setWeather(null);
      }
    };

    // Eğer weather null ise New York verisini çek
    if (!weather) {
      fetchDefaultWeather();
    }
  }, []);

  const handleSearch = async (formData: FormData) => {
    const city = formData.get("city") as string;

    // Şehir alanı boş olmamalı
    if (!city || city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }
    try {
      setError(null); // Önceki hataları temizle
      const { data, error }: any = await getWeatherData(city);

      if (error) {
        setError(error.message || `"${city}" city is not found.`);
        setWeather(null);
      } else if (data) {
        setWeather(data);
        setError(null);
      } else {
        setError(`"${city}" city has not have a weather data.`);
        setWeather(null);
      }
    } catch (err) {
      setError("Error.");
      setWeather(null);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, error, setError, handleSearch }}
    >
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
