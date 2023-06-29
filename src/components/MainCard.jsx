import { BsCloudRain, BsSunrise, BsSunsetFill } from "react-icons/bs"
import { GiRadiations } from "react-icons/gi"

const MainCard = (props) => {

  const tempBar = (
    <div className="tempBarRange">
      <p>{props.low} &deg;F</p>
      <div className="tempBar">
        <p>Avg: {props.avg} &deg;F</p>
      </div>
      <p>{props.high} &deg;F</p>
    </div>
  )

  return (
    <div className="mainCardContent">

      <img src={props.icon} alt="weatherIcon" id="mainCardIcon"></img>

      <p id="mainCardWeatherText"> {props.text} </p>

      <div className="mainCardTemp">
        {tempBar}
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