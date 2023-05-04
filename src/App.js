import './App.css'
import DetermineGeolocation from './components/GeoLocation'
import axios from 'axios'

function App() {
  DetermineGeolocation()
  return <div className="App">Weather App Content</div>
}

export default App
