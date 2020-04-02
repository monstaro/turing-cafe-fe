import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: null,
        date: null,
        time: null,
        number: null,
    }
  }
  updateState = (e) => {
    if (e.target.id === 'number') {
      this.setState({[e.target.id]: parseInt(e.target.value)})
    } else {
      this.setState({[e.target.id]: e.target.value})
    }
  }
  createReservation = () => {
    const { onSubmit } = this.props
    let newReso = this.state
    onSubmit(newReso)
  }
  render() {
    return (
      <section className="form">
        <input type="text"
         placeholder="Name" 
         id="name" 
         className="name-input" 
         onChange={this.updateState}
         ></input>
        <input type="date" 
        placeholder="date" 
        id="date"
        className="date-input"
        onChange={this.updateState}
        >  
        </input>
        <input type="text"
        id="time"
        placeholder="Time" 
        className="time-input"
        onChange={this.updateState}
        >
        </input>
        <input type="number"
        id="number"
        placeholder="Number of Guests" 
        className="guest-count-input"
        onChange={this.updateState}
        >
        </input>
        <button onClick={() => this.createReservation()}className="make-reservation-btn">
          Make Reservation
        </button>
      </section>
    )
  }
}

export default Form;