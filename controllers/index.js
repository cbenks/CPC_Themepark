const Client = require('../models/client')
const Ticket = require('../models/ticket')

const createClient = async (req, res) => {
  try {
    const client = await new Client(req.body)
    await client.save()
    return res.status(201).json({
      client
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createTicket = async (req, res) => {
  try {
    const ticket = await new Ticket(req.body)
    await ticket.save()
    return res.status(201).json({
      ticket
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find()
    return res.status(201).json({
      clients
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
    return res.status(201).json({
      tickets
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createClient,
  createTicket,
  getAllClients,
  getAllTickets
}
