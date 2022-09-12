import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
    indexAxis: 'y' /*as const*/,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right'/* as const*/,
      },
      title: {
        display: true,
        /*text: 'Chart.js Horizontal Bar Chart',*/
      },
    },
  }


export default props => {
 
 let stats = []   
 stats = [5, 10, 2, 6, 4, 10]

  
   const labels = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: stats,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: stats,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <Bar options={options} data={data} />
 )
}

