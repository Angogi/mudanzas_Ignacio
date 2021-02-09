import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import Presupuesto from './pages/Presupuesto';
import OtrosServicios from './pages/OtrosServicios';
import Contacto from './pages/Contacto';
import LoginOffice from './pages/LoginOffice';
import Office from './pages/Office';
import PopupCookies from './components/PopupCookies';
import ContactButtons from './components/ContactButtons'; 
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";





function App() {

    const[{} , dispatch] = useStateValue();

    useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log("THE USER IS  >>>>" , authUser);

        if(authUser){
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        }else{
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      })
    }, [])

  return (
    <>
      <Router >
        <Navbar />
        <ContactButtons />
        <PopupCookies/>     

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/presupuesto" component={Presupuesto} />
          <Route path="/otros-servicios" component={OtrosServicios}/>
          <Route path="/contacto" component={Contacto}/>
          <Route path="/login-office" component={LoginOffice}/>
          <Route path="/office" component={Office}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
