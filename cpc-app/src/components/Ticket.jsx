const Ticket = (props) => {
  return (
    <div className="form">
      <h1>Purchase Ticket</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="name" id="name"  onChange={props.handleChange} />
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="email" id="email" onChange={props.handleChange}/>
        <label htmlFor="age">Ticket Type: </label>
        <select name="ticketType" id="ticketType" onChange={props.handleChange}>
          <optgroup label="Choose Ticket Type">
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