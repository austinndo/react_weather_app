import './App.css'
import DetermineGeolocation from './components/GeoLocation'
import { useEffect } from 'react'
import axios from 'axios'

// dynamic render.. if userLat and userLong != null then render the weather content else render default / Lodaing ... 

function App(props) {

  useEffect(() => {
    DetermineGeolocation()
  }, [])

  return (
    <div>
      {/* <DetermineGeolocation></DetermineGeolocation> */}
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
