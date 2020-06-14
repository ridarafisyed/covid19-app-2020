import React from 'react';
import axios from 'axios';

//local files import here
import ValueContext from './ValueContext';
import Cards from './cards/Cards';
import Covid19Map from './maps/Covid19Map';
import RadialBar from './charts/RadialBar';

//style related import here 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';



// covid-19 app 
export default function Covid19() {
    // Api data states
    const [latest, setLatest] = React.useState([]);
    const [countryData, setCountryData] = React.useState([]);
    
    //fatching data from api using useEffect and axios.
    React.useEffect(() => {
        axios
        .all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries")
        ])
        .then(res => {
          setLatest(res[0].data);
          setCountryData(res[1].data);
          })
        .catch(err =>{
        console.log(err);
        })
    })
    const other = latest;
    //main design
    return (
        <Container className='container-fluid'>
            <ValueContext.Provider value={{country:countryData, latest:latest}}>
            <Row>
                <Col>
                    <h1 className='Header'>Covid-19 App</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                        <Cards/>
                    
                </Col>
            </Row>
            <Row >
                <Col xs='8'>
                    
                        <Covid19Map/>
                    
                </Col>
                <Col xs='4'>
                    
                        <RadialBar/>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            </ValueContext.Provider>
        </Container>
    );
}


 