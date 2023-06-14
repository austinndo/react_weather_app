import { useEffect } from 'react';
import axios from 'axios';
import { useGeolocated } from 'react-geolocated'

const API_KEY = process.env.REACT_APP_API_KEY

const DetermineGeolocation = (props) => {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    });

  useEffect(() => {

    if (coords) {
      props.setGeolocated(true);
      props.setUserLat(coords.latitude);
      props.setUserLong(coords.longitude);

      // const api_call = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${props.userLat},${props.userLong}&days=3&aqi=yes&alerts=yes`
      // const getForecast = async () => {
      //   let res = await axios.get(`${api_call}`)
      //   console.log(res)
      //   let weatherCurrent = res.data.current
      //   let weatherForecast = res.data.forecast
      //   props.setCurrentWeather(weatherCurrent)
      //   props.setForecastWeather(weatherForecast)
      // }
      // getForecast()  
      console.log(props.userLat, props.userLong)
    }
    },[coords])

  const GeolocationNotAvailableReturn = (
      <div className='geolocationUnavailable'>Your browser does not support Geolocation</div>
    )
    
  const GeolocationNotEnabledReturn = <div className='geolocationUnavailable'>Geolocation is not enabled</div>
    
  const GeolocationInProgress = <div className='geolocationUnavailable'>Getting the location data...</div>

  return (!isGeolocationAvailable)
    ? GeolocationNotAvailableReturn
    : (!isGeolocationEnabled)
    ? GeolocationNotEnabledReturn
    : (coords)
    ? false
    : GeolocationInProgress
}


export default DetermineGeolocation