import React from 'react'
import './Reservation.css'


const Reservation = ({name, date, time, guests, id}) => {
  return (
    <div className="reso-card">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time}</p>
  <p>Number of Guests: {guests}</p>
    </div>
  )
}

export default Reservation