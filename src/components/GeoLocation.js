import { useGeolocated } from 'react-geolocated'
import { useEffect } from 'react'

const DetermineGeolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    })

  const GeolocationNotAvailableReturn = () => {
    return <div>Your browser does not support Geolocation</div>
  }

  const GeolocationNotEnabledReturn = () => {
    return <div>Geolocation is not enabled</div>
  }

  const GeolocationAvailableReturn = () => {
    return (
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
    )
  }

  const GeolocationInProgress = () => {
    return <div>Getting the location data</div>
  }

  const GeolocationLogic = () => {
    return !isGeolocationAvailable
      ? GeolocationNotAvailableReturn()
      : !isGeolocationEnabled
      ? GeolocationNotEnabledReturn()
      : coords
      ? GeolocationAvailableReturn()
      : GeolocationInProgress()
  }

  useEffect(() => {
    GeolocationLogic()
  }, [])
}

export default DetermineGeolocation
