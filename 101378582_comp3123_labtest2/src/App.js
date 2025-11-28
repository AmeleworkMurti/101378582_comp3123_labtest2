import { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./App.css";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "83eeb8832dbad8f4b9e833282f5ff4ae";

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        setError("City not found!");
        setWeather(null);
        return;
      }

      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError("Error fetching weather");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };
return (
  <div 
    className="app"
    style={{
      background:
        weather && weather.weather[0].main === "Clear"
          ? "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
          : weather && weather.weather[0].main === "Rain"
          ? "linear-gradient(135deg, #4b79a1 0%, #283e51 100%)"
          : weather && weather.weather[0].main === "Snow"
          ? "linear-gradient(135deg, #83a4d4, #b6fbff)"
          : weather && weather.weather[0].main === "Clouds"
          ? "linear-gradient(135deg, #bdc3c7, #2c3e50)"
          : "linear-gradient(135deg, #4b79a1, #283e51)",
      minHeight: "100vh",
      paddingTop: "40px"
    }}
  >
    <h1>Weather Forecast</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>

    {error && <p className="error">{error}</p>}

    {weather && <WeatherCard data={weather} />}
  </div>
);
}
export default App;
