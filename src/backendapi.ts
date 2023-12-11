import axios from 'axios';

export async function postStartNewGame(pattern: string) {
    const response = await axios.post('http://localhost:8088/start', {
        "width": 20,
        "height": 20,
        "pattern": pattern
    });

    return response.data;
}
