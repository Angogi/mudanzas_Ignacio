import React, {useState, useEffect} from 'react';
import "./ContactButtons.css"; 
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  

  speedDial: {
    
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));



const actions = [

  { icon: <WhatsAppIcon />, 
    name: 'WhatsApp',
    path: 'https://wa.me/34698632639'
  },
  { icon: <PhoneInTalkIcon />, 
    name: 'Llamar',
    path: 'tel:+34698632639'
  },
  { icon: <EmailIcon />, 
    name: 'Email',
    path: 'mailto:iallendeapodaca@gmail.com'
  },
  
];

export default function SpeedDials() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);
  const divMessage = document.getElementById('message');
  const activeMessage = 'contactButtons__message contactButtons__messageActive';
  const closeMessage = "closeMessage";
  const showMessage = ()=>{
    setMessage(!message); 
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

    

    if(seconds === 10){
      divMessage.className =  activeMessage;
    };

   
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

  

  return (
   
      <div className="contactButtons">
    
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction='left'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              href={action.path}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>


        <div id="message" className={message ? 'contactButtons__message contactButtons__messageActive' : 'contactButtons__message'} >
            <CloseIcon className="closeIcon" onClick={showMessage}/>
            <p>😊
              ¿ En busca de un presupuesto ajustado a tus necesidades para tu mudanza en Barcelona ? Puedes solicitarlo ahora mismo
              por el medio que más gustes. Un saludo. <br/> <span> 📲☎📭👇</span>

            </p>
        </div>

      </div>
     
    
  );
}
