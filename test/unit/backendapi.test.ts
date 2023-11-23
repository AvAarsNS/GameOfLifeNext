import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { mockedAxios as axios } from '../mocks/axios';
import { postStartNewGame } from '../../src/backendapi';
import { fourByFourGridJSON, gameOfLifeAPIJSON } from '../doubles/grid.double';
import GameContainer from '../../src/app/components/gamecontainer'; // Adjust this import according to your file structure
describe('This is the test suite for functionality that will enable the interaction with the Game of Life back-end', () => {
    // Existing test case
    it('When we ask for a new game with glider pattern, this will be returned', async () => {
        axios.post.mockResolvedValue({ data: gameOfLifeAPIJSON });

        const responseBody = await postStartNewGame();
        const requestUrl = "http://localhost:3000/newgame";
        const requestPayload = {
          width: 20,
          height: 20,
          pattern: "glider",
        };

        expect(axios.post).toHaveBeenCalledWith(requestUrl, requestPayload);
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(responseBody).toEqual(gameOfLifeAPIJSON);
    });

    // New test case for state management
    it('GameContainer fetches game data and updates state correctly', async () => {
        // Parse the stringified JSON mock response
        const parsedResponse = JSON.parse(fourByFourGridJSON);

        // Mock the axios post call
        axios.post.mockResolvedValue({ data: parsedResponse });

        // Render the GameContainer component
        const { getByTestId } = render(<GameContainer />);

        // Use waitFor to handle asynchronous state updates
        await waitFor(() => {
            // Loop through each cell in the grid
            parsedResponse.universe.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    const cellTestId = `cell-${rowIndex}-${colIndex}`;
                    const expectedClass = cell ? 'bg-black' : 'bg-gray-100';
                    const renderedCell = getByTestId(cellTestId);
                    expect(renderedCell).toHaveClass(expectedClass);
                });
            });
        });
    });
});
