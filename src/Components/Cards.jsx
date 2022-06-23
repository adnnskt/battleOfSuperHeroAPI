import React, {useState} from 'react'
import '../App.css'
import api from '../Middleware/apiData'
import data from '../Middleware/data'
export default props => {
    //let hero = {}  

 const [hero, setHero] = useState([])
 const [heroImg, setHeroImg] = useState([])
 
 const [heroSecCard, setHeroSecCard] = useState([])
 const [heroImgSecCard, setHeroImgSecCard] = useState([])
 

 function changeData(){
    let heroData = {}
    heroData.name = data[0].name
    heroData.fullName = data[0].biography.fullName
    heroData.publisher = data[0].biography.publisher
    heroData.firstAppearance = `First appearance at ${data[0].biography.firstAppearance}`
    heroData.connection = `Connection with ${data[0].connections.groupAffiliation}`
    setHeroImg(<img src={data[0].images.lg} className= 'img' width= '160' height= '170'/>)
    setHero(heroData)        
    
    changeDataSecCard()
    /*
    api.get('3')
    .then(function(response){
        
        heroData.name = response.data.name
        //heroData.fullName = response.data.biography.aliases
        //heroData.publisher = response.data.biography.publisher
        //heroData.firstAppearance = `First appearance at ${response.data.biography['first-appearance']}`
        //heroData.connection = `Connection with ${response.data.connections['group-affiliation']}`
        console.log(response.data)
       // setHeroImg(<img src={response.data.image.url} className= 'img' width= '150' height= '120'/>)
       // setHero(heroData)        
    })
    */
}

function changeDataSecCard(){
    let heroDataSecCard = {}
    heroDataSecCard.name = data[1].name
    heroDataSecCard.fullName = data[1].biography.fullName
    heroDataSecCard.publisher = data[1].biography.publisher
    heroDataSecCard.firstAppearance = `First appearance at ${data[1].biography.firstAppearance}`
    heroDataSecCard.connection = `Connection with ${data[1].connections.groupAffiliation}`
    setHeroImgSecCard(<img src={data[1].images.lg} className= 'img' width= '160' height= '170'/>)
    setHeroSecCard(heroDataSecCard)        
    
}


    return(
        
    <>
    <div className='container'>
            <div className='main'>
                <div className= 'first-container'>
                <div className='center-img'>{heroImg}</div>
                    <div className='first-card'>
                                    
                        <h1 className= 'name-hero'>{hero.name}</h1>
                        <div>                     
                            <h4 className= 'sec-text'>{hero.fullName}</h4>
                            <h4 className= 'sec-text'>{hero.publisher}</h4>
                            <h4 className= 'sec-text'>{hero.firstAppearance}</h4>
                            <h4 className= 'sec-text'>{hero.connection}</h4>
                        </div>
                    </div>
                </div>
                <div><button onClick={changeData} className='main-button'>Loading Heros</button></div>
                <div className= 'first-container'>
                    <div className='center-img'>{heroImgSecCard}</div>
                        <div className='secound-card'>
                        <h1 className='name-hero-2'>{heroSecCard.name}</h1>
                            <div>                     
                                <h4 className= 'sec-text-2'>{heroSecCard.fullName}</h4>
                                <h4 className= 'sec-text-2'>{heroSecCard.publisher}</h4>
                                <h4 className= 'sec-text-2'>{heroSecCard.firstAppearance}</h4>
                                <h4 className= 'sec-text-2'>{heroSecCard.connection}</h4>
                            </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}
