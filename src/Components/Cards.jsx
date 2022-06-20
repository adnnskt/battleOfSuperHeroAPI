import React, {useState} from 'react'
import '../App.css'
import api from '../Middleware/apiData'
import data from '../Middleware/data'
export default props => {
    //let hero = {}  

 const [hero, setHero] = useState([])
 const [heroImg, setHeroImg] = useState([])
 

 function changeData(){
    let heroData = {}
    heroData.name = data[0].name
    heroData.fullName = data[0].biography.aliases
    heroData.publisher = data[0].biography.publisher
    heroData.firstAppearance = `First appearance at ${data[0].biography.firstAppearance}`
    heroData.connection = `Connection with ${data[0].connections.groupAffiliation}`
    setHeroImg(<img src={data[0].images.lg} className= 'img' width= '160' height= '170'/>)
    setHero(heroData)        
    
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
                <div className='secound-card'>
                    <h2>Card 2</h2>
                </div>
            </div>

        </div>

        </>
    )
}
