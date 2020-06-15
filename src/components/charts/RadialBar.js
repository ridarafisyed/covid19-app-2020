import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ValueContext from '../ValueContext';
import NumberFormat from 'react-number-format';
import { Container, Card } from 'react-bootstrap';


export default function RadialBar() {
    
    //const latest = React.useContext(ValueContext);
    const {latest} = React.useContext(ValueContext);
    
    const deaths = parseInt(latest.deaths);
    const recovered = parseInt(latest.recovered);
    const patients = parseInt(latest.active);

    const state = {          
            series: [patients,recovered,deaths],
            options: {
              chart: {
                height: 390,
                type: 'pie',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
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
              colors: ['#ffc107', '#5cb85c', '#d9534f'],
              labels: ['Currently Infected Patients', 'Total Recoverd', 'Total Deaths'],
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
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
          };
        
    
        return (  
          <Container className="chart-card">
            <Card style={{marginTop:"34px"}}>
            <div id="chart" > 
              <ReactApexChart options={state.options} series={state.series} type="pie" height="350"/> 
            </div>
            
              <Card.Header><h3>Total Cases Reported : <NumberFormat value={latest.cases} displayType={'text'} thousandSeparator={true}/></h3></Card.Header>
              <Card.Body>
                <Card.Title>
                <h5>Mild Condition: <NumberFormat value={latest.active - latest.critical} displayType={'text'} thousandSeparator={true}/></h5><br />
                <h5>Serious or Critical: <NumberFormat value={latest.critical} displayType={'text'} thousandSeparator={true}/></h5>
                
                </Card.Title>
              </Card.Body>
            </Card>
        </Container>
    )

}

