import React from 'react';
import Reservation from '../Reservation/Reservation'
import './ReservationsContainer.css'

const ReservationsContainer = ({resos}) => {
if (resos) {
  return <div className='reservations'>
    {resos.map(reso => {
      return (
        <Reservation
          name={reso.name}
          date={reso.date}
          time={reso.time}
          guests={reso.number}
          id={reso.id}
         />
      )
    })}
  </div>
} else {
return (
  'Loading'
)}
}

export default ReservationsContainer