import { useState } from "react";
import Weather from "./weather.jsx";

const API_KEY = "6bc9b6f8fc117c81d93e995d5e9a7b13";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function fetchWeather() {
    const cityName = city.trim();

    if (!cityName) {
      setError("Enter a city");
      return;
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      setError("City not found");
      setWeather(null);
      return;
    }

    const data = await response.json();
    setWeather({
      city: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].description,
    });
    setError("");
  }

  return (
    <div>
      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Search</button>
      <Weather forecast={weather} errorMessage={error} />
    </div>
  );
}

export default App;