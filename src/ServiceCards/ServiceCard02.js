import React, {useState} from 'react';
import './ServiceCard.css';
import SolicitudExpress from "../components/SolicitudExpress";
import Modal2 from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ServiceCard02() {
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow(false);

    return (
        <div className="service__card">
            <div className="service__cardImage cardImage__three" /> 
            <h2>Servicios Express</h2>
            <p>Transportes rapidos y todo tipo de portes.</p>
           
                <button className="service__cardButton" onClick={handleShow}>Solicitud rápida</button>
            
            <Modal2
                show={show}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
            >
                <Modal2.Header>
                <Modal2.Title>Solicitud Express</Modal2.Title>
                </Modal2.Header>
                <Modal2.Body>

                    <SolicitudExpress/>

                </Modal2.Body>
                <Modal2.Footer>
                    <Button onClick={handleClose2}>
                        Cerrar
                    </Button>
                </Modal2.Footer>
                            
            </Modal2>
            
        </div>
    )
}

export default ServiceCard02
