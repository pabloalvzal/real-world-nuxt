import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(): Promise<any> {
    return apiClient.get('/events')
  },
  getEvent(id: string): Promise<any> {
    return apiClient.get('/events/' + id)
  }
}