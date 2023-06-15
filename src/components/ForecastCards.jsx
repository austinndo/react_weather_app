import ForecastCard from "./ForecastCard"
import geodata from "../geodata.json"

const ForecastCards = (props) => {

  // #change these to props... when ready to make api calls
  // forecast 0
  const forecastZero = geodata.forecast.forecastday[0].day
  let avgTempF0 = forecastZero.avgtemp_f
  let minTempF0 = forecastZero.mintemp_f
  let maxTempF0 = forecastZero.maxtemp_f
  let weatherIconF0 = forecastZero.condition.icon
  let weatherTextF0 = forecastZero.condition.text
  // const cardZero = (
  //   <ForecastCard
  //     avgTemp={avgTempF0}
  //     minTemp={minTempF0}
  //     maxTemp={maxTempF0}
  //     weatherIcon={weatherIconF0}
  //     weatherText={weatherTextF0}
  //   ></ForecastCard>
  // )

  //forecast 1
  const forecastOne = geodata.forecast.forecastday[1].day
  let avgTempF1 = forecastOne.avgtemp_f
  let minTempF1 = forecastOne.mintemp_f
  let maxTempF1 = forecastOne.maxtemp_f
  let weatherIconF1 = forecastOne.condition.icon
  let weatherTextF1 = forecastOne.condition.text
  // const cardOne = (
  //   <ForecastCard
  //     avgTemp={avgTempF1}
  //     minTemp={minTempF1}
  //     maxTemp={maxTempF1}
  //     weatherIcon={weatherIconF1}
  //     weatherText={weatherTextF1}
  //   ></ForecastCard>
  // )

  //forecast 2
  const forecastTwo = geodata.forecast.forecastday[2].day
  let avgTempF2 = forecastTwo.avgtemp_f
  let minTempF2 = forecastTwo.mintemp_f
  let maxTempF2 = forecastTwo.maxtemp_f
  let weatherIconF2 = forecastTwo.condition.icon
  let weatherTextF2 = forecastTwo.condition.text
  // const cardTwo = (
  //   <ForecastCard
  //     avgTemp={avgTempF2}
  //     minTemp={minTempF2}
  //     maxTemp={maxTempF2}
  //     weatherIcon={weatherIconF2}
  //     weatherText={weatherTextF2}
  //   ></ForecastCard>
  // )


  const forecastCards = (
    <div className="forecastCards">

      <div className="forecastCardZero" onClick={() => props.setMainCard(0)}>
        <ForecastCard
          avgTemp={avgTempF0}
          minTemp={minTempF0}
          maxTemp={maxTempF0}
          weatherIcon={weatherIconF0}
          weatherText={weatherTextF0}
        ></ForecastCard>
      </div>

      <div className="forecastCardOne" onClick={() => props.setMainCard(1)}>
        <ForecastCard
          avgTemp={avgTempF1}
          minTemp={minTempF1}
          maxTemp={maxTempF1}
          weatherIcon={weatherIconF1}
          weatherText={weatherTextF1}
        ></ForecastCard>
      </div>

      <div className="forecastCardTwo" onClick={() => props.setMainCard(2)}>
        <ForecastCard
          avgTemp={avgTempF2}
          minTemp={minTempF2}
          maxTemp={maxTempF2}
          weatherIcon={weatherIconF2}
          weatherText={weatherTextF2}
        ></ForecastCard>
      </div>

    </div>
  )

  return (props.geolocated === true) ? forecastCards : false
}

export default ForecastCards