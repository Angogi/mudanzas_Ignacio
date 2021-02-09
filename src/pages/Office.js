import React from "react";
import "./Office.css";
import {auth } from "../firebase";
import { useHistory } from 'react-router-dom';
import {useStateValue} from "../StateProvider";


function Office(){

    const [{user}, dispatch] = useStateValue();
    const history = useHistory();

    const signOut = () => {
        
        auth.signOut()
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/office")
            }
        })

    }

    return(

        <div className="office">
            {
                user ?

                <div>
                    <h1>Hola Iñaki, bienvenido. Aquí se listaran las solicitudes de presupuesto</h1>
                    <button className="loginButton" type="submit" onClick={signOut}> Cerrar sesión</button>

                </div>


                :

                <div>Estas en el lugar equivocado 😒👀👀👀</div>
            }
        </div>

       
    )
}

export default Office;