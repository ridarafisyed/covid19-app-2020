import React from 'react'
import axios from 'axios';

import ReactApexChart from 'react-apexcharts';



export default function LineChart() {
    const [count, setCount] = React.useState(0);

    const [dailyData, setDailyData] = React.useState([]);
   // const [dailyDate, setDailyDate] = React.useState([]);
    
    
    //fatching data from api using useEffect and axios.
    React.useEffect(() => {
      setCount(1);
      axios
      .get("https://covid19.mathdro.id/api/daily")
      .then(res => {
      setDailyData(res.data);          
      })
      .catch(err =>{
      
      })
  }, []);

  const modified = dailyData.map((daily) =>({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));


    const state = {
          
        series: [{
          name: 'Confirm Cases',
          data: modified.map(({confirmed}) => confirmed),
        }, {
          name: 'Deaths',
          data: modified.map(({deaths}) => deaths),
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: modified.map(({date}) => date)
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };  

    return (
        <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
      </div>
    
    );
}
