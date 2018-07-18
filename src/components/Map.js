import React from 'react';
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MapStyles from '../utils/styles.json';
import MarkerInfo from './MarkerInfo';

const Map = compose(withScriptjs, withGoogleMap)(props =>
    <GoogleMap
		defaultZoom={13}
		defaultCenter={{ lat: -23.454315, lng: -46.533652 }}
		defaultOptions={{ styles: MapStyles }} 
	>
      		{props.locations.map(location => (
			<MarkerInfo
				key={location.place_id}
				id={location.place_id}
				location={location}
				locationPosition={location.position}
				onToggleOpen={props.onToggleOpen}
				clickId={props.clickId}
				isOpen={props.isOpen}
			/>
		))}
	}
    </GoogleMap>
)
export default Map;