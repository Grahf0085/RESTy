import React from 'react';
import { render } from '@testing-library/react';
import InputArea from './InputArea';

describe('InputArea component', () => {
  it('renders inputArea', () => {
    const { asFragment } = render(
      <InputArea
        url="aintitcool.com" 
        method="put" 
        putBody="name: dexter" 
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
