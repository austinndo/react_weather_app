import geodata from "../geodata.json"

const MainCard = (props) => {

  // #change these to props... when ready to make api calls
  let temp = geodata.current.temp_f
  let feelsLike = geodata.current.feelslike_f
  let weatherIcon = geodata.current.condition.icon
  let location = geodata.location.name

  return (
    <div className="mainCard">
      <div className="mainCardLocation">
        {location}
      </div>
      <div className="mainCardIconAndTemp">
        <img src={weatherIcon}></img>
        <h3>Current Temp: {temp}</h3>
        <h4>Feels Like: {feelsLike}</h4>
      </div>
      <div className="mainCardTempRanges"></div>
    </div>
  )
}

export default MainCard