import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import { getDetails } from '../utils/foursquare';

class MarkerInfo extends Component {

    state = {
        foursquareVenues: {}
    }

    componentDidMount() {
        const id = this.props.id;

        getDetails(id)
            .then(foursquareVenues => {
                this.setState({ foursquareVenues })
            }).catch(err => {
                console.log('Foursquare API retornou erro', err);
            });
    }

  render() {

    const { foursquareVenues } = this.state;
    const { id, location, locationPosition, onToggleOpen, clickId, isOpen } = this.props;

    return (
        <Marker
            key={id}
            position={locationPosition}
            onClick={() => onToggleOpen(id, 'open')}
        >
        {(clickId === id && isOpen === 'open') &&
            <InfoWindow
                key={id}
                onCloseClick={() => onToggleOpen(id, 'close')}
            >
                <div className="window-info">
                    {console.log(foursquareVenues)}
                    <h2>{ foursquareVenues.name }</h2>
                </div>
            </InfoWindow>
        }
      </Marker>
    );
  }
}

export default MarkerInfo;