import axios from 'axios';

async function eventBookingData(data) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return axios.post('https://jsonplaceholder.typicode.com/posts', data, {headers})
                .then(response => response)
                .catch(error => console.error(error));
};

export {eventBookingData};

