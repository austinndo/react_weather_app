import { BsCloudRain, BsSunrise, BsSunsetFill } from "react-icons/bs"
import { GiRadiations } from "react-icons/gi"

const MainCard = (props) => {

  const uvCheck = (uv, min, max) => {
    return uv >= min && uv <= max;
  }

  const uvIDLogic = () => {
    return uvCheck(props.uv, 1, 2) ? "uvLow" : uvCheck(props.uv, 3, 5) ? "uvModerate" : uvCheck(props.uv, 6, 7) ? "uvHigh" : uvCheck(props.uv, 8, 10) ? "uvVeryHigh" : "uvExtreme"
  }

  const tempBar = (
    <div className="tempBarRange">
      <p id="tempLow">{props.low} &deg;F</p>
      <div className="tempBar">
        <p>Avg: {props.avg} &deg;F</p>
      </div>
      <p id="tempHigh">{props.high} &deg;F</p>
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
          <GiRadiations size={12} />
          <div className="mainCardUVText">
            <p>UV Index:</p>
            <p id={uvIDLogic()}>{props.uv}</p>
          </div>
        </div>

        <div>
          <BsCloudRain size={12} />
          <p>Chance of Rain: {props.rain}</p>
        </div>
      </div>

      <div className="mainCardSun">
        <div>
          <BsSunrise size={12} />
          <p>Sunrise: {props.sunrise}</p>
        </div>
        <div>
          <BsSunsetFill size={12} />
          <p>Sunset: {props.sunset}</p>
        </div>
      </div>
    </div>
  )
}

export default MainCard