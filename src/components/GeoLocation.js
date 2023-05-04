import { useGeolocated } from 'react-geolocated'
import { useState, useEffect } from 'react'

const DetermineGeolocation = () => {
  const [userLat, setUserLat] = useState(null)
  const [userLong, setUserLong] = useState(null)

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    })

  const GeolocationNotAvailableReturn = (
    <div>Your browser does not support Geolocation</div>
  )

  const GeolocationNotEnabledReturn = <div>Geolocation is not enabled</div>

  const GeolocationAvailableReturn = () => {
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{coords.speed}</td>
          </tr>
        </tbody>
      </table>
  }

  const GeolocationInProgress = <div>Getting the location data</div>

  const GeolocationLogic = () => {
    if (coords) {
      setUserLat(coords.latitude)
      setUserLong(coords.longitude)

      console.log(userLat)
      console.log(userLong)
    }

    return (!isGeolocationAvailable)
      ? GeolocationNotAvailableReturn
      : (!isGeolocationEnabled)
      ? GeolocationNotEnabledReturn
      : (coords)
      ? GeolocationAvailableReturn
      : GeolocationInProgress
  }

  useEffect(() => {
    GeolocationLogic()
  }, [])

}

export default DetermineGeolocation
