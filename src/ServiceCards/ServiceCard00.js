import React from 'react';
import './ServiceCard.css';
import {Link} from "react-router-dom";



function ServiceCard00() {
    return (
        <div className="service__card">
            <div className="service__cardImage cardImage__one" /> 
            <h2>Mudanzas</h2>
            <p>Profesionalidad, radidez y eficacia.</p>
            <Link className="service__cardButton" to="/presupuesto">
                <button>Solicitar presupuesto</button> 
            </Link>
        </div>
    )
}

export default ServiceCard00
