import { render, fireEvent, screen } from '@testing-library/react';
import ReserveForm from './components/Reserve/ReserveForm';

describe('ReserveForm Component', () => {
  test('renders ReserveForm component', () => {
    render(<ReserveForm />);
    // You can add more specific assertions based on your component structure
    expect(screen.getByPlaceholderText('Name (required)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmation Email (required)')).toBeInTheDocument();
  });

  test('disables the "Book" button when form fields are not filled', () => {
    render(<ReserveForm />);

    const bookButton = screen.getByText('Book');

    // Initially, the button should be disabled
    expect(bookButton).toBeDisabled();

    // Filling in the form should enable the button
    fireEvent.change(screen.getByPlaceholderText('Name (required)'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Confirmation Email (required)'), { target: { value: 'john@example.com' } });

    // Other form fields are not filled, so the button should still be disabled
    expect(bookButton).toBeDisabled();

    // Fill in other required fields
    fireEvent.click(screen.getByText('2')); // Selecting an option from the dropdown

    // Now, the button should be enabled
    expect(bookButton).not.toBeDisabled();
  });
});
