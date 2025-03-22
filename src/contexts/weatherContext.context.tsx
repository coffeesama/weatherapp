"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useRef,
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
  const initialLoadDone = useRef(false);

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const {
          data,
          error,
        }: { data?: WeatherData; error?: { message: string } } =
          await getWeatherData("New York");

        if (error) {
          setError(error.message || "Default City Error.");
          setWeather(null);
        } else if (data) {
          setWeather(data);
          setError(null);
        }
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(`Error: ${errorMessage}`);
        setWeather(null);
      }
    };

    if (!initialLoadDone.current) {
      fetchDefaultWeather();
      initialLoadDone.current = true;
    }
  }, []);

  const handleSearch = async (formData: FormData) => {
    const city = formData.get("city")?.toString().trim();

    console.log({ weather, setWeather, error, setError, handleSearch });

    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    try {
      setError(null);
      const {
        data,
        error,
      }: { data?: WeatherData; error?: { message: string } } =
        await getWeatherData(city);

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
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setError(`Error: ${errorMessage}`);
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
