import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders Home Page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Finance Manager/i);
  expect(linkElement).toBeInTheDocument();
});
