import './App.css'
import DetermineGeolocation from './components/DetermineGeolocation'
import MainCard from './components/MainCard'
import { useState } from 'react'

function App() {

  const [geolocated, setGeolocated] = useState(false)
  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecastWeather, setForecastWeather] = useState({})

  return (
    <div className='weatherApp'>
      <DetermineGeolocation
          geolocated={geolocated} setGeolocated={setGeolocated}
          userLat={userLat} setUserLat={setUserLat} 
          userLong={userLong} setUserLong={setUserLong}
          currentWeather={currentWeather} setCurrentWeather={setCurrentWeather}
          forecastWeather={forecastWeather} setForecastWeather={setForecastWeather}
          >
      </DetermineGeolocation>
      <MainCard></MainCard>
    </div>
    
  )

}

export default App
