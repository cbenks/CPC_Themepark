const Ticket = (props) => {
  return (
    <div className="form">
      <h1>Purchase Ticket</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="name" id="name" onChange={props.handleChange} />
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="email" id="email" onChange={props.handleChange}/>
           <label htmlFor="cardNumber">Card Number: </label>
        <input type="text" placeholder="card number" id="cardNumber" onChange={props.handleChange} />
           <label htmlFor="CVV">CVV: </label>
        <input type="text" placeholder="cvv" id="CVV" onChange={props.handleChange} />
           <label htmlFor="zipcode">Zipcode: </label>
        <input type="text" placeholder="zipcode" id="Zipcode" onChange={props.handleChange} />
        <label htmlFor="age">Ticket Type: </label>
        <select name="ticketType" id="ticketType" onChange={props.handleChange}>
          <optgroup label="Choose Ticket Type">
            <option value="selectType">Please select your ticket</option>
            <option value="Senior">Senior</option>
            <option value="Adult">Adult</option>
            <option value="Child">Child</option>
          </optgroup>
        </select>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Ticket