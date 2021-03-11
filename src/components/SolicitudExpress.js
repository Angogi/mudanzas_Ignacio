import React, { useState, useEffect } from "react";
import "./SolicitudExpress.css"
import { db } from "../firebase";
import { useHistory } from 'react-router-dom';
import {EmailSender} from "./EmailSender";

export const SolicitudExpress = () => {

    const history = useHistory();
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [mercancia, setMercancia] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("solicitudesExpress")
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
            type: "Solicitud Express",
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
       <form className="solicitudExpress" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <label>Número de contacto</label>
            <input 
                placeholder="+34 ... 📲"
                value={numero}
                onChange={(e)=> setNumero(e.target.value)}
                required
            />

            <label>Ciudad Origen</label>
            <input 
                placeholder="😃🛫"
                value={origen}
                onChange={(e)=> setOrigen(e.target.value)} 
                />

            <label>Ciudad Destino</label>
            <input 
                placeholder="😎🛬"
                value={destino}
                onChange={(e)=> setDestino(e.target.value)}
                />

            <label>Mercancía</label>
            <input 
                placeholder="🤔📦"
                value={mercancia}
                onChange={(e)=> setMercancia(e.target.value)}
            />

            <button 
                type="submit" 
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
                    
                    Enviar solicitud
            </button>
       </form>
    )
}

export default SolicitudExpress;

