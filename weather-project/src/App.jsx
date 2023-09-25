import { useState, useEffect } from "react"
import MaterialSymbolsSearchRounded from "../src/assets/icon/searchIcon"
import "./App.css"

const API_KEY = "f990561c7f54cbbeb53a7f47536adc36"
// const location = "London"
function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState("")

  const cloudy = 'https://api.iconify.design/fluent:weather-partly-cloudy-day-20-regular.svg'
  const sunny = 'https://api.iconify.design/fluent:weather-sunny-20-regular.svg'
  const rainy = 'https://api.iconify.design/fluent:weather-rain-20-regular.svg'
  const snowy = 'https://api.iconify.design/fluent:weather-snow-20-regular.svg'
  const thunder = 'https://api.iconify.design/fluent:weather-thunderstorm-20-regular.svg'
  const mist = 'https://api.iconify.design/fluent:weather-fog-20-regular.svg'

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      )
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.error("Error fetching weather data:", error)
    }
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleFetchClick = () => {
    fetchData()
  }
  return (
    //Reacts Fragments
    <>
      {/* <div className="m-20">
        <div className="flex items-center justify-center flex-col gap-6">
          <div className="flex gap-2 items-center rounded-xl justify-between bg-white border border-black-1 py-1 w-full px-8">
            <label htmlFor="locationInput">Enter Location </label>
            <input
              type="text"
              id="locationInput"
              value={location}
              onChange={handleLocationChange}
              className="rounded-lg px-4 py-1 my-1 bg-slate-50"
            />
            <MaterialSymbolsSearchRounded
              onClick={handleFetchClick}
              className="w-5 h-5"
            />
          </div>
          <div>
            {weatherData ? (
              <div className="bg-white px-20 rounded-xl py-20 border border-black-1 flex flex-col justify-center items-center">
                <h2 className="text-center text-3xl font-semibold">
                  {weatherData.name}
                </h2>
                <img src="src\assets\day.png" alt="" />
                <p className="text-xl font-semibold">
                  {weatherData.main.temp} °C
                </p>
                <p className="text-xl font-semibold">
                  {weatherData.weather[0].description}
                </p>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
          </div>
        </div>
      </div> */}
      <div className="m-20 transition-transform duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center flex-col gap-6">
          <div className="flex gap-2 items-center rounded-xl justify-between bg-white py-1 w-full px-8 shadow-xl">
            <label htmlFor="locationInput">Enter Location </label>
            <input
              type="text"
              id="locationInput"
              value={location}
              onChange={handleLocationChange}
              className="rounded-lg px-4 py-1 my-1 bg-slate-50"
            />
            <MaterialSymbolsSearchRounded className="w-5 h-5" />
          </div>
          <div>
            <div className="bg-white rounded-xl p-14  flex flex-row justify-between items-center shadow-2xl gap-12 w-full">
              <img src={sunny} alt="" className="w-72" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <h2 className="text-center text-2xl font-semibold">New York</h2>
                <p>Sunday, 23 Oct</p>
                <p className="text-8xl">25°C</p>
                <p className="text-xl font-semibold">Sunny</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
