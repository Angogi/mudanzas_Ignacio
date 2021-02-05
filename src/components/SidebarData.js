import React from 'react';
import * as FaiIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData =[
    {
        title: 'Inicio',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Presupuesto',
        path:'/presupuesto',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Otros Servicios',
        path:'/otros-servicios',
        icon: <FaiIcons.FaCartPlus />,
        cName: 'nav-text'
    },
   
    {
        title: 'Contacto',
        path:'/contacto',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]