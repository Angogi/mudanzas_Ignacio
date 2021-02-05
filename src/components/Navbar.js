import React, {useState} from 'react';
import * as FaiIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as AiFillPhone from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';


function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () =>setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: '#ffff'}}>
            <div className="navBar">

                <Link to="/" className="logo">
                    <img src="/images/logo.png"></img>
                    Génesis ong
                </Link>
                
                <Link to="#" className="menu-bars">
                    <FaiIcons.FaBars onClick={showSidebar} />
                </Link>
                
               
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} > 
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
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
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
