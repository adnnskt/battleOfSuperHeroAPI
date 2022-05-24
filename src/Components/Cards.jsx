import React, {useState} from 'react'
import '../App.css'
import api from '../Middleware/apiData'

export default props => {
    //let hero = {}  

 const [hero, setHero] = useState([])
 
 function changeData(){
    api.get('1')
    .then(function(response){
        setHero(response.data)
    })
 }
 
    return(
        <div className='container'>
            <div className='main'>
                <div className='first-card'>
                    <h2>{hero.name}</h2>
                </div>
                <div><button onClick={changeData} className='main-button'>Loading Heros</button></div>
                <div className='secound-card'>
                    <h2>Card 2</h2>
                </div>
            </div>

        </div>
    )
}