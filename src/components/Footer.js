import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container" >
                <div className="sec abouts">
                    <h2>Acerca de nosotros</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p>
                    <ul className="sci">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fas fa-envelope-open-text"></i></a></li>
                    </ul>
                </div>
                <div className="sec quickLinks">
                    <h2>Enlaces de interes</h2>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">Terminos y condiciones</a></li>
                    </ul>
                </div>
                <div className="sec contact">
                    <h2>Contacto</h2>
                    <ul className="info">
                        <li>
                            <span><i class="fas fa-map-marker-alt"></i></span>
                            <span>Barcelona, España</span>
                        </li>
                        <li>
                            <span><i class="fas fa-phone-alt"></i></span>
                            <p><a href="tel:698632639">+34 698632639</a></p>
                        </li>
                        <li>
                            <span><i class="fas fa-envelope"></i></span>
                            <p><a href="mailto:genesisong@gmail.com">genesisong@gmai.com</a></p>
                        </li>
                    </ul>
                </div>                
            </div>
            <div className="copyRightText">
                <p>Todos los derechos reservados © <br/>GÉNESIS ONG 2020</p>
            </div>
        </div>
    );
};

export default Footer;
