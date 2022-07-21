const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
  {
    type: { type: String, required: true },
    price: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = mongoose.model('tickets', Ticket)
