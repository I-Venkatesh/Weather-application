import React, { useState, useEffect} from "react";
import './App.css'
import Nav from "./Nav";
function App() {

  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [time, setTime] = useState('');
  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${query}&units=metric&APPID=73885f7f066287c5f9bbb5e34fe1204e`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log("Hiiii")
      }).catch((e) => console.error(e));
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
    const dt = new Date();
    const time = dt.toLocaleTimeString();
    setTime(time)
    },1000)
    return () => clearTimeout(timer)
  },)
  const dateBuilder = (d) => {
    let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    console.log(new Date())
  
    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="outer">
      <video src="/video/vid.mp4" autoPlay loop muted />
      <Nav/>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          /> 
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-box">
          <div className="location"><i class="fas fa-map-marker-alt"></i>&nbsp;{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
          
          <div className="date"><i class="fas fa-clock"></i>&nbsp;{time}</div>

        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</div>
          <div className="weather"><i class="fas fa-sun"></i>&nbsp;Max Temperature: {weather.main.temp_max}°C &nbsp;&nbsp;&nbsp;&nbsp; <i class="fas fa-snowflake"></i>&nbsp;Min Temperature: {weather.main.temp_min}°C</div>
          <div className="weather">Latitude: {weather.coord.lat}</div>
          <div className="weather">Longitude: {weather.coord.lon}</div>
          <div className="weather"><i class="fas fa-cloud-rain"></i>&nbsp;Humidity: {weather.main.humidity}%</div>
        </div>
        </div>
        
        ): ('')}
      </main>
    </div>
  );
}

export default App;
