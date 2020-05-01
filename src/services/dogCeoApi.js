import axios from 'axios';

function getRandomDog() {
    return axios
        .get('https://dog.ceo/api/breeds/image/random')
        .catch(error => console.log(error));
}

export default {
    getRandomDog
}
