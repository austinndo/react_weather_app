const ForecastCard = (props) => {

  let month = String(props.date[1])
  let day = String(props.date[2])

  return (
    <div className="forecastCard">
      <div className="forecastCardDay">
        <p>{month}/{day}</p>
        <p>{props.day}</p>
      </div>
      <div className="forecastAvg">
        <p>{props.avgTemp} &deg;F</p>
      </div>
      <div className="forecastIconAndTemp">
        <img src={props.weatherIcon} alt="forecastWeatherIcon" id="forecastIcon"></img>
        <p>{props.weatherText}</p>
      </div>
    </div>)
}

export default ForecastCard