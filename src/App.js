import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLEMAPS_API_KEY } from './utils/keys';
import MapStyles from './utils/styles.json';
import './styles/css/App.css';

class App extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				styles={MapStyles}
				initialCenter={{
					lat: -23.454315,
					lng: -46.533652
				}}
				zoom={15}
				onClick={this.onMapClicked}
			>
				<Marker onClick={this.onMarkerClick}
                	name={'Localização atual'} />
 
				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
						<h1>Bem Vindo</h1>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({ apiKey: (GOOGLEMAPS_API_KEY)})(App)