import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';



describe('Reservation Card', () => {
  
  it('Can submit', async () => {
    const { getByText } = render(<Reservation 
      name="Leta"
      date="05/25"
    />)
    await waitFor(() => getByText('Leta'))
      expect(getByText('Leta')).toBeInTheDocument()
    await waitFor(() => getByText('05/25'))
    expect(getByText('05/25')).toBeInTheDocument()
  })
})
