import axios from 'axios';

const userRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default userRequest;
