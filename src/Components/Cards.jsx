import React, {useState} from 'react'
import '../App.css'
import api from '../Middleware/apiData'
export default props => {
    //let hero = {}  

 const [hero, setHero] = useState([])
 const [heroImg, setHeroImg] = useState([])
 

 function changeData(){
    let heroData = {}
    api.get('1')
    .then(function(response){
        
        heroData.name = response.data.name
        heroData.fullName = response.data.biography.aliases
        heroData.publisher = response.data.biography.publisher
        heroData.firstAppearance = `First appearance at ${response.data.biography['first-appearance']}`
        //console.log(response.data.biography['first-appearance'])
        setHeroImg(<img src={response.data.image.url} width= '110' height= '120'/>)
        setHero(heroData)        
    })
 }
 
    return(
        <div className='container'>
            <div className='main'>
                <div className='first-card'>
                    <div className='center-img'>{heroImg}</div>
                    <h1 className= 'name-hero'>{hero.name}</h1>
                    <div>
                        
                        <h4 className= 'sec-text'>{hero.fullName}</h4>
                        <h4 className= 'sec-text'>{hero.publisher}</h4>
                        <h4 className= 'sec-text'>{hero.firstAppearance}</h4>
                    </div>
                    
                </div>
                <div><button onClick={changeData} className='main-button'>Loading Heros</button></div>
                <div className='secound-card'>
                    <h2>Card 2</h2>
                </div>
            </div>

        </div>
    )
}