import './App.css'
import DetermineGeolocation from './components/DetermineGeolocation'
import MainCard from './components/MainCard'
import ForecastCards from './components/ForecastCards'
import { useEffect, useState } from 'react'

function App() {

  const [geolocated, setGeolocated] = useState(false)
  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)
  const [weather, setWeather] = useState(null)
  const [mainCard, setMainCard] = useState(0)

  return (
    <div className='weatherApp'>
      <DetermineGeolocation
          geolocated={geolocated} setGeolocated={setGeolocated}
          userLat={userLat} setUserLat={setUserLat} 
          userLong={userLong} setUserLong={setUserLong}
          weather={weather} setWeather={setWeather}
          />
      <MainCard
          geolocated={geolocated}
          mainCard={mainCard}
          weather={weather}
      />
      {/* <ForecastCards
          geolocated={geolocated}
          mainCard={mainCard} setMainCard={setMainCard}
          weather={weather}
      /> */}
    </div>
    
  )

}

export default App
