import React from 'react';

import ValueContext from '../ValueContext';

import { Container } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'

export default function Cards(props) {

    const {latest} = React.useContext(ValueContext)
    
    const date = new Date(parseInt(latest.updated));
    const lastupdated = date.toDateString();

    return (
        <>
            <Container>
                <div className="card-deck ">
                    <div className="card border-info cards">
                        <div className="card-body">
                            <h3 className="card-title display-5">Cases</h3>
                            <h1 className="card-text display-3">
                            <NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true}/>
                            </h1>
                        </div>
                        <div className="card-footer bg-info">
                        <small className="text-white">Last updated {lastupdated} mins ago</small>
                        </div>
                    </div>     
                    <div className="card border-success">
                    <div className="card-body">
                        <h3 className="card-title display-5 ">Recoved</h3>
                        <h1 className="card-text display-3">
                        <NumberFormat value={latest.recovered} displayType={'text'} thousandSeparator={true}/></h1>
                    </div>
                    <div className="card-footer bg-success">
                    <small className=" text-white">Last updated {lastupdated} mins ago</small>
                    </div>
                    </div> 
                    <div className="card border-danger">
                    <div className="card-body">
                        <h3 className="card-title display-5">Deaths</h3>
                        <h1 className="card-text display-3">
                        <NumberFormat value={latest.deaths} displayType={'text'} thousandSeparator={true}/></h1>
                    </div>
                    <div className="card-footer bg-danger">
                    <small className="text-white ">Last updated {lastupdated} mins ago</small>
                    </div>
                    </div>    
                </div>
            </Container>
            
        </>
    )
}
