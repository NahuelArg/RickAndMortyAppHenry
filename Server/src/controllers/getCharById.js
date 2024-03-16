var axios = require("axios")
const URL = `https://rickandmortyapi.com/api/character/`;
async function getCharById(req, res){
  let {id} = req.params
   let response = await axios.get(URL + id)
   try {
    let {
      id, 
      status,
      name,
      species,
      origin,
      image,
      gender
          } = response.data
          if (name) {
            let character= { id, name, gender, species, origin: origin.name, image, status } 
            return res.status(200).send( character )
         }else{
          return res.status (404).send({message:"Not Found!"})
         }
   } catch (error) {
    res.status (500).send({message:error.message})
   }
  
}
module.exports = getCharById