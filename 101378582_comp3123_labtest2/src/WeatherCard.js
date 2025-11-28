function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
        alt="weather icon"
      />

      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="desc">{weather[0].description}</p>

      <div className="extra-info">
        <p><strong>Feels like:</strong> {Math.round(main.feels_like)}°C</p>
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Wind:</strong> {wind.speed} m/s</p>
        <p>
          <strong>Max:</strong> {Math.round(main.temp_max)}°C 
          &nbsp; | &nbsp; 
          <strong>Min:</strong> {Math.round(main.temp_min)}°C
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
