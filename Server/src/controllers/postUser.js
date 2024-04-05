const {User} = require('../DB_connection');
async function postUser(req, res){
    try {
        let {email, password} = req.body;
        console.log(email,password);
        if(!email || !password){
            res.status(400).send({message:error.message})
        }
            let [user, created] = await User.findOrCreate({
                where:{email},
                defaults:{password}
            })
            if (created) {
                res.status(201).send({message:'Usuario Creado', user})
            }else{
                res.status(409).send({message:'El usuario ya existe', user})
            }
        
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
module.exports = postUser;
