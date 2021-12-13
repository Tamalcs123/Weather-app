import React, { useState, useEffect } from "react";
import "../components/styles.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Kolkata");
  const [tempInfo, setTempInfo] = useState({});
  // console.log(searchTerm);
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=34837131135196e60a46c99f630f0eff`;

      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      const { temp, pressure, humidity } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myWeatherInfo = {
        temp,
        pressure,
        humidity,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search city.."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            <button className="searchButton" onClick={getWeatherInfo}>
          search
        </button>
        </div>
      
      </div>
      <WeatherDetails {...tempInfo}/>
    </>
  );
}

export default SearchMain;
