import React from 'react';

import ValueContext from '../ValueContext';

import { Container } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Covid19.css'

export default function Cards(props) {

    const {latest} = React.useContext(ValueContext);
    return (
        <>
            <Container>
            <div className="w3-row-padding w3-margin-bottom cards-pp">
                <div className="w3-quarter">
                <div className="w3-container w3-blue w3-padding-16" >
                    <div className="w3-left"><i className="far fa-heart w3-xxxlarge"></i></div>
                    <div className="w3-right">
                    <h3><NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true}/></h3>
                    </div>
                    <div className="w3-clear"></div>
                    <h4>Confirmed Cases</h4>
                </div>
                </div>
                <div className="w3-quarter">
                <div className="w3-container w3-green w3-padding-16">
                    <div className="w3-left"><i className="fas fa-heart w3-xxxlarge"></i></div>
                    <div className="w3-right">
                    <h3><NumberFormat value={latest.recovered} displayType={'text'} thousandSeparator={true}/></h3>
                    </div>
                    <div className="w3-clear"></div>
                    <h4>Recovered</h4>
                </div>
                </div>
                <div className="w3-quarter">
                <div className="w3-container w3-red w3-padding-16">
                    <div className="w3-left"><i className="fas fa-heart-broken w3-xxxlarge"></i></div>
                    <div className="w3-right">
                    <h3><NumberFormat value={latest.deaths} displayType={'text'} thousandSeparator={true}/></h3>
                    </div>
                    <div className="w3-clear"></div>
                    <h4>Deaths</h4>
                </div>
                </div>
                <div className="w3-quarter">
                <div className="w3-container  w3-purple w3-padding-16">
                    <div className="w3-left"><i class="fas fa-heartbeat w3-xxxlarge"></i></div>
                    <div className="w3-right">
                    <h3><NumberFormat value={latest.critical} displayType={'text'} thousandSeparator={true}/></h3>
                    </div>
                    <div className="w3-clear"></div>
                    <h4>Critical</h4>
                </div>
                </div>
            </div>
            </Container>
            
            
        </>
    )
}
