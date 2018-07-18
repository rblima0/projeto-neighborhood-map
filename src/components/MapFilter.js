import React, { Component } from 'react';
import Logo from '../styles/icons/logo.png';

class MapFilter extends Component {
    render(){
        return(
            <nav>
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
    
            <div id="nav">
                <div className="logo">
                    <img src={Logo} alt="Logotipo Neighborhood"></img>
                </div>
    
                <div className="location-filter">
                    <input type="text" placeholder="Preencha e filtre lugares" />
                </div>
    
                <p>Mostrando 7 de 7 lugares</p>
    
                <ul className="site-menu">
                    <li className="location-item">Localizao 1</li>
                    <li className="location-item">Localizao 1</li>
                    <li className="location-item">Localizao 1</li>
                    <li className="location-item">Localizao 1</li>
                    <li className="location-item">Localizao 1</li>
                </ul>
            </div>
    
            <label htmlFor="show-menu" className="mask"></label>
            </nav>
        )
    }
}
export default MapFilter;