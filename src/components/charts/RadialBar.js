import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ValueContext from '../ValueContext';


export default function RadialBar() {
    
    //const latest = React.useContext(ValueContext);
    const {latest} = React.useContext(ValueContext);
    console.log(latest);


    const state = {          
            series: [ 79,10,26],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
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
              colors: ['#1ab7ea', '#0084ff', '#39539E'],
              labels: ['Total Cases', 'Total Recoverd', 'Total Deaths',],
              legend: {
                show: true,
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
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
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
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="radialBar" height="350"/>
        </div>
    )

}

