import './App.css'
import DetermineGeolocation from './components/DetermineGeolocation'
import MainCard from './components/MainCard'
import ForecastCards from './components/ForecastCards'
import { useState } from 'react'

function App() {

  const [geolocated, setGeolocated] = useState(false)
  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecastWeather, setForecastWeather] = useState({})
  const [mainCard, setMainCard] = useState(0)

  return (
    <div className='weatherApp'>
      Weather App
      <DetermineGeolocation
          geolocated={geolocated} setGeolocated={setGeolocated}
          userLat={userLat} setUserLat={setUserLat} 
          userLong={userLong} setUserLong={setUserLong}
          currentWeather={currentWeather} setCurrentWeather={setCurrentWeather}
          forecastWeather={forecastWeather} setForecastWeather={setForecastWeather}
          />
      <MainCard
          geolocated={geolocated}
          mainCard={mainCard}
          currentWeather={currentWeather}
      />
      <ForecastCards
          geolocated={geolocated}
          mainCard={mainCard} setMainCard={setMainCard}
          forecastWeather={forecastWeather}
      />
    </div>
    
  )

}

export default App
