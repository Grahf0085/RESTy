import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders ul', () => {
    const { asFragment } = render(
      <Sidebar />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
