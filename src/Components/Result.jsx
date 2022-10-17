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
        position: 'bottom'/* as const*/,
      },
      title: {
        display: true,
        text: 'Power Stats',
        position: 'top',
      },
    },
  }


export default props => {
 
 let statsCard = []   
 let statsSecCard = []   
 
 
 if (props. intelligence === undefined){
    statsCard = [10, 10, 10, 10, 10, 10]
 } else {
    statsCard = [props.intelligence, props.strength, props.speed, props.durability, props.power, props.combat]
 }
 

 if (props. intelligence === undefined){
    statsSecCard = [10, 10, 10, 10, 10, 10]
 } else {
    statsSecCard = [props.intelligenceSecCard, props.strengthSecCard, props.speedSecCard, props.durabilitySecCard, props.powerSecCard, props.combatSecCard]
 }


   const labels = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  
   const data = {
    labels,
    datasets: [
      {
        label: props.name,
        data: statsSecCard,
        borderColor: 'white',
        backgroundColor: 'rgb(115, 116, 117)',
      },
      {
        label: props.nameSecCard,
        data: statsCard,
        borderColor: 'white',
        backgroundColor: 'rgb(163, 27, 27)',
      },
    ],
  }

  return (
    <Bar options={options} data={data} />
 )
}


