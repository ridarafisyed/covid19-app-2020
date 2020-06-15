import React, {useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import '../Covid19.css';


import { Container } from 'react-bootstrap';
import ValueContext from '../ValueContext';


export default function Covid19Map() {
  
  const {country} = React.useContext(ValueContext); 
  
  const [viewport, setViewport] =useState({
    width: '50vw',
    height: '80vh',
    latitude: 0,
    longitude: 0,
    zoom: 0.3,
    
  });
 
  return (
    <>
       
      <Container className='Map'>
        
        <ReactMapGL {...viewport}   
            mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/ridarafisyed/ckbbsjkfk0k5s1infhozwl231" 
            zoom={viewport.zoom}
            onViewportChange={(setViewport)}     
        >
          { country.map((data =>(
            <Marker 
                key={data.countryInfo._id}
                latitude={data.countryInfo.lat} 
                longitude={data.countryInfo.long}
                >         
                 <button className='btn-link btn-lg map_marker' 
                 title={ data.country +" : " + data.active} 
                 alt={ data.country +" : " + data.active}>
                 <i className='fas fa-virus w3-text-yellow'></i>
                 </button>   
          </Marker>
          )))}
        </ReactMapGL>

      </Container>
    </>       
  );
}


