import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../App.css'


ChartJS.register(ArcElement, Tooltip, Legend);

export default props => {
  const data = {  
    labels: ['Red', 'Blue'],
    datasets: [
        {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        },
    ],

 }
  return (
    <div className = 'pie-chart'>
        <Pie data={data} />
    </div>
    
  )
}



