var axios = require("axios")
const URL = `https://rickandmortyapi.com/api/character` 
function getCharById (res, id){
 axios.get(`${URL}/${id}`)
    .then(response=>{
        console.log('Respuesta:', response.data)
    var char = {
        id: id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin.name,
        image: response.data.image,
        status: response.data.status
    }
    res.writeHead(200,{"Content-type":"aplication-json"})
    return res.end(JSON.stringify(char))
    }).catch(error=>{
        res.writeHead(500,{"Content-type":"text/plain"})
        return res.end(JSON.stringify(error))
    })
}
module.exports = getCharById