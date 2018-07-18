import React from 'react';
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MapStyles from '../utils/styles.json';

const Map = compose(withScriptjs, withGoogleMap)(props =>
    <GoogleMap
		defaultZoom={13}
		defaultCenter={{ lat: -23.454315, lng: -46.533652 }}
		defaultOptions={{ styles: MapStyles }} 
	>
	}
    </GoogleMap>
)
export default Map;