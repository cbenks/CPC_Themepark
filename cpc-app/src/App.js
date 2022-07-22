import logo from './logo.svg'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Ticket from './components/Ticket'
import Confirmation from './components/Confirmation'

const BASE_URL = 'http://localhost:3001/api'

function App() {
  let [buyTicket, setBuyTicket] = useState({
    name: '',
    email: '',
    cardNumber: '',
    Zipcode: '',
    CVV: '',
    ticketType: ''
  })

  const [client, setClients] = useState()

  useEffect(() => {
    const getClient = async () => {
      const res = await axios.get(`${BASE_URL}/clients`)
      console.log(res.data.clients)
      //setClients(res.data.clients)
    }
    getClient()
  }, [])

  const handleChange = (event) => {
    let clientInfo = {
      ...buyTicket,
      [event.currentTarget.id]: event.currentTarget.value
    }
    setBuyTicket(clientInfo)
    console.log(event.target.value)
  }

  const handleSubmit = async (event) => {
    //event.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/clients`, buyTicket)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">CPC THEMEPARK</header>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/tickets"
            element={
              <Ticket handleChange={handleChange} handleSubmit={handleSubmit} />
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
