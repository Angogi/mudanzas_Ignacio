import React, {useState} from 'react';
import * as FaiIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link} from "react-router-dom";
import {SidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import HeartLogo from "./HeartLogo";
import PhoneIcon from '@material-ui/icons/Phone';



function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () =>setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: '#ffff'}}>
            <div className="navBar">

                <Link to="/" className="logo">
                    <HeartLogo />
                    <h1>Génesis ong</h1>
                </Link>

               
                <Link to="#" className="menu-bars">
                    <FaiIcons.FaBars onClick={showSidebar} />
                </Link>
                
               
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} > 
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className="navbar-toggle">
                        <Link to="#" className="close-menu">
                            <KeyboardArrowUpIcon />
                        </Link>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
