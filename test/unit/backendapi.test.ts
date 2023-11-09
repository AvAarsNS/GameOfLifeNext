import { mockedAxios as axios } from '../mocks/axios';
import { postStartNewGame } from '../../src/backendapi';
import { gameOfLifeAPIJSON} from '../doubles/grid.double';

describe('We will test the backend api here', () => {
    it('When we ask for a new game with glider pattern, and a succesful response is returned ', async () => {
        
        axios.post.mockResolvedValue({});

        const responseBody = await postStartNewGame();

        const requestBody = {
            "width" : 20,
            "height" : 20,
            "pattern" : "glider"
          }

        const request = new Request('http://localhost:3000/newgame', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        expect(axios.post).toHaveBeenCalledWith(request);
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(responseBody).toEqual({gameOfLifeAPIJSON});
    });
});
