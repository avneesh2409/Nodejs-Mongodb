const { User } = require("../../db/model");


const createUser = async (data,user) =>{
        let createdUser = await User({name:data.name,email:data.email,password:data.password,createdBy:data.createdBy,contact:data.contact,address:data.address});
        createdUser.save();
        return createdUser;
}

module.exports = createUser;