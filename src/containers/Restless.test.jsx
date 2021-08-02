/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Restless from './Restless';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Restless container', () => {
  it('container', async () => {
    render(<MemoryRouter><Restless /></MemoryRouter>);

    const urlInput =  await screen.findByPlaceholderText('URL');
    fireEvent.change(urlInput, { target: { value: 
    'https://api.themoviedb.org/3/movie/550?api_key=7e8fcc3961c48e87b30d12499718d750'
    } });
    expect(urlInput.value).toBe('https://api.themoviedb.org/3/movie/550?api_key=7e8fcc3961c48e87b30d12499718d750');

    const methodInput = await screen.findByLabelText('GET');
    userEvent.click(methodInput);
    fireEvent.change(methodInput, { target: { value: 'GET'
    } });
    expect(methodInput).toBeChecked('GET');

    const section = await screen.findByTestId('side');
    expect(section).toBeEmptyDOMElement();
  });
});
