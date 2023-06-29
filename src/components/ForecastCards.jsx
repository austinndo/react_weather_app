import ForecastCard from "./ForecastCard"

const ForecastCards = (props) => {

  //forecast 0
  const forecastZero = props.weather.forecast.forecastday[0].day
  let f0Date = props.weather.forecast.forecastday[0].date.split('-')
  let avgTempF0 = forecastZero.avgtemp_f
  let weatherIconF0 = forecastZero.condition.icon
  let weatherTextF0 = forecastZero.condition.text

  //forecast 1
  const forecastOne = props.weather.forecast.forecastday[1].day
  let f1Date = props.weather.forecast.forecastday[1].date.split('-')
  let avgTempF1 = forecastOne.avgtemp_f
  let weatherIconF1 = forecastOne.condition.icon
  let weatherTextF1 = forecastOne.condition.text

  //forecast 2
  const forecastTwo = props.weather.forecast.forecastday[2].day
  let f2Date = props.weather.forecast.forecastday[2].date.split('-')
  let avgTempF2 = forecastTwo.avgtemp_f
  let weatherIconF2 = forecastTwo.condition.icon
  let weatherTextF2 = forecastTwo.condition.text

  const forecastCards = (
    <div className="forecastCards">

      <div className="forecastCardZero" id={props.mainCard === 0 ? "activeCard" : null} onClick={() => props.setMainCard(0)}>
        <ForecastCard
          date={f0Date}
          day={'Today'}
          avgTemp={avgTempF0}
          weatherIcon={weatherIconF0}
          weatherText={weatherTextF0}
        ></ForecastCard>
      </div>

      <div className="forecastCardOne" id={props.mainCard === 1 ? "activeCard" : null} onClick={() => props.setMainCard(1)}>
        <ForecastCard
          date={f1Date}
          day={'Tomorrow'}
          avgTemp={avgTempF1}
          weatherIcon={weatherIconF1}
          weatherText={weatherTextF1}
        ></ForecastCard>
      </div>

      <div className="forecastCardTwo" id={props.mainCard === 2 ? "activeCard" : null} onClick={() => props.setMainCard(2)}>
        <ForecastCard
          date={f2Date}
          day={'In Two Days'}
          avgTemp={avgTempF2}
          weatherIcon={weatherIconF2}
          weatherText={weatherTextF2}
        ></ForecastCard>
      </div>

    </div>
  );


  return (props.weather != null) ? forecastCards : false
}

export default ForecastCards