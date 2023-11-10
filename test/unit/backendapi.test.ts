import { mockedAxios as axios } from '../mocks/axios';
import { postStartNewGame } from '../../src/backendapi';
import { gameOfLifeAPIJSON} from '../doubles/grid.double';

describe('We will test the backend api here', () => {
    it('When we ask for a new game with glider pattern, and a succesful response is returned ', async () => {
        
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
});
