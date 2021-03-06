import React, {useState} from 'react'
import '../App.css'
import api from '../Middleware/apiData'
import data from '../Middleware/data'
import Chart from './Chart'

export default props => {
    
 const [hero, setHero] = useState([])
 const [heroImg, setHeroImg] = useState([])
 
 const [heroSecCard, setHeroSecCard] = useState([])
 const [heroImgSecCard, setHeroImgSecCard] = useState([])
 
 const [isActive, setIsActive] = useState(false);
 const [isActiveCard2, setIsActiveCard2] = useState(false);


 function changeData(){
    let heroData = {}
    let num = Math.random() * (731 - 0) + 0
    //setIsActive(current => !current)

    if (data[Math.round(num)] === undefined){
        changeData()
    } else {
        
        heroData.name = data[Math.round(num)].name
        heroData.fullName = data[Math.round(num)].biography.fullName
        heroData.publisher = data[Math.round(num)].biography.publisher
        heroData.firstAppearance = `First appearance at ${data[Math.round(num)].biography.firstAppearance}`
        heroData.connection = `Connection with ${data[Math.round(num)].connections.groupAffiliation}`
        heroData.intelligence = data[Math.round(num)].powerstats.intelligence
        heroData.strength = data[Math.round(num)].powerstats.strength
        heroData.speed = data[Math.round(num)].powerstats.speed
        heroData.durability = data[Math.round(num)].powerstats.durability
        heroData.power = data[Math.round(num)].powerstats.power
        heroData.combat = data[Math.round(num)].powerstats.combat
        
        setIsActive(current => !current)
        setHeroImg(<img src={data[Math.round(num)].images.lg} className= {isActive ? 'img grow' : ''} width= '160' height= '170'/>)
        setHero(heroData)        
        

        changeDataSecCard()    
    }
}

function changeDataSecCard(){
    let heroDataSecCard = {}
    let num = Math.random() * (731 - 0) + 0
    //683
    if (data[Math.round(num)] === undefined) {
        changeDataSecCard()
    } else {
        console.log(num)
        heroDataSecCard.name = data[Math.round(num)].name
        heroDataSecCard.fullName = data[Math.round(num)].biography.fullName
        heroDataSecCard.publisher = data[Math.round(num)].biography.publisher
        heroDataSecCard.firstAppearance = `First appearance at ${data[Math.round(num)].biography.firstAppearance}`
        heroDataSecCard.connection = `Connection with ${data[Math.round(num)].connections.groupAffiliation}`
        heroDataSecCard.intelligence = data[Math.round(num)].powerstats.intelligence
        heroDataSecCard.strength = data[Math.round(num)].powerstats.strength
        heroDataSecCard.speed = data[Math.round(num)].powerstats.speed
        heroDataSecCard.durability = data[Math.round(num)].powerstats.durability
        heroDataSecCard.power = data[Math.round(num)].powerstats.power
        heroDataSecCard.combat = data[Math.round(num)].powerstats.combat
        
        setIsActiveCard2(current => !current)
        setHeroImgSecCard(<img src={data[Math.round(num)].images.lg} className= {isActiveCard2 ? 'img grow' : ''} width= '160' height= '170'/>)
        setHeroSecCard(heroDataSecCard)           
    }

}
    return(
        
    <>
    <div className='container'>
            <div className='main'>
                <div className= 'first-container'>
                <div className='center-img'>{heroImg}</div>
                    <div className='first-card'>                                  
                        <h1 className= {isActive ? 'name-hero fade-in' : 'name-hero'}>{hero.name}</h1>
                        <div className= {isActive ? 'info fade-in' : 'info'}>                     
                            <h4 className= 'sec-text'>{hero.fullName}</h4>
                            <h4 className= 'sec-text'>{hero.publisher}</h4>
                            <h4 className= 'sec-text'>{hero.firstAppearance}</h4>
                            <h4 className= 'sec-text'>{hero.connection}</h4>
                        </div>
                        <div className='chart'>
                            <Chart 
                                intelligence = {hero.intelligence}
                                strength = {hero.strength}
                                speed = {hero.speed}
                                durability = {hero.durability}
                                power = {hero.power}
                                combat = {hero.combat} 
                            />
                        </div>
                    </div>
                </div>
                <div><button onClick={changeData} className='main-button'>Loading Heros</button></div>
                <div className= 'first-container'>
                    <div className='center-img'>{heroImgSecCard}</div>
                        <div className='secound-card'>
                        <h1 className={isActiveCard2 ?  'name-hero-2 fade-in' : 'name-hero-2'}>{heroSecCard.name}</h1>
                            <div className = {isActiveCard2 ? 'info fade-in' : 'info'}>                     
                                <h4 className= 'sec-text-2'>{heroSecCard.fullName}</h4>
                                <h4 className= 'sec-text-2'>{heroSecCard.publisher}</h4>
                                <h4 className= 'sec-text-2'>{heroSecCard.firstAppearance}</h4>
                                <h4 className= 'sec-text-2'>{heroSecCard.connection}</h4>
                            </div>
                            <div className='chart'>
                            <Chart 
                                intelligence = {heroSecCard.intelligence}
                                strength = {heroSecCard.strength}
                                speed = {heroSecCard.speed}
                                durability = {heroSecCard.durability}
                                power = {heroSecCard.power}
                                combat = {heroSecCard.combat} 
                            />
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        
        </>
    )
}

