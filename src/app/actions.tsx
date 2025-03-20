"use server";

export async function getWeatherData(city: string) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`
    );
    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}
