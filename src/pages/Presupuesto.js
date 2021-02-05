import React, {useEffect} from 'react';
import './Presupuesto.css';
import Formulario from '../components/FormularioPresupuesto';

function Presupuesto() {
    
  useEffect(() => {
    if(window.scrollY > 0){
      window.scrollTo(0, 0);
    }  
   
  }, [])

   return (
        <div className="presupuesto">
          <Formulario /> 
        </div>
    )
}

export default Presupuesto;
