import React from 'react';
import { screen } from '@testing-library/react';
import Logo from '../../../../src/components/Logo/Logo';
import { customRender } from '../../../../src/utils/common/TestUtils';

test('should be render component', () => {
  customRender(<Logo />, { withRedux: false, mockInitialState: {} });
  expect(screen.getByRole('img')).toBeInTheDocument();
});
