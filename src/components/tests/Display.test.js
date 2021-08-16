import React from 'react'
import { render, screen } from '@testing-library/react'

import Display from '../Display'
import fetchShow from '../../api/fetchShow'
import userEvent from '@testing-library/user-event'


const testDisplay=  {
    name:'Fake Show',
    image:null,
    summary:'this is a fake summary',
    seasons: [
        {id: 1, name:'season 1', episodes: []},
        {id: 2, name:'season 2', episodes: []}
    ]

}


test('display component renders without any passed props', ()=>{
        render(<Display />)
})


test('components displays when fetch button is pressed', async ()=>{
    fetchShow.mockResolvedValueOnce({testDisplay})
    render(<Display/>)
    const button = screen.getByLabelText(/press to get show data/i)
    userEvent.click(button)
    const seasons = await screen.findAllByTestId('episodes-container')
    expect(seasons).toHaveLength(2)
    
    
})











///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.