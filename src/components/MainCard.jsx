import { useEffect } from "react"
import geodata from "../geodata.json"
import ForecastCards from "./ForecastCards"

const MainCard = (props) => {

  // let mainWeather = props.currentWeather
  // let setWeather = props.setCurrentWeather

  // useEffect(() => {
  //   if (props.mainCard === 0) {

  //   }
  //   setWeather(geodata.current)
  // }, [props.mainCard])


  // #change these to props... when ready to make api calls
  let temp = geodata.current.temp_f
  let feelsLike = geodata.current.feelslike_f
  let weatherIcon = geodata.current.condition.icon
  let location = geodata.location.name

  const mainCard = (
    <div className="mainCard">
      <div className="mainCardLocation">
        <p>{location}</p>
      </div>
      <div className="mainCardIconAndTemp">
        <img src={weatherIcon}></img>
        <p>Current Temp: {temp}</p>
        <p>Feels Like: {feelsLike}</p>
      </div>
      <div className="mainCardTempRanges">
        <p>Low: </p>
        <p>High: </p>
      </div>
    </div>
  )

  // const mainCardLogic = (
  //   (props.mainCard === 0) ? ForecastCards.cardZero : (props.mainCard === 1) ? ForecastCards.cardOne : ForecastCards.cardTwo
  // )

  // useEffect(() => {
  //   return (props.mainCard === 0) ? ForecastCards.cardZero : (props.mainCard === 1) ? ForecastCards.cardOne : ForecastCards.cardTwo
  // }, [props.mainCard])

  return (props.geolocated === true) ? mainCard : false
}

export default MainCard