const {Schema, Types, model} = require('mongoose')

const TokenSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'User'
  },
  refreshToken: {
    type: String,
    required: true
  }
})

module.exports = model('Token', TokenSchema)
