import './App.css'
import DetermineGeolocation from './components/GeoLocation'
import axios from 'axios'

// dynamic render.. if userLat and userLong != null then render the weather content else render default / Lodaing ... 

function App(props) {
  return (
    <div>
      <DetermineGeolocation></DetermineGeolocation>
      <div className="App">
        Weather App Content
        <div>
          <div>User Lat: {props.userLat}</div>
          <div>User Long: {props.userLong}</div>
        </div>
      </div>
    </div>
  )
}

export default App
