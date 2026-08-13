import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProductActions from './ProductActions';

test('quantity starts at 0', () => {
  render(<ProductActions productId="123" price={2000} />);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('clicking + increments quantity', async () => {
  const user = userEvent.setup();
  render(<ProductActions productId="123" price={2000} />);

  await user.click(screen.getByText('+'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('clicking − does not go below 0', async () => {
  const user = userEvent.setup();
  render(<ProductActions productId="123" price={2000} />);

  await user.click(screen.getByText('−'));
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('add to cart button shows correct total', async () => {
  const user = userEvent.setup();
  render(<ProductActions productId="123" price={2000} />); // $20.00 each

  await user.click(screen.getByText('+'));
  await user.click(screen.getByText('+'));
  // qty is now 2, total should be $40.00
  expect(screen.getByText('Add to Cart — $40.00')).toBeInTheDocument();
});

test('clicking add to cart changes button text', async () => {
  const user = userEvent.setup();
  render(<ProductActions productId="123" price={2000} />);

  await user.click(screen.getByText('+')); // qty = 1
  await user.click(screen.getByText(/Add to Cart/));

  expect(screen.getByText('Added 1!')).toBeInTheDocument();
});