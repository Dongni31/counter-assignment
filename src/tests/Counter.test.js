// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zero = Number(screen.getByTestId("count").textContent);
  expect(zero).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  let countVal;
  const plusButton = screen.getByRole("button", {name: "+"});
  fireEvent.click(plusButton)

  countVal = Number(screen.getByTestId("count").textContent);
  expect(countVal).toEqual(1);
  expect(countVal).toBeGreaterThan(0);
  expect(countVal).toBeLessThan(2);

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  let countVal;
  const minusButton = screen.getByRole("button", {name: "-"});
  fireEvent.click(minusButton)

  countVal = Number(screen.getByTestId("count").textContent);
  expect(countVal).toEqual(-1);
  expect(countVal).toBeGreaterThan(-2);
  expect(countVal).toBeLessThan(0);

});
