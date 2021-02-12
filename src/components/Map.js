import React from "react";
import  {GoogleMap, withScriptjs, withGoogleMap, InfoWindow, Marker} from 'react-google-maps';




const Map = (props) => {

    
     
    return (
        <GoogleMap 
            defaultZoom={15}
            defaultCenter={{lat: 41.431563081928026, lng: 2.177535197561341}}

            
            
            
        >
            <Marker
                name={'Mudanzas Génesis'}
                title={'Mudanzas desde Barcelona'}
                position={{lat: 41.379228, lng: 2.152531}} />
            <Marker />
           
        </GoogleMap>
    );
};

export default  withScriptjs(
    withGoogleMap(
        Map
    )
)