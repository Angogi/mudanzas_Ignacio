import React, {useEffect} from 'react';
import "./Home.css";
import ServiceCard00 from '../ServiceCards/ServiceCard00';
import ServiceCard01 from '../ServiceCards/ServiceCard01';
import ServiceCard02 from '../ServiceCards/ServiceCard02';
import Footer from "../components/Footer";

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
                        Encuentra las ciudades desde donde ofrecemos nuestro servicio:<br/><br/>
                    </h2>

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
                    estás en el lugar indicado, puedes consultarnos al siguiente número. 
                </h3>
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
