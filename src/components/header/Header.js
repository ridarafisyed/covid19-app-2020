import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron} from 'react-bootstrap';

export default function Header() {
    return (
        <Jumbotron>
            <Container sm={4}>
            <h1><i className="fas fa-viruses w3-text-red"></i> Covid-19 : Pandemic Trends</h1>
            <hr />
            <p>
            <i className="fas fa-hands-wash w3-text-blue"></i> Wash hands, 
            <i class="fas fa-head-side-mask w3-text-cyan"> </i> Cover face, 
            <i class="fas fa-people-arrows w3-text-deep-purple"></i> Safe distance, 
            <i class="fas fa-house-user w3-text-orange"></i>  Stay home & 
            <i class="fas fa-shield-virus w3-text-amber"></i> Stay Save. 
            </p>
            </Container>
      </Jumbotron>
    )
}
