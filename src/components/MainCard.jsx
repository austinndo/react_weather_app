import { useEffect } from "react"

const MainCard = (props) => {

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
  let sunrise0 = weath0.astro.sunrise
  let sunset0 = weath0.astro.sunset

  let weath1 = props.weather.forecast.forecastday[0]
  let avgTemp1 = weath1.day.avgTemp
  let minTemp1 = weath1.day.mintemp_f
  let maxTemp1 = weath1.day.maxtemp_f
  let weatherIcon1 = weath1.day.condition.icon
  let weatherText1 = weath1.day.condition.text
  let chanceOfRain1 = weath1.day.daily_chance_of_rain
  let sunrise1 = weath1.astro.sunrise
  let sunset1 = weath1.astro.sunset

  let weath2 = props.weather.forecast.forecastday[0]
  let avgTemp2 = weath2.day.avgTemp
  let minTemp2 = weath2.day.mintemp_f
  let maxTemp2 = weath2.day.maxtemp_f
  let weatherIcon2 = weath2.day.condition.icon
  let weatherText2 = weath2.day.condition.text
  let chanceOfRain2 = weath2.day.daily_chance_of_rain
  let sunrise2 = weath2.astro.sunrise
  let sunset2 = weath2.astro.sunset

  const mainCard = (
    <div className="mainCard">
      MAIN CARD
      {/* <div className="mainCardLocation">
        <p>{location}</p>
      </div> */}
      <div className="mainCardIconAndTemp">
        <img src={weatherIcon0}></img>
        <p> {weatherText0} </p>
        <p>Current Temp: {currentTemp} &deg;F</p>
        <p>Feels Like: {feelsLike} &deg;F</p>
      </div>
      <div className="mainCardTempRanges">
        <p>Low: {minTemp0} &deg;F</p>
        <p>High: {maxTemp0} &deg;F</p>
      </div>
      <div>
        <p>Chance of Rain: {chanceOfRain0}</p>
        <p>Sunrise: {sunrise0}</p>
        <p>Sunset: {sunset0}</p>
      </div>
    </div>
  )

  const forecastCardOne = (
    <div className="mainCard">
      FORECAST CARD
      {/* <div className="mainCardLocation">
        <p>{location}</p>
      </div> */}
      <div className="mainCardIconAndTemp">
        <img src={weatherIcon1}></img>
        <p> {weatherText1} </p>
        <p>Avg Temp: {avgTemp1} &deg;F</p>
      </div>
      <div className="mainCardTempRanges">
        <p>Low: {minTemp1} &deg;F</p>
        <p>High: {maxTemp1} &deg;F</p>
      </div>
      <div>
        <p>Chance of Rain: {chanceOfRain1}</p>
        <p>Sunrise: {sunrise1}</p>
        <p>Sunset: {sunset1}</p>
      </div>
    </div>
  )

  const forecastCardTwo = (
    <div className="mainCard">
      FORECAST CARD
      {/* <div className="mainCardLocation">
        <p>{location}</p>
      </div> */}
      <div className="mainCardIconAndTemp">
        <img src={weatherIcon2}></img>
        <p> {weatherText2} </p>
        <p>Avg Temp: {avgTemp2} &deg;F</p>
      </div>
      <div className="mainCardTempRanges">
        <p>Low: {minTemp2} &deg;F</p>
        <p>High: {maxTemp2} &deg;F</p>
      </div>
      <div>
        <p>Chance of Rain: {chanceOfRain2}</p>
        <p>Sunrise: {sunrise2}</p>
        <p>Sunset: {sunset2}</p>
      </div>
    </div>
  )

  // let logic = props.geolocated === true & props.weather != null

  return (props.geolocated === true & props.weather != null & props.mainCard === 0) ? mainCard : (props.geolocated === true & props.weather != null & props.mainCard === 1) ? forecastCardOne : (props.geolocated === true & props.weather != null & props.mainCard === 2) ? forecastCardTwo : false
}

export default MainCard