import React, {useState} from 'react';
import "./FormularioHome.css";
import { db } from "../firebase";
import {EmailSender} from "./EmailSender";



function FormularioHome() {

    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [mercancia, setMercancia] = useState("");
    const [loader, setLoader] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
    
        db.collection("solicitudHome")
          .add({
            nombre: nombre,
            numero: numero,
            origen: origen,
            destino: destino,
            mercancia: mercancia,
          })
          .then(() => {
            setLoader(false);
            alert("Muchas gracias. La solicitud ha sido envada con éxito, nos pondremos en contacto en la mayor brevedad posible. También puede enviarnos algunas imagenes por whatsapp o correo electrónico, si así lo desea, saludos.  🤗");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          })
          .then(()=>{
  
            let emailTemplateParams = {
              type: "Solicitud Home",
              nombre: nombre,
              numero: numero,
              origen: origen,
              destino: destino,
              mercancia: mercancia,
            };
  
            EmailSender(emailTemplateParams );
                          
          })
          
          setNombre("");
          setNumero("");
          setOrigen("");
          setDestino("");
          setMercancia("");
    };

    return (
        <form className="formularioHome" onSubmit={handleSubmit}>
            <div className="formularioHome__inputsContainter">
               
                <div className="inputBox"> 
                    <label>Nombre</label>
                    <input 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="inputBox"> 
                    <label>Número de contacto</label>
                    <input 
                        placeholder="📲"
                        value={numero}
                        onChange={(e)=> setNumero(e.target.value)}
                        required
                    />
                </div>
    
            </div>
            <div className="formularioHome__inputsContainter">
                <div className="inputBox"> 
                    <label>Ciudad Origen</label>
                    <input 
                        placeholder="😃🛫"
                        value={origen}
                        onChange={(e)=> setOrigen(e.target.value)} 
                        />
                </div>
                <div className="inputBox"> 
                    <label>Ciudad Destino</label>
                    <input 
                        placeholder="😎🛬"
                        value={destino}
                        onChange={(e)=> setDestino(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="formularioHome__inputsContainter"> 
                <div className="inputBox"> 
                    <label>Mercancía</label>
                    <input 
                        placeholder="🤔📦"
                        value={mercancia}
                        onChange={(e)=> setMercancia(e.target.value)}
                    />  
                </div>  
                
            </div>

            <button type="submit">
                    Enviar solicitud
            </button>      
              

          
        </form>
    );
}

export default FormularioHome;