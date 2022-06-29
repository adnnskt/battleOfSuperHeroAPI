import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    //Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    //Legend
  );
  
  export default props => {
    const data = {
        labels: ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'],
        datasets: [
          {
            //label: 'atributes',
            data: [4, 9, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      }
    
    return(
        <Radar data={data} />
    )   
  } 

