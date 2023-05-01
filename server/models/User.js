const mongoose = require('mongoose')

const definition = {
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
      sparse: true,
    },
  },
  post: {
    type: String,
    enum:['user','admin'],
    default:'user',
  },
  active:{
    type:Boolean,
    default:true,
  }
}

const options = {
  timestamps: true,
}

const userSchema = new mongoose.Schema(definition, options)

module.exports = mongoose.model('User', userSchema)
