let myFavorites = []
let postFav = function(req, res) {
    myFavorites.push(req.body)
    res.json(myFavorites)
}
let deleteFav = function(req, res){
    let {id} = req.params;
    let filterId = myFavorites.filter((index)=>index.id !== id)
    res.json(filterId)
}
module.exports={
postFav,deleteFav
}