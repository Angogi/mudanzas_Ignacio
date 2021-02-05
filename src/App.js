import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import Presupuesto from './pages/Presupuesto';
import OtrosServicios from './pages/OtrosServicios';
import Contacto from './pages/Contacto';
import Office from './pages/Office';
import PopupCookies from './components/PopupCookies';


import ContactButtons from './components/ContactButtons';



function App() {

  

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
          <Route path="/office" component={Office}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
