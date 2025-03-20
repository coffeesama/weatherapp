"use server";

import { WeatherData } from "@/models/weatherdata.model";

export async function getWeatherData(
  city: string
): Promise<{ data?: WeatherData }> {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`
    );
    if (!res.ok) {
      // HTTP hatası durumunda
      if (res.status === 404) {
        return {
          data: undefined,
          error: { message: `"${city}" city is not found.` },
        };
      }
      return {
        data: undefined,
        error: {
          message: `Weather data error: ${res.statusText}`,
        },
      };
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
    return {};
  }
}
