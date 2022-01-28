import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import QuizContent from './QuizContent';
import {MemoryRouter} from 'react-router-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// testing full app rendering
test('full app rendering/navigating', () => {
  render(<App />, {wrapper: MemoryRouter})

  // verify page content for expected route
  expect(screen.getByText(/Mission Statement/i)).toBeInTheDocument()
})

// Pulls screen text and asserts if its in the document
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Adding test case 1", () => {

//   const sum = 1 + 1;

//   expect(sum).toEqual(2);

// })
