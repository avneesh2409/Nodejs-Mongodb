const mongoose = require('../connection');
const {ObjectId} = require('mongodb');
const { Schema,Ob } = mongoose;

const userSchema = new Schema({
  name:{
    type:String,
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  createdBy:{
    type:ObjectId,
    required:true
  },
  contact:{
      type:String
  },
  address:{
      type:String
  }
},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;