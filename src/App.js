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
		query: '',
	}

	componentDidMount() {
		this.setState({
			locations: Locations,
			locationslength: Locations,
		});
	}

	onToggleOpen = (id, isOpen) => {
		this.setState({
			clickId: id, isOpen
		});
	}
	
	render() {
		return (
			<section className="menu">
				<input type="checkbox" id="show-menu"/>
				<div id="canvas">
					<MapFilter />
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
			</section>
		);
	}
}

export default App