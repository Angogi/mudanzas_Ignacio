import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container" >
                <div className="sec abouts">
                    <h2>Acerca de nosotros</h2>
                    <p> 
                        Génesis ong es una asociación sin ánimo de lucro, 
                        con un foco de ayuda principalmente hacía personas con adiciones 
                        y que están en situación de desamparo. 
                        Todo el dinero obtenido por las diferentes actividades realizadas
                        es destinado 100% a la obra social, birndando alojamiento y cubriendo las necesidades
                        básicas de nuestros residentes. 
                        Creemos que a través de la fé en Jesucristo siempre hay una nueva esperanza de vida.
                        Agradecemos vuestra ayuda, sin la cual no sería posible llevar a cabo esta noble causa. 
                    
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
