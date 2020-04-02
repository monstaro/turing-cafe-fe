import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {

  it('Renders a headline and reso', async () => {
    const { getByText } = render(<App />)
    const headline = await waitFor(() => getByText('Turing Cafe Reservations'))
    expect(headline).toBeInTheDocument()
    const reservation = await waitFor(() => getByText('Leta'))
    expect(reservation).toBeInTheDocument()
  })

  it('should be able to post a new reservation', async () => {
    const { getByText, getByPlaceholderText } = render(<App/>)
    await waitFor(() => getByPlaceholderText('Name'))
    await waitFor(() => getByPlaceholderText('Number of Guests'))
    await waitFor(() => getByPlaceholderText('Time'))
    await waitFor(() => getByPlaceholderText('date'))
    fireEvent.change(getByPlaceholderText('Name'), {
      target: {value: 'mockUser'}
    })
    fireEvent.change(getByPlaceholderText('Time'), {
      target: {value: '5:55'}
    })
    fireEvent.change(getByPlaceholderText('date'), {
      target: {value: '05/05/2020'}
    })
    fireEvent.change(getByPlaceholderText('Number of Guests'), {
      target: {value: '7'}
    })
    fireEvent.click(getByText('Make Reservation'))
    expect(getByText('mockUser')).toBeInTheDocument()
  })
})
