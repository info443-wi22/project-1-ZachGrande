import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import QuizContent from './QuizContent';
import {MemoryRouter} from 'react-router-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import QuizPage from './QuizPage';
import userEvent from '@testing-library/user-event';

//// might try something later
const questionChoices = [/micromanager/i, /Straight A/i];

describe('quiz pre-processing', () => {

// testing full app rendering
test('full app rendering/navigating', () => {
  render(<App />, {wrapper: MemoryRouter});

  // verify page content for expected route
  expect(screen.getByText(/Mission Statement/i)).toBeInTheDocument()
})

test('quiz prompt appearing on take quiz button', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');

  userEvent.click(buttonRetake);
  expect(screen.getByText(/Which Type of Imposter Syndrome Do You Have/i)).toBeInTheDocument()
})

});

describe('all quiz questions appear', () =>  {

test('question 1 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');

  userEvent.click(buttonRetake);
  expect(screen.getByText(/You have been accused of being a micromanager/i)).toBeInTheDocument()
})

// need more efficient way to test questions after q1
test('question 2 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);
  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);
  
  expect(screen.getByText(/You get stressed when you’re not working and find downtime wasteful/i)).toBeInTheDocument()
})

test('question 3 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);

  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/Straight A/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);
  
  expect(screen.getByText(/sacrificed your hobbies and passions for work/i)).toBeInTheDocument()
})

// it's so repetitive but this is just for elaboration of concept - will adjust later
test('question 4 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);

  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/Straight A/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);

  const answerButtonQ3 = screen.getByText(/sacrificed/i);
  userEvent.click(answerButtonQ3);

  const nextButton3 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton3);
  
  expect(screen.getByText(/an expert/i)).toBeInTheDocument()
})

test('question 5 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);

  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/Straight A/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);

  const answerButtonQ3 = screen.getByText(/sacrificed/i);
  userEvent.click(answerButtonQ3);

  const nextButton3 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton3);

  const answerButtonQ4 = screen.getByText(/an expert/i);
  userEvent.click(answerButtonQ4);

  const nextButton4 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton4);
  
  expect(screen.getByText(/pressed/i)).toBeInTheDocument()
})

test('question 6 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  // answer must be checked before next button is available
  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);

  // booping next button
  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/Straight A/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);

  const answerButtonQ3 = screen.getByText(/sacrificed/i);
  userEvent.click(answerButtonQ3);
  
  const nextButton3 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton3);

  const answerButtonQ4 = screen.getByText(/an expert/i);
  userEvent.click(answerButtonQ4);

  const nextButton4 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton4);

  const answerButtonQ5 = screen.getByText(/pressed/i);
  userEvent.click(answerButtonQ5);
  
  const nextButton5 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton5);
  
  expect(screen.getByText(/focus/i)).toBeInTheDocument()
})


test('question 7 appearing', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);

  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/Straight A/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);

  const answerButtonQ3 = screen.getByText(/sacrificed/i);
  userEvent.click(answerButtonQ3);
  
  const nextButton3 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton3);

  const answerButtonQ4 = screen.getByText(/an expert/i);
  userEvent.click(answerButtonQ4);

  const nextButton4 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton4);

  const answerButtonQ5 = screen.getByText(/pressed/i);
  userEvent.click(answerButtonQ5);
  
  const nextButton5 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton5);

  const answerButtonQ6 = screen.getByText(/focus/i);
  userEvent.click(answerButtonQ6);
  
  const nextButton6 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton6);
  
  expect(screen.getByText(/Perfectionist/i)).toBeInTheDocument()
})

});

describe('quiz post-processing', () => {

test('completed quiz - done test page', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/micromanager/i);
  userEvent.click(answerButtonQ1);

  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/Straight A/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);

  const answerButtonQ3 = screen.getByText(/sacrificed/i);
  userEvent.click(answerButtonQ3);
  
  const nextButton3 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton3);

  const answerButtonQ4 = screen.getByText(/an expert/i);
  userEvent.click(answerButtonQ4);

  const nextButton4 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton4);

  const answerButtonQ5 = screen.getByText(/pressed/i);
  userEvent.click(answerButtonQ5);
  
  const nextButton5 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton5);

  const answerButtonQ6 = screen.getByText(/focus/i);
  userEvent.click(answerButtonQ6);
  
  const nextButton6 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton6);

  const answerButtonQ7 = screen.getByText(/Perfectionist/i);
  userEvent.click(answerButtonQ7);
  
  const nextButton7 = screen.getByText('Complete').closest('input');
  userEvent.click(nextButton7);
  
  expect(screen.getByText(/Thank you/i)).toBeInTheDocument()
})

test('completed quiz - quiz state resets', async () => {
  render(<App />, {wrapper: MemoryRouter});
  const buttonRetake = screen.getByTestId('take-quiz-btn');
  userEvent.click(buttonRetake);

  const answerButtonQ1 = screen.getByText(/accomplish/i);
  userEvent.click(answerButtonQ1);

  const nextButton = screen.getByText('Next').closest('input');
  userEvent.click(nextButton);

  const answerButtonQ2 = screen.getByText(/None/i);
  userEvent.click(answerButtonQ2);
  
  const nextButton2 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton2);

  const answerButtonQ3 = screen.getByText(/sacrificed/i);
  userEvent.click(answerButtonQ3);
  
  const nextButton3 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton3);

  const answerButtonQ4 = screen.getByText(/an expert/i);
  userEvent.click(answerButtonQ4);

  const nextButton4 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton4);

  const answerButtonQ5 = screen.getByText(/pressed/i);
  userEvent.click(answerButtonQ5);
  
  const nextButton5 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton5);

  const answerButtonQ6 = screen.getByText(/focus/i);
  userEvent.click(answerButtonQ6);
  
  const nextButton6 = screen.getByText('Next').closest('input');
  userEvent.click(nextButton6);

  const answerButtonQ7 = screen.getByText(/Perfectionist/i);
  userEvent.click(answerButtonQ7);
  
  const nextButton7 = screen.getByText('Complete').closest('input');
  userEvent.click(nextButton7);

  const resetButton = screen.getByTestId('retake');
  userEvent.click(resetButton);
  
  expect(screen.getByText(/Retake quiz/i)).not.toBeInTheDocument();
})

});
