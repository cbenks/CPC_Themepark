const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/clients', controllers.createClient)

router.post('/tickets', controllers.createTicket)

router.get('/clients', controllers.getAllClients)

router.get('/tickets', controllers.getAllTickets)

module.exports = router
