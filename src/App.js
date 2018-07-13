import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLEMAPS_API_KEY } from './utils/keys';
import MapStyles from './utils/styles.json';
import Logo from './styles/icons/logo.png';
import './styles/css/App.css';

class App extends Component {
	render() {
		return (
			<div className="content">
				<main className="aside">
					<div className="logo">
						<img src={Logo} alt="Logotipo Neighborhood"></img>
					</div>
					<div className="location-filter">
						<input type="text" placeholder="Preencha e filtre lugares"></input>
					</div>
					<nav>
						<p>Mostrando 5 de 5 lugares</p>
						<ul>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
							<li className="location-item">Localização 1</li>
						</ul>
					</nav>
				</main>

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
					<Marker onClick={this.onMarkerClick} name={'Localização atual'} />
	
					<InfoWindow onClose={this.onInfoWindowClose}>
						<div>
							<h1>Bem Vindo</h1>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({ apiKey: (GOOGLEMAPS_API_KEY)})(App)