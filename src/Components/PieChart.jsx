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
        text: 'Best Power',
        position: 'top',
      },
    },
  }


export default props => {
  const data = {  
    labels: ['Red', 'Blue'],
    datasets: [
        {
        //label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
            'rgb(115, 116, 117)',
            'rgb(163, 27, 27)',

        ],
        borderColor: [
            'rgb(115, 116, 117)',
            'rgb(163, 27, 27)',
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



