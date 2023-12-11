import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTM2MGQxMGQyYWJhZDYxZjA1ZjQ2OGI2ZDk0M2RhOSIsInN1YiI6IjY1MDQ2ODk0ZDdkY2QyMDEzOWNjZTk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4cWCnBGroXGJR0OSLLrXzscjCNeD3OS4JbLYTUny1LA`
    }
})

export default api