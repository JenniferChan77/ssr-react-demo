import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCore from './ProductCore';

const mockProduct = {
  title: 'Classic Denim Jacket',
  image: 'https://example.com/jacket.jpg',
  price: 8999, // cents
  description: 'A timeless denim jacket for everyday wear.',
};

test('renders product title', () => {
  render(<ProductCore product={mockProduct} />);
  expect(screen.getByText('Classic Denim Jacket')).toBeInTheDocument();
});

test('renders formatted price', () => {
  render(<ProductCore product={mockProduct} />);
  expect(screen.getByText('$89.99')).toBeInTheDocument();
});

test('renders product image with correct alt text', () => {
  render(<ProductCore product={mockProduct} />);
  const image = screen.getByAltText('Classic Denim Jacket');
  expect(image).toHaveAttribute('src', 'https://example.com/jacket.jpg');
});

test('renders product description', () => {
  render(<ProductCore product={mockProduct} />);
  expect(screen.getByText('A timeless denim jacket for everyday wear.')).toBeInTheDocument();
});