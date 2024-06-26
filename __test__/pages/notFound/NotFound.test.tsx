import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../../src/pages/notFound/NotFound';

test('should be render component', () => {
  render(<NotFound />);
  expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
});
