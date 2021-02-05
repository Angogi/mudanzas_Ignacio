import React, {useState} from 'react';
import './Office.css';
import 'firebase/auth';
import {useFirebaseApp} from 'reactfire';

function Office() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="office">
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

        <button onClick={submit}>Iniciar sesión</button>
   </div>
    )
}

export default Office
