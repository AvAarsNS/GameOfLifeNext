import { mockedAxios as axios } from '../mocks/axios';
import { postStartNewGame } from '../../src/backendapi';
import { gameOfLifeAPIJSON} from '../doubles/grid.double';

describe('This is the test suite for functionality that will enable the interaction with the Game of Life back-end', () => {
    it('When we ask for a new game with glider pattern, this will be returned', async () => {
        
        axios.post.mockResolvedValue({ data: gameOfLifeAPIJSON });

        const responseBody = await postStartNewGame();
        // TODO: use a double for this
        const requestUrl = "http://localhost:3000/newgame";
        // TODO: use a double for this
        const requestPayload = {
          width: 20,
          height: 20,
          pattern: "glider",
        };

        expect(axios.post).toHaveBeenCalledWith(requestUrl, requestPayload);
        expect(axios.post).toHaveBeenCalledTimes(1);
        // TODO: update naming to make it clear that it is a stub. Do not remove it. It is Hybrid!
        expect(responseBody).toEqual(gameOfLifeAPIJSON);
    });
});
