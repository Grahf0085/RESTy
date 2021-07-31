import React from 'react';
import { render } from '@testing-library/react';
import PreArea from './PreArea';

describe('PreArea component', () => {
  it('renders pre area', () => {
    const { asFragment } = render(
      <PreArea
        body="name: none"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
