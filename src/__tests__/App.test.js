import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';

import App from '../app/components/App.jsx';

test('should render the preact app', () => {
  const testText = 'ps: open your browser console to see the props passed in';
  const { getByText } = render(<App />);
  expect(getByText(testText)).toBeInTheDocument();
});
