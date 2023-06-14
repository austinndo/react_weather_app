import geodata from "../geodata.json"
import ForecastCards from "./ForecastCards"

const MainCard = (props) => {

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
  // (props.mainCard === 0) ? ForecastCards.cardZero : (props.mainCard === 1) ? ForecastCards.cardOne : ForecastCards.cardTwo

  return (props.geolocated === true) ? mainCard : false
}

export default MainCard