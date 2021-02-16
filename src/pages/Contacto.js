import React from 'react';
import './Contacto.css';
import Footer from "../components/Footer";
import Map from '../components/Map';
import credentials from '../Apis/credentials';
const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function Contacto() {
    return (
        <div className="contacto">
            <div className="imageContacto">
        
            </div>
            <div className="contact__map">
                <Map 
                
                    googleMapURL= {mapUrl}
                    containerElement= {<div style={{height: '400px', width: "400px", flex:"1", marginBottom: "20px"}}></div>}
                    mapElement= {<div style={{height: '100%'}}></div>}
                    loadingElement= {<p>Cargando</p>}

                />
            </div>
            <Footer />
        </div>
    )
}

export default Contacto;
