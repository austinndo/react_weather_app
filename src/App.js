import './App.css'
import DetermineGeolocation from './components/GeoLocation'
import axios from 'axios'

function App({ userLat }, { userLong }) {
  return (
    <div>
      <DetermineGeolocation></DetermineGeolocation>
      <div className="App">
        Weather App Content Userlat
        <div>
          <div>User Lat: {userLat}</div>
          <div>User Long: {userLong}</div>
        </div>
      </div>
    </div>
  )
}

export default App
