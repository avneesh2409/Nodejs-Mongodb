const { User } = require("../../db/model")


const findAll = async (user) =>{
    let users = await User.find({});
    return users;
}

module.exports = findAll;