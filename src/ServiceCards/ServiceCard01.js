import React from 'react';
import './ServiceCard.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import WhatsAppIcon from '@material-ui/icons/WhatsApp'; 



const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#00ff09',
        border: '2px solid #000',
        borderRadius: '50px',
        textAling: 'center',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  }));

function ServiceCard01() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
 

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="service__card">
            <div className="service__cardImage cardImage__two" /> 
            <h2>Desalojo de pisos</h2>
            <p>Retirada de muebles, limpieza de piso. </p>
            
            <button className="service__cardButton"  type="button" onClick={handleOpen} >Más información</button>
           
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">No deseches nada</h2>
                        <p id="transition-modal-description">Muebles de salon, armarios, camas, electrodomesticos. Les daremos una segunda oportunidad.</p>
                        Puedes enviarnos algunas imagenes vía WhatsApp 📲🖼 
                        <a href="https://wa.me/34698632639">
                            <WhatsAppIcon />
                        </a>
                        
                    </div>
                    </Fade>
            </Modal>
        </div>
    )
}

export default ServiceCard01
