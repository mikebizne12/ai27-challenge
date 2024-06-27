import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../../../src/pages/notFound/NotFound';
import { customRender } from '../../../src/utils/common/TestUtils';

test('should be render component', () => {
  customRender(<NotFound />, { withRedux: false, mockInitialState: {} });
  expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
});
