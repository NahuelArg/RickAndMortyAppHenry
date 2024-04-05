const {User} = require('../DB_connection');
async function login(req, res){
    try{
    let{email, password} = req.query;
    if (!email || !password) {
        res.status(400).send({message:error})
    }
    let user = await User.findOne({where:{email:email}})
        if (!user) {
            res.status(404).send({message:'Usuario no encontrado'})
        }

    if (user.password !== password) {
        res.status(403).send({message:'Contraseña incorrecta'})
    }
   return res.status(200).send({access:true});
}
   
    catch(error){
        res.status(500).send({message:error.message})
    }

}
module.exports=login;