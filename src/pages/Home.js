import React, {useEffect} from 'react';
import "./Home.css";
import FormularioHome from "../components/FormularioHome";
import ServiceCard00 from '../ServiceCards/ServiceCard00';
import ServiceCard01 from '../ServiceCards/ServiceCard01';
import ServiceCard02 from '../ServiceCards/ServiceCard02';
import Footer from "../components/Footer";
import CarouselImages from "../components/Carousel";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';


function Home() {

    useEffect(() => {
        if(window.scrollY > 0){
          window.scrollTo(0, 0);
        }  
       
    }, []);

    return (
        <div className="home">
           <div className="home__sectionImage__one">  
                <div className="sectionOne__text">
                    <h1>Mudanzas Génesis<span /></h1>
                    
                    <h2>El servicio de mudanzas y transporte a nivel nacional desde Barcelona de <b className="logo-name">Génesis ong.</b><br/>
                        Puedes solicitar ahora mismo un presupuesto para tu mudanza o transporte desde Barcelona; déjanos saber que quieres transportar
                        y donde lo quieres llevar, el resto lo hacemos nosotros. Ofrecemos soluciones simples y acordes a cada necesidad para que puedas
                        tener una mudanza desde Barcelona de la mano de profesionales.
                        
                        <ul className="contactList">
                            <a href="tel:722845044"><PhoneIcon/>722845044</a>
                            <a className="contactList__whatsapp" href="https://wa.me/34722845044"><WhatsAppIcon />WhatsApp</a>
                        </ul>
                    
                    </h2>

                   

                    <FormularioHome />

                    <div className="listadoCiudades">
                        
                        <ul>
                            <li><h2>Mudanzas Barcelona </h2></li>
                            <li><h2>Mudanzas Badalona</h2></li>
                            <li><h2>Mudanzas Santa Coloma de Gramanet</h2></li>
                            <li><h2>Mudanzas Hospitalet de Llobregat</h2></li>
                        </ul>
                        <ul>
                            <li><h2>Mudanzas económicas Barcelona </h2></li>
                            <li><h2>Mudanzas económicas Badalona</h2></li>
                            <li><h2>Mudanzas económicas Santa Coloma</h2></li>
                            <li><h2>Mudanzas económicas Hospitalet de Llobregat</h2></li>
                        </ul>
                        <ul>
                            <li><h2>Mudanzas Barcelona Madrid </h2></li>
                            <li><h2>Mudanzas Barcelona Valencia</h2></li>
                            <li><h2>Mudanzas Barcelona Sur de España</h2></li>
                            <li><h2>Mudanzas Barcelona Bilbao</h2></li>
                        </ul>
    
                    </div>
                </div>
           </div>
           <div className="section services__container">
                <ServiceCard00 />
                <ServiceCard01 />
                <ServiceCard02 />
           </div>

        
            <div className="sectionTwo__text">
                <br/>
                <h2>¿Te mudas?</h2>
                <h3>Cuenta con nosotros para tu servicio de <strong>mudanzas en Barcelona.</strong>&nbsp;
                    Contamos con lo que necesitas para tu <strong>mudanza desde Barcelona a nivel nacional.</strong>&nbsp;
                    Y por supuesto, si lo que buscas es un equilibrio entre profesionalidad y una <strong>mudanza económica desde Barcelona</strong>&nbsp;
                    estás en el lugar indicado, puedes consultarnos ¡ahora mismo! <br/><br/>
                    <ul className="contactList contactList__align">
                        <a href="tel:698632639"><PhoneIcon/>698632639</a>
                        <a className="contactList__whatsapp" href="https://wa.me/34698632639"><WhatsAppIcon />WhatsApp</a>
                    </ul> 
                </h3>
            </div>

            <div className="carouselSection">
                <h3>
                    Contamos con lo que necesitas para tu <strong>mudanza desde Barcelona a nivel nacional.</strong>&nbsp;
                    Camiones y gruas especializadas para tu <strong>mudanza económica desde Barcelona</strong>.&nbsp;<br/>
                    Contacta ahora y solicita un presupuesto a medida: <br/><br/>
                        <ul className="contactList">
                            <a href="tel:722845044"><PhoneIcon/>722845044</a>
                            <a className="contactList__whatsapp" href="https://wa.me/34722845044"><WhatsAppIcon />WhatsApp</a>
                        </ul>
                    
                </h3>
                <CarouselImages />
            </div>

           <div className="section home__sectionImage__three">
                <div className="sectionThree__text">
                    <h2>Cuidamos de los tuyos</h2>
                    
                </div>
           </div>
           
           <Footer />
          
        </div>
    )
}

export default Home
