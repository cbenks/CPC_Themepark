const db = require('../db')
const Client = require('../models/client')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const clients = [
    { name: 'John Doe', email: 'johnDoe@gmail.com' },
    { name: 'Sarah Small', email: 'SarahSmall@gmail.com' }
  ]

  await Client.insertMany(clients)
  console.log('Created two clients!')
}

const run = async () => {
  await main()
  db.close()
}

run()
