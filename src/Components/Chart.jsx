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
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }  


  export default props => {
    let stats = []

    if (props.intelligence === undefined) {
        stats = [10, 10, 10, 10, 10, 10]
    }else {
        stats = [props.intelligence, props.strength, props.speed, props.durability, props.power, props.combat]
    }

    const data = {
        labels: ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'],
        datasets: [
          {
            label: '',
            data: stats,
            backgroundColor: 'rgba(239, 155, 1, 0.6)',
            borderColor: 'rgba(239, 155, 1, 1)',
            borderWidth: 0.5,
          },
        ],
      }
      
    return(
        <Radar options={options}  data={data} />
    )   
  } 
/*
  Radar.defaultProps = {
    intelligence = '10',
    strength = '10',
    speed = '10',
    durability = '10',
    power = '10',
    combat = '10'                                    
}

*/

