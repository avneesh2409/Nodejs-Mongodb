const {user} = require('../../service/index');

const createUser =  async (req,res) =>{
    try{
        let result = await user.createUser(req.body);
        res.status(201).send({
            message:"resource created !!",
            payload:result
        })
    }
    catch(e){
        res.status(400).send({
            message:e.message,
            payload:null
        })
    }  
}

module.exports = createUser;