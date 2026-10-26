function Weather({ forecast, errorMessage }) {
  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (!forecast) {
    return <p>Search for a city</p>;
  }

  return (
    <div>
      <h2>{forecast.city}</h2>
      <p>{forecast.condition}</p>
      <p>{forecast.temperature}°C</p>
    </div>
  );
}

export default Weather;