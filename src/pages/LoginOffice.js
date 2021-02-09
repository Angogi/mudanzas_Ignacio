import React, {useState} from 'react';
import './LoginOffice.css';
import {auth } from "../firebase";
import { useHistory } from 'react-router-dom';
import {useStateValue} from "../StateProvider";




function LoginOffice() {

    const [{user}, dispatch] = useStateValue();

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push("/office")
                }
            })
            .catch(error => alert(error.message))

    }
    const signOut = () => {
        
        auth.signOut();

    }
    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message))
    }
  
    return (
    <div className="loginOffice">
        <h1>Iniciar sesión</h1>
        <form>
            <label>Email:</label>
            <input 
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Contraseña:</label>
            <input 
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
            />

            
            <button className="loginButton" type="submit" onClick={signIn}>Iniciar sesión</button>

              
             
        </form>
    </div>
    )
}

export default LoginOffice;
