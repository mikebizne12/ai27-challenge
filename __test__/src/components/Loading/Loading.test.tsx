import React from 'react';
import { screen } from '@testing-library/react';
import Loading from '../../../../src/components/Loading/Loading';
import { customRender } from '../../../../src/utils/common/TestUtils';

test('should be render component', () => {
  customRender(<Loading open={true} />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
