import React from 'react';
import './Contacto.css';
import Map from '../components/Map';
import credentials from '../Apis/credentials';
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function Contacto() {
    return (
        <div>
            <div className="contacto">
        
            </div>

            <Map 
                googleMapURL= {mapUrl}
                containerElement= {<div style={{height: '400px'}}></div>}
                mapElement= {<div style={{height: '100%'}}></div>}
                loadingElement= {<p>Cargando</p>}

            />
         

        </div>
    )
}

export default Contacto;
