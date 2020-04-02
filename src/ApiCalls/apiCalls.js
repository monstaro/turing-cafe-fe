
export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
}

export const postReservation = (res) => {
  console.log(res)
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type':'application.json'
    },
    body: JSON.stringify(res)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err.message))
}