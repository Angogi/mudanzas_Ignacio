import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EuroIcon from '@material-ui/icons/Euro';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

export const SidebarData =[
    {
        title: 'Inicio',
        path:'/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Presupuesto',
        path:'/presupuesto',
        icon: <EuroIcon  />,
        cName: 'nav-text'
    },
    {
        title: 'Otros Servicios',
        path:'/otros-servicios',
        icon: <NextWeekIcon />,
        cName: 'nav-text'
    },
   
    {
        title: 'Contacto',
        path:'/contacto',
        icon: <ContactPhoneIcon/>,
        cName: 'nav-text'
    }
]