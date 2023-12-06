import axios from 'axios';

export function onGameStart(selectedPattern: string) {
    return postStartNewGame(selectedPattern);
}

export function postStartNewGame(pattern: string) {
    return axios.post('http://localhost:8088/start', {
        "width": 20,
        "height": 20,
        "pattern": pattern
    })
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
}
