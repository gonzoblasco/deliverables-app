import axios from 'axios'

const API_BASE_URL = 'https://marketplace.d1.ey.com/api/use/deliverables/v1'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': 'Bearer <token>',
    'Content-Type': 'application/json',
  },
})

export const getDeliverables = () => {
  return api.get('/deliverables')
}

export const getDeliverableById = (id) => {
  return api.get(`/deliverables/${id}`)
}

export const updateDeliverable = (id, data) => {
  return api.post(`/deliverables/${id}`, data)
}

export default api