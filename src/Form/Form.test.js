import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';



describe('Form', () => {

  it('Can submit', () => {
    const { getByText, getByPlaceholderText } = render(<Form />)
    fireEvent.change(getByPlaceholderText('Name'), {
      target: {value: 'mockUser'}
    })
    expect(getByPlaceholderText('Name').value).toBe('mockUser')
    fireEvent.change(getByPlaceholderText('Time'), {
      target: {value: '5:55'}
    })
    expect(getByPlaceholderText('Time').value).toBe('5:55')
    fireEvent.change(getByPlaceholderText('Number of Guests'), {
      target: {value: 6}
    })
    expect(getByPlaceholderText('Number of Guests').value).toBe('6')
    // expect(getByText('mockUser')).toBeInTheDocument()
    // fireEvent.click(getByText('Make Reservation'))

    // const headline = await waitFor(() => getByText('Turing Cafe Reservations'))
    // expect(headline).toBeInTheDocument()
    // const reservation = await waitFor(() => getByText('Leta'))
    // expect(reservation).toBeInTheDocument()
  })
})
