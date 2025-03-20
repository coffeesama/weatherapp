export interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}
