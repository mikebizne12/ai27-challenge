import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../../../../src/components/Loading/Loading';

test('should be render component', () => {
  render(<Loading open={true} />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
