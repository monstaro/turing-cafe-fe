import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../ApiCalls/apiCalls'
import  Form from '../Form/Form'
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: null
    }
  }
componentDidMount = () => {
    fetchReservations()
    .then(reservations => this.setState({reservations}))
  }
addNewReservation = (newReservation) => {
  this.setState({reservations: [...this.state.reservations, newReservation]})
}
  render() {
    if (this.state.reservations) {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
          <Form onSubmit={this.addNewReservation}/>
          </div>
          <div className='resy-container'>
            <ReservationsContainer resos={this.state.reservations}/>
          </div>
        </div>
      )
    } else {
      return (
        'Loading...'
      )
    }
    
  }
}

export default App;
