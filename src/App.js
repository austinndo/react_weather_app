import './App.css'
import DetermineGeolocation from './components/DetermineGeolocation'
import { useState, useEffect } from 'react'

function App() {

  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)

  return (
    <div>
      Weather App!
      <DetermineGeolocation 
        userLat={userLat} setUserLat={setUserLat} 
        userLong={userLong} setUserLong={setUserLong}>
      </DetermineGeolocation>
    </div>
  )

}

export default App
