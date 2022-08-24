import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.superheroapi.com/api/4333983510002184/'
})


export default api



function getData(){

    let data = {}

    axios.get('https://www.superheroapi.com/api/4333983510002184/1')
    .then(function(response){
       Object.assign(data, response.data)
    })
    return data
}
