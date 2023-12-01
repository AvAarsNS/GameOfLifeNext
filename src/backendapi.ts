import axios from 'axios';

export function onGameStart(selectedPattern: string) {
    postStartNewGame()
}

export function postStartNewGame() {
    return axios.post('http://localhost:3000/newgame', {
        "width": 20,
        "height": 20,
        "pattern": "glider"
    })
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
}