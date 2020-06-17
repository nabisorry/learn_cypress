import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/2GNCwU49pmiNCHNA3b79bcKdGcFayUya',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
