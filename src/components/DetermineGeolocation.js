import { useGeolocated } from 'react-geolocated'

const DetermineGeolocation = (props) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    });

  if (coords) {
    props.setUserLat(coords.latitude)
    props.setUserLong(coords.longitude)
  }

  const GeolocationNotAvailableReturn = (
      <div>Your browser does not support Geolocation</div>
    )
    
  const GeolocationNotEnabledReturn = <div>Geolocation is not enabled</div>
    
  const GeolocationAvailableReturn = (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{props.userLat}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{props.userLong}</td>
        </tr>
      </tbody>
    </table>
  )
    
  const GeolocationInProgress = <div>Getting the location data</div>

  return (!isGeolocationAvailable)
    ? GeolocationNotAvailableReturn
    : (!isGeolocationEnabled)
    ? GeolocationNotEnabledReturn
    : (coords)
    ? GeolocationAvailableReturn
    : GeolocationInProgress
}


export default DetermineGeolocation