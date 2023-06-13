import './App.css'
import DetermineGeolocation from './components/DetermineGeolocation'
import { useState, useEffect } from 'react'

function App() {

  const [geolocated, setGeolocated] = useState(false)
  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecastWeather, setForecastWeather] = useState({})

  return (
    <div>
      Weather App!
      <DetermineGeolocation 
        geolocated={geolocated} setGeolocated={setGeolocated}
        userLat={userLat} setUserLat={setUserLat} 
        userLong={userLong} setUserLong={setUserLong}
        currentWeather={currentWeather} setCurrentWeather={setCurrentWeather}
        forecastWeather={forecastWeather} setForecastWeather={setForecastWeather}
        >
      </DetermineGeolocation>
    </div>
  )

}

export default App
