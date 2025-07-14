import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'Mumbai',
    feelsLike: 306.05,
    humidity: 83,
    temp: 301.27,
    tempMax: 301.27,
    tempMin: 301.27,
    weather: 'overcast clouds',
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Weather App!</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
