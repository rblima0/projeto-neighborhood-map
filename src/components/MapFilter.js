import React from 'react';
import Logo from '../styles/icons/logo.png';
import { DebounceInput } from 'react-debounce-input';

/* Utilizando destructuring do JavaScript para decompor as props em um só objeto nos parametros */
function MapFilter({ updateQuery, filterState, onToggleOpen }) {

    const { locations, locationslength } = filterState;

    return(
        <div>
        <div id="fix-bar">        
            <div className="push">
                <label className="hamburguer" htmlFor="show-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </div>

        <nav id="nav">
            <div className="logo">
                <img src={Logo} alt="Logotipo Neighborhood"></img>
            </div>

            <div className="location-filter">
                {/* Melhorando a experiencia do usuario com Debounce */}
                <DebounceInput
                    type="text"
                    placeholder="Preencha e filtre lugares"
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(event) => updateQuery(event.target.value)} 
                />
            </div>

            <p>Mostrando {locationslength.length} de {locations.length} lugares</p>

            <ul className="site-menu">    
                { locationslength.map(location =>
                    <li
                        key={location.place_id}
                        className="location-item"
                        onClick={() => onToggleOpen(location.place_id, 'open')}
                    >{location.long_name}</li>
                )}
            </ul>
        </nav>

        <label htmlFor="show-menu" className="mask"></label>
        </div>
    )
}
export default MapFilter;