import React from "react";
import "./Office.css";
import {auth, db } from "../firebase";
import { useHistory } from 'react-router-dom';
import {useStateValue} from "../StateProvider";

import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';





function Office(){

    // const state = {
    //     solicitudes: [],
    // }

    // const solicitudes = ()=>{
    //     db.collection("solicitudesPresupuesto").get().then((snapShots)=>{
    //         this.setState({
    //             solicitudes: snapShots.docs.map(doc=>{
    //                 console.log(doc.data)
    //             })
    //         })
    //     })
    // }
   

    const [{user}, dispatch] = useStateValue();
    const history = useHistory();

    const signOut = () => {
        
        auth.signOut()
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/")
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
                  

                    <div style={{ height: 400, width: '100%' }}>
                        {/* <DataGrid pagination {...solicitudes}/> */}
                    </div>

                </div>


                :

                <div>Estas en el lugar equivocado 😒👀👀👀</div>
            }
        </div>

       
    )
}

export default Office;