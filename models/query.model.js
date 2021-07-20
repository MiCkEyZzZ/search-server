const {Schema, Types, model} = require('mongoose')

const QuerySchema = new Schema({
  quest: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  clicks: {
    type: Number,
    default: 0
  },
  owner: {
    type: Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Query', QuerySchema)
