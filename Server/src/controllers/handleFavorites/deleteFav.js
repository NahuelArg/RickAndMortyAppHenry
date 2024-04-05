const {Favorite} = require('../../DB_connection')
async function deleteFav(req,res) {
    try {
        let{id} = req.params;
        if (!id) {
            res.status(401).send({message:'Faltan datos'})
        }
        await Favorite.destroy({
            where:{
                id:id}
            }
                );
        const allFavs = await Favorite.findAll()
        return res.status(200).json({allFavs})
    } catch (error) {
        return res.status(500).send({ message: 'Error en el servidor',  error });}
   

}
module.exports=deleteFav;