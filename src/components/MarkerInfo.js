import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import { getDetails } from '../utils/foursquare';

import IconPark from '../styles/icons/park.svg';
import IconZoo from '../styles/icons/zoo.svg';
import IconShooping from '../styles/icons/shopping.svg';

class MarkerInfo extends Component {

    state = {
        foursquareVenues: {},
        erro: false
    }

    /* Carregando informações das localizações da API do Foursquare e tratando erros */
    componentDidMount() {
        const id = this.props.id;
        getDetails(id)
            .then(foursquareVenues => {
                if(foursquareVenues === undefined) {
                    this.setState({ erro: true}) 
                } else {
                    this.setState({ foursquareVenues })
                }
            })
            .catch(err => {
                console.log('Erro na API do Foursquare ', err);
                this.setState({ erro: true });
            })
    }

    render() {

    const { foursquareVenues, erro } = this.state;
    const { id, location, locationPosition, onToggleOpen, clickId, isOpen } = this.props;

    return (
        <Marker
            icon={(location.types === "park") ? { url: IconPark } : (location.types === "zoo") ? { url: IconZoo } :{ url: IconShooping }}
            key={id}
            position={locationPosition}
            onClick={() => onToggleOpen(id, 'open')}
        >
        {(clickId === id && isOpen === 'open') &&
            <InfoWindow
                key={id}
                onCloseClick={() => onToggleOpen(id, 'close')}
            >
            {erro ? <div className="erro"><h1>Erro na comunicação com a API</h1></div> : 
                <div className="window-info">
                    <h2>{ foursquareVenues.name }</h2>
                    <p><span>Tipo:</span> { foursquareVenues.categories[0].name }</p>
                    <p><span>Endereço:</span> { foursquareVenues.location.address }</p>
                    <p><span>Cidade:</span> { foursquareVenues.location.city }</p>
                    <p><span>UF:</span> { foursquareVenues.location.state}</p>
                    <div className="window-more">
                        <img src={ `${foursquareVenues.bestPhoto.prefix}250x200${foursquareVenues.bestPhoto.suffix}`} alt={ foursquareVenues.name }></img>
                        <h3>{ foursquareVenues.hours !== undefined ? `${foursquareVenues.hours.status}` : `Horários não disponíveis` }</h3>
                        <p>Mais informações: <a href={foursquareVenues.shortUrl}>CLIQUE AQUI</a></p>
                    </div>

                    <div className="window-rating">
                        <p>Avaliação: <span>{foursquareVenues.rating}</span> de 10</p>
                        <p>{foursquareVenues.reasons.items[0] !== undefined ? `${foursquareVenues.reasons.items[0].summary}` : `` }</p>
                    </div>
                    <a tabIndex="0" href={`http://maps.google.com/maps?daddr=${foursquareVenues.location.lat},${foursquareVenues.location.lng}`}>Quero Visitar</a>
                </div>
            }
            </InfoWindow>
        }
      </Marker>
    );
  }
}

export default MarkerInfo;