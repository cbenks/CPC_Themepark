const db = require('../db')
const Ticket = require('../models/ticket')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const tickets = [
    { type: 'Senior', price: '30' },
    { type: 'Adult', price: '50' },
    { type: 'Child', price: '35' }
  ]

  await Ticket.insertMany(tickets)
  console.log('Created three tickets!')
}

const run = async () => {
  await main()
  db.close()
}

run()
