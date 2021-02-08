import React, {useState} from 'react';
import "./PopupCookies.css";

function PopupCookies() {

    const [popup, closePopup] = useState(true);
    const aceptarCookies = () => closePopup(!popup);

    return (
        <div className={popup ? 'popup' : 'popup closePopup'}>
            <div className="popupDiv"></div>
            <div className="popupText">
                <p>
                    Utilizamos cookies propias y de terceros para obtener 
                    datos estadísticos de la navegación de nuestros usuarios
                    y mejorar nuestros servicios. 
                    Si acepta o continúa navegando, consideramos que acepta su uso.
                    <button className="aceptarCookies" onClick={aceptarCookies}>Continuar navegando</button>
                
                </p>
            </div>
           
            
        </div>
    )
}

export default PopupCookies