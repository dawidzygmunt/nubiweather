import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json', // Set default headers for all requests
  },
})

export default axiosInstance
