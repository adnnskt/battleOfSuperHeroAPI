import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../App.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'/* as const*/,
      },
      title: {
        display: true,
        text: 'Best Power stats',
        position: 'top',
      },
      subtitle: {
        display: true,
        text: 'The best power stats of heros',
        position: 'bottom',
      },
    },
  }


export default props => {
  const data = {  
    labels: [`${props.nameSecCard} -${props.powerTypeSecCard}`, `${props.name} -${props.powerType}`],
    datasets: [
        {
        //label: '# of Votes',
        data: [props.power, props.powerSecCard],
        backgroundColor: [
            'rgb(163, 27, 27)',
            'rgb(115, 116, 117)',

        ],
        borderColor: [
            'rgb(163, 27, 27)',
            'rgb(115, 116, 117)',
        ],
        borderWidth: 1,
        },
    ],
    options:{
        legend:{
            position: 'bottom',
        }
    },

 }
  return (
    <div className = 'pie-chart'>
        <Pie options={options} data={data} />
    </div>
    
  )
}



