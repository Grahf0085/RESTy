import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Restless from './Restless';

describe('Restless container', () => {
  it('container', async () => {
    render(<Restless />);

    // const { queryByPlaceholderText } = render(<Search />);
    const input = screen.getByPlaceholderText('Url');

    fireEvent.change(input, { target: { value: 
    `https://api.themoviedb.org/3/movie/550?api_key=
      7e8fcc3961c48e87b30d12499718d750`
    } });
    expect(input.value).toBe(`https://api.themoviedb.org/3/movie/550?api_key=
    7e8fcc3961c48e87b30d12499718d750`);

    // screen.getByText('Loading...');
    const ul = await screen.findByTestId('list');
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    }, 5000);

  });
});
