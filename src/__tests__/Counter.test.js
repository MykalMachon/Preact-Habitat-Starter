import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import Counter from '../app/components/Counter.jsx';

test('Test button functionality', () => {
  const { getByText } = render(<Counter />);
  // Check render
  expect(document.querySelector('button#increment'));
  expect(document.querySelector('buton#reset'));
  // Increment the button
  fireEvent.click(document.querySelector('button#increment'));
  expect(getByText('You clicked me 1 times')).toBeInTheDocument();
  // Reset the button
  fireEvent.click(document.querySelector('button#reset'));
  expect(getByText('You clicked me 0 times')).toBeInTheDocument();
});
