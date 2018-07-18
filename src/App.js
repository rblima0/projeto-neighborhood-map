import React, { Component } from 'react';
import { GOOGLEMAPS_API_KEY } from './utils/keys';
import Locations from './utils/locations.json'
import Map from './components/Map';
import MapFilter from './components/MapFilter';
import './styles/css/App.css';

class App extends Component {

	state = {
		locations: [],
		locationslength: [],
		query: ''
	}
	
	/* Informações invocadas imediatamente após um componente ser montado */
	componentDidMount() {
		this.setState({
			locations: Locations,
			locationslength: Locations,
		});
	}

	/* Função para pesquisar e filtrar as localizações do mapa */
	updateQuery = (query) => {

		this.setState({ query: query.trim() });
		const regex = /[A-Z][a-z]*/i;

		const { locations } = this.state;
		let locationslength;

		if(query) {
			const match = new RegExp(regex.exec(query), 'ig');
			locationslength = locations.filter(location => match.test(location.long_name));
		} else {
			locationslength = locations;
		}
		this.setState({ locationslength });
	}

	/* Função de click nas localizações para mostrar ou ocultar */
	onToggleOpen = (id, isOpen) => {
		this.setState({
			clickId: id, isOpen
		});
	}
	
	render() {
		return (
			<header className="menu">
				<input type="checkbox" id="show-menu"/>
				<div id="canvas">
					<MapFilter
						filterState={this.state}
						updateQuery={this.updateQuery}
						onToggleOpen={this.onToggleOpen}
					/>
				<div id="content">
					<Map
						googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLEMAPS_API_KEY}&v=3`}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `100%`, width:`100%`, position:`fixed` }} />}
						mapElement={<div style={{ height: `100%` }} />}

						locations={this.state.locations}
						locationslength={this.state.locationslength}
						onToggleOpen={this.onToggleOpen}
						clickId={this.state.clickId}
						isOpen={this.state.isOpen}
					/>
				</div>
				</div>
			</header>
		);
	}
}

export default App