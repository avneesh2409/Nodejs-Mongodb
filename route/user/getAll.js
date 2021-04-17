const {user} = require('../../service/index')
const getAllUsers =  async (req,res) =>{
    let users = await user.findAll();
    res.status(200).send({
        message:"users fetched !!",
        payload:users
    })
}

module.exports = getAllUsers;