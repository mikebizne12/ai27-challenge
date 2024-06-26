import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../../../../src/components/Logo/Logo';

test('should be render component', () => {
  render(<Logo />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
