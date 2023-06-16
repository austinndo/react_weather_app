import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useGeolocated } from 'react-geolocated'
import MainCard from './components/MainCard'
import ForecastCards from './components/ForecastCards'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  const [geolocated, setGeolocated] = useState(false)
  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)
  const [weather, setWeather] = useState(null)
  const [mainCard, setMainCard] = useState(0)

  let userLocation = <div className='userLocation'></div>

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });

  useEffect(() => {
    const api_call = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userLat},${userLong}&days=3&aqi=yes&alerts=yes`
    const getForecast = async () => {
        let res = await axios.get(`${api_call}`);
        setWeather(res.data);
        userLocation = <div className='userLocation'>{res.data.location.name}</div>
      }

    if (coords) {
      setUserLat(coords.latitude);
      setUserLong(coords.longitude);
      getForecast().then(setGeolocated(true))
    }

  }, [coords])

  const GeolocationNotAvailableReturn = (
    <div className='weatherApp'>
      <div className='geolocationUnavailable'>Your browser does not support Geolocation</div>
    </div>
  )

  const GeolocationNotEnabledReturn = (
    <div className='weatherApp'>
      <div className='geolocationUnavailable'>Geolocation is not enabled</div>
    </div>
  )

  const GeolocationInProgress = (
    <div className='weatherApp'>
      <div className='geolocationUnavailable'>Getting the location data...</div>
    </div>
  )

  const GeolocationSucceeded = (
    <div className='weatherApp'>
          {userLocation}
      <MainCard
        geolocated={geolocated}
        mainCard={mainCard}
        weather={weather}
      />
      <ForecastCards
        geolocated={geolocated}
        mainCard={mainCard} setMainCard={setMainCard}
        weather={weather}
      />
    </div>)

  return (!isGeolocationAvailable)
    ? GeolocationNotAvailableReturn
    : (!isGeolocationEnabled)
      ? GeolocationNotEnabledReturn
      : (weather != null)
        ? GeolocationSucceeded
        : GeolocationInProgress

}

export default App
