import axios from 'axios';

async function eventsData() {
    return axios.get('/tickets_data.json')
                .then(response => response)
                .catch(error => console.error(error));
};

export {eventsData};