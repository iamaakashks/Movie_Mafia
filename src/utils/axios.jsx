import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRjNjE0NGVlODE0MTQ0MmFjZjUyNGNjNzlmMjU1NiIsIm5iZiI6MTcyODE5NjM0Ni41NzQ1MzUsInN1YiI6IjY3MDE3MGEwZjg3OGFkZmVkMDg1NmIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a7N8OR6W_CtelEyz9bpqnAdKis3WxGCQDPu_B0Sfhpg'
    },
});
export default instance;