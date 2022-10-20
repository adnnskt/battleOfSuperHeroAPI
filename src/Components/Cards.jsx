import React, {useState} from 'react'
import '../App.css'
import api from '../Middleware/apiData'
import data from '../Middleware/data'
import Chart from './Chart'
import Bar from './Result'
import 'animate.css'
import PieChart from './PieChart'

export default props => {

 const [isHidden, setIsHidden] = useState(false);
 const [isHiddenBattle, setIsHiddenBattle] = useState(false);
 const [isHiddenResult, setIsHiddenResult] = useState(false);

 const [hero, setHero] = useState([])
 const [heroImg, setHeroImg] = useState([])
 
 const [heroSecCard, setHeroSecCard] = useState([])
 const [heroImgSecCard, setHeroImgSecCard] = useState([])
 
 const [isActive, setIsActive] = useState(false);
 const [isActiveCard2, setIsActiveCard2] = useState(false);

 const [result, setResult] = useState(false)


 let heroData = {}
 let heroDataSecCard = {}

 function changeData(){
    //let heroData = {}
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
        setHeroImg(<img src={data[Math.round(num)].images.lg} className= {isHidden ? 'hidden-element' : 'img animate__fadeOut'} width= '160' height= '170'/>)
        setHero(heroData)        
        

        changeDataSecCard()    
    } 
}

function hidden(){
    if(hero.name != undefined && hero.name != null){
        setIsHidden(current => !current)
        setTimeout(() => {
            setIsHiddenBattle(current => !current);
          }, "1000")

        setTimeout(() => {
        setIsHiddenBattle(current => !current);
        }, "3000") 

        setTimeout(() => {
            setIsHiddenResult(current => !current);
            }, "3100") 
            
    } else {
        alert("Please push the button loading heros first");
    }


}
 
function changeDataSecCard(){
    //let heroDataSecCard = {}
    let num = Math.random() * (731 - 0) + 0
    //683
    if (data[Math.round(num)] === undefined) {
        changeDataSecCard()
    } else {
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
        setHeroImgSecCard(<img src={data[Math.round(num)].images.lg} className= {isActiveCard2 ? 'img' : 'img'} width= '160' height= '170'/>)
        setHeroSecCard(heroDataSecCard)
        changeResultBar()                      
    }

}

function changeResultBar(){
    setResult(
        <Bar 
            intelligence = {heroData.intelligence}
            strength = {heroData.strength}
            speed = {heroData.speed}
            durability = {heroData.durability}
            power = {heroData.power}
            combat = {heroData.combat} 
            name = {heroData.name}
            img = {heroImg}

            intelligenceSecCard = {heroDataSecCard.intelligence}
            strengthSecCard = {heroDataSecCard.strength}
            speedSecCard = {heroDataSecCard.speed}
            durabilitySecCard = {heroDataSecCard.durability}
            powerSecCard = {heroDataSecCard.power}
            combatSecCard = {heroDataSecCard.combat} 
            nameSecCard = {heroDataSecCard.name}
            imgSecCard = {heroImgSecCard}
        />
    )     
}

function changeResult(){    
    let power = [
        {
            intelligence: hero.intelligence, 
            strength: hero.strength,
            speed: hero.speed,
            durability: hero.durability,
            power: hero.power,
            combat: hero.combat

        }
    ]

    let powerSort = power.sort((a, b) =>{
        return a - b
    })

    console.log(powerSort)
    console.log(power)

    setResult(<PieChart />)
 }


    /*
    */


    return(
    <>
    
    <div className = {isHiddenResult ? 'result' : 'result hidden-element'}>
        
    <div className= 'result-box'>
            <div className= 'result-name'>
                <div>{heroImg}</div>
                    <h1 className= 'name-heroResult'>{hero.name}</h1>
            </div>
            <div className='l-button'></div>
            <div className = 'bar-chart'>
                {result}
            </div>
            <div className='r-button' onClick={changeResult}></div>
            <div className= 'result-name'>
                <div>{heroImgSecCard}</div>
                    <h1 className= 'name-heroResult'>{heroSecCard.name}</h1>
            </div>
        </div>
    </div>

    <div className= {isHiddenBattle ? 'giphy' : 'hidden-element giphy'}>
        <div className='giphy-center'>
            <iframe src="https://giphy.com/embed/VeRKy8tgLDplAqWNoH" width="330" height="214" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/stickers/krima-isa-hero-superhero-superheld-VeRKy8tgLDplAqWNoH"></a>
            <iframe src="https://giphy.com/embed/6lhye0xJFy5tD8TLY5" width="280" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/stickers/HollandBloorview-kaboom-ka-boom-hollandbloorview-6lhye0xJFy5tD8TLY5"></a>
            <iframe src="https://giphy.com/embed/2JRDs2HmH2NNXnITRe" width="280" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/stickers/jerseydemic-crash-accident-car-2JRDs2HmH2NNXnITRe"></a>
        </div>
    </div>

    <div className= {isHidden ? 'fade-out hidden-element container' : 'container'} >
            <div className='main'>
                <div className= 'first-container'>
                <div className= 'center-img'>{heroImg}</div>
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
                <div className= 'group-buttons'>
                    <button onClick={changeData} className='main-button'>Loading Heros</button>
                    <div className= 'battle-group'>
                        <button onClick={hidden} className='battle-button'>go Battle!</button>
                    </div>
                </div>
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

