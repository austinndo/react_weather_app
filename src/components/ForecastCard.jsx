const ForecastCard = (props) => {

  return (
    <div className="ForecastCard">
      <div className="ForecastIconAndTemp">
        <img src={props.weatherIcon}></img>
        <p> {props.weatherText} </p>
        <p>Avg Temp: {props.avgTemp}</p>
      </div>
      <div className="mainCardTempRanges">
        <p>Low: {props.minTemp}</p>
        <p>High: {props.maxTemp}</p>
      </div>
    </div>)
}

export default ForecastCard