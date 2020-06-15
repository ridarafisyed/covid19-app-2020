import React from 'react';
import axios from 'axios';

//local files import here
import ValueContext from './ValueContext';
import Cards from './cards/Cards';
import Covid19Map from './maps/Covid19Map';
import RadialBar from './charts/RadialBar';
import Header from './header/Header'
import Splinearea from './charts/Splinearea';
import SearchCountry from './searchCountry/SearchCountry';
import Footer from './footer/Footer';

//style related import here 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';



// covid-19 app 
export default function Covid19() {
    const [count, setCount] = React.useState(0);
    
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
        
        })
        setCount(1);
    }, []);
    
    return (
        <Container >
            <ValueContext.Provider value={{country:countryData, latest:latest}}>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Cards/>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>                    
                    <Covid19Map/>
                </Col>
                <Col sm={4}>
                    <RadialBar/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Splinearea/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchCountry/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer/>
                </Col>
            </Row>
            </ValueContext.Provider>
        </Container>
    );
}


 