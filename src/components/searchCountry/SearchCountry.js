import React from 'react';

import ReactApexChart from 'react-apexcharts';
import NumberFormat from 'react-number-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Form } from 'react-bootstrap';
import ValueContext from '../ValueContext';


export default function SearchCountry() {
    const {country} = React.useContext(ValueContext); 

    
    const [searchCountry, setSearchCountry] = React.useState("Pakistan");

    const selectedCountry = country.filter(item => { 
        return searchCountry !== "" ? item.country === searchCountry: setSearchCountry("Pakistan")
    });

    const countryData = selectedCountry.map((data) =>{
        
        const chart1 = {          
            series: [data.active,data.recovered,data.deaths],
            options: {
              chart: {
                height: 'auto',
                width: '100%',
                type: 'pie',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    //size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: true,
                    },
                    value: {
                      show: true,
                    }
                  }
                }
              },
              colors: ['#17a2b8', '#28a74b', '#ff0000'],
              labels: ['Currently Active Cases', 'Total Recoverd', 'Total Deaths'],
              legend: {
                show: false,
                floating: true,
                fontSize: 'auto',
                position: 'right',
                offsetX: 160,
                offsetY: 15,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  <NumberFormat value={" + opts.w.globals.series[opts.seriesIndex] + "} displayType={'text'} thousandSeparator={true}/>"
                },
                itemMargin: {
                  vertical: 3
                }
              },
              
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                    show: false
                }
              }
            }]
          };
          
          const chart2 = {          
            series: [{
              name: 'Cases Reported',
              data: [data.todayCases]
            }, {
              name: 'Deaths',
              data: [data.todayDeaths]
            }, {
              name: 'Recovered',
              data: [data.todayRecovered]
            }],
              options: {
                chart: {
                  type: 'bar',
                  height: 350
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories:["Today's Report"],
                },
                yaxis: {
                  title: {
                    text: '(thousands)'
                  }
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return  val 
                    }
                  }
                }
              },
              responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    plotOptions: {
                      bar: {
                        horizontal: false
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ]
            };
            
  
        return (
            <Row>
                <Col sm={4} className="card">

                    <img src={data.countryInfo.flag} alt="{data.country}"/>
                    
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th colspan="3" scope="col">
                                <h1 className="text-center">{data.country}</h1>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr> 
                            <td><i className="fas fa-viruses w3-text-blue"></i></td>
                            <td>Total Cases:</td>
                            <td><NumberFormat value={data.cases} displayType={'text'} thousandSeparator={true}/></td>
                        </tr>
                        <tr>
                            <td><i className="fas fa-viruses w3-text-green"></i></td>
                            <td>Total Recovered:</td>
                            <td><NumberFormat value={data.recovered} displayType={'text'} thousandSeparator={true}/></td>
                        </tr>
                        <tr>  
                            <td><i className="fas fa-viruses w3-text-red"></i></td>
                            <td>Total Deaths</td>
                            <td><NumberFormat value={data.deaths} displayType={'text'} thousandSeparator={true}/></td>
                        </tr>
                        <tr> 
                            <td><i className="fas fa-viruses w3-text-cyan"></i></td>
                            <td>Active Cases:</td>
                            <td><NumberFormat value={data.active} displayType={'text'} thousandSeparator={true}/></td>
                        </tr>
                        <tr> 
                            <td><i className="fas fa-viruses w3-text-deep-purple"></i></td>
                            <td>Critical Condition:</td>
                            <td><NumberFormat value={data.critical} displayType={'text'} thousandSeparator={true}/></td>
                        </tr>
                        <tr> 
                            <td><i className="fas fa-viruses w3-text-amber"></i></td>
                            <td>Mild Condition:</td>
                            <td><NumberFormat value={data.active - data.critical} displayType={'text'} thousandSeparator={true}/></td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
                <Col sm={4}>
                <Container  className="chart-card">
                    
                    <div id="chart" > 
                      <ReactApexChart options={chart1.options} series={chart1.series} type="pie" height="350" /> 
                      <h3 className='text-center'>Cases Report</h3>
                      <h4 className='text-center'>Total Cases: {data.cases}</h4>
                    </div>
                    
                </Container>
                </Col>
                <Col sm={4}>
                <Container className="chart-card">
                    
                    <div id="chart" > 
                    <ReactApexChart options={chart2.options} series={chart2.series} type="bar" height="350"/> 
                    <h3 className='text-center'>Daily Report</h3>
                    </div>
                    
                </Container>
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
                <div>{countryData}</div>
            </Container>    
        </>
    )
}
