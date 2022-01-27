import { render, screen } from '@testing-library/react';
import App from './App';
import QuizContent from './QuizContent';

// Pulls screen text and asserts if its in the document
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Adding test case 1", () => {

  const sum = 1 + 1;

  expect(sum).toEqual(2);

})
