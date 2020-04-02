import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {

  it('Renders a headline', async () => {
    const { getByText } = render(<App />)
    const headline = await waitFor(() => getByText('Turing Cafe Reservations'))
    expect(headline).toBeInTheDocument()
    const reservation = await waitFor(() => getByText('Leta'))
    expect(reservation).toBeInTheDocument()
  })
})
