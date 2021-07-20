const {Schema, Types, model} = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  activationLink: {
    type: String
  },
  queries: [{type: Types.ObjectId, ref: 'Query'}]
})

module.exports = model('User', UserSchema)
