import MainCard from "./MainCard"
import { IoLocationSharp } from "react-icons/io5"

const Main = (props) => {

  let location = props.weather.location.name
  let currentTemp = props.weather.current.temp_f
  let feelsLike = props.weather.current.feelslike_f

  let weath0 = props.weather.forecast.forecastday[0]
  let avgTemp0 = weath0.day.avgTemp
  let minTemp0 = weath0.day.mintemp_f
  let maxTemp0 = weath0.day.maxtemp_f
  let weatherIcon0 = weath0.day.condition.icon
  let weatherText0 = weath0.day.condition.text
  let chanceOfRain0 = weath0.day.daily_chance_of_rain
  let uv0 = weath0.day.uv
  let sunrise0 = weath0.astro.sunrise
  let sunset0 = weath0.astro.sunset

  let weath1 = props.weather.forecast.forecastday[1]
  let avgTemp1 = weath1.day.avgTemp
  let minTemp1 = weath1.day.mintemp_f
  let maxTemp1 = weath1.day.maxtemp_f
  let weatherIcon1 = weath1.day.condition.icon
  let weatherText1 = weath1.day.condition.text
  let chanceOfRain1 = weath1.day.daily_chance_of_rain
  let uv1 = weath1.day.uv
  let sunrise1 = weath1.astro.sunrise
  let sunset1 = weath1.astro.sunset

  let weath2 = props.weather.forecast.forecastday[2]
  let avgTemp2 = weath2.day.avgTemp
  let minTemp2 = weath2.day.mintemp_f
  let maxTemp2 = weath2.day.maxtemp_f
  let weatherIcon2 = weath2.day.condition.icon
  let weatherText2 = weath2.day.condition.text
  let chanceOfRain2 = weath2.day.daily_chance_of_rain
  let uv2 = weath2.day.uv
  let sunrise2 = weath2.astro.sunrise
  let sunset2 = weath2.astro.sunset

  const mainCard = (
    <div className="mainCard">
      <div className='userLocation'>
        <IoLocationSharp /><p>{location}</p>
      </div>

      <div className="mainCardCurrent">
        <p>Current Temp: {currentTemp} &deg;F</p>
        <p id="feelsLike">(Feels Like: {feelsLike} &deg;F)</p>
      </div>
      <MainCard
        icon={weatherIcon0}
        text={weatherText0}
        avg={avgTemp0}
        low={minTemp0}
        high={maxTemp0}
        uv={uv0}
        rain={chanceOfRain0}
        sunrise={sunrise0}
        sunset={sunset0}
      />
    </div>
  )

  const forecastCardOne = (
    <div className="mainCard">
      <div className='userLocation'>
        <IoLocationSharp /><p>{location}</p>
      </div>
      <MainCard
        icon={weatherIcon1}
        text={weatherText1}
        avg={avgTemp1}
        low={minTemp1}
        high={maxTemp1}
        uv={uv1}
        rain={chanceOfRain1}
        sunrise={sunrise1}
        sunset={sunset1}
      />
    </div>
  )

  const forecastCardTwo = (
    <div className="mainCard">
      <div className='userLocation'>
        <IoLocationSharp /><p>{location}</p>
      </div>
      <MainCard
        icon={weatherIcon2}
        text={weatherText2}
        avg={avgTemp2}
        low={minTemp2}
        high={maxTemp2}
        uv={uv2}
        rain={chanceOfRain2}
        sunrise={sunrise2}
        sunset={sunset2}
      />
    </div>
  )


  return (props.weather != null & props.mainCard === 0) ? mainCard : (props.weather != null & props.mainCard === 1) ? forecastCardOne : (props.weather != null & props.mainCard === 2) ? forecastCardTwo : mainCard
}

export default Main