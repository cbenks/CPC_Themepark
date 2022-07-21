const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    ticket_id: { type: Schema.Types.ObjectId, ref: 'ticket_id' }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('clients', Client)
