import { BsCloudRain, BsSunrise, BsSunsetFill } from "react-icons/bs"
import { GiRadiations } from "react-icons/gi"

const MainCard = (props) => {

  return (
    <div className="mainCardContent">

      <img src={props.icon} alt="weatherIcon" id="mainCardIcon"></img>

      <p id="mainCardWeatherText"> {props.text} </p>

      <div className="mainCardTemp">
        <p>Avg Temp: {props.avg} &deg;F</p>
        <div className="mainCardTempRange">
          <p>Low: {props.low} &deg;F</p>
          <p>High: {props.high} &deg;F</p>
        </div>
      </div>

      <div className="mainCardUVAndRain">
        <div>
          <GiRadiations />
          <p>UV Index: {props.uv}</p>
        </div>

        <div>
          <BsCloudRain />
          <p>Chance of Rain: {props.rain}</p>
        </div>
      </div>

      <div className="mainCardSun">
        <div>
          <BsSunrise />
          <p>Sunrise: {props.sunrise}</p>
        </div>
        <div>
          <BsSunsetFill />
          <p>Sunset: {props.sunset}</p>
        </div>
      </div>
    </div>
  )
}

export default MainCard