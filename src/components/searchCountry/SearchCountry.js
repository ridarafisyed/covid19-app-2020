import React from 'react'
import { Container } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import '../cards/node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function SearchCountry() {
    
    const [searchCountry, setSearchCountry] = React.useState("Pakistan");

    const selectedCountry = result.filter(item => { 
        return searchCountry !== "" ? item.country === searchCountry: setSearchCountry("Pakistan")
    });

    const country = selectedCountry.map((data) =>{
        return (
        <Row>
        <Col xs="4">
        <Card className="">
            <Card.Img variant="top" src={data.countryInfo.flag} />
            <Card.Header className="">
            <Card.Title><h1>{data.country}</h1></Card.Title>
            </Card.Header>
            <ListGroup  className="list-group list-group-flush table-striped">
            <ListGroupItem className="list-group-item">Total Cases : 
            <NumberFormat value={data.cases} displayType={'text'} thousandSeparator={true}/></ListGroupItem>
            <ListGroupItem className="list-group-item">Total Deaths : 
            <NumberFormat value={data.deaths} displayType={'text'} thousandSeparator={true}/></ListGroupItem>
            <ListGroupItem className="list-group-item">Total Recoverd : 
            <NumberFormat value={data.recovered} displayType={'text'} thousandSeparator={true}/></ListGroupItem>
            </ListGroup>
            <ListGroup className="list-group list-group-flush table-striped">
            <ListGroup.Item className="list-group-item">Today Cases : 
            <NumberFormat value={data.todayCases} displayType={'text'} thousandSeparator={true}/></ListGroup.Item>
            <ListGroup.Item className="list-group-item">Today Deaths : 
            <NumberFormat value={data.todayDeaths} displayType={'text'} thousandSeparator={true}/></ListGroup.Item>
            <ListGroup.Item className="list-group-item">Today Recoverd : 
            <NumberFormat value={data.todayRecovered} displayType={'text'} thousandSeparator={true}/></ListGroup.Item>
            </ListGroup>
            <Card.Footer className="bg-light">
            ...
            </Card.Footer>
        </Card>
        </Col>
        <Col xs="8">
            <h1>Here comes the Graph</h1>
        </Col>
        </Row>
        )
    })
    return (
        <>
            <Container>
                <Row>
                <Col style={{padding:"15px"}}>
                <Form>
                    <Form.Group controlId="formGroupSearch">
                        <Form.Control type="text" placeholder="Search a Country" 
                        onChange={e => setSearchCountry(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Form>
                </Col>
                </Row>
                <div>{country}</div>
            </Container>    
        </>
    )
}
