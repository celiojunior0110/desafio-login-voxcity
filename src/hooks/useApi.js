import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export const useApi = () => ({
  validadeToken: async token => {
    // Fake
    return {
      user: { id: 1, name: 'Warmachine', email: 'warmachine@gmail.com' },
    }
    // Real
    const res = await API.post('/validate', { token })
    return res.data
  },
  login: async (email, password) => {
    // Fake
    return {
      user: { id: 1, name: 'Warmachine', email: 'warmachine@gmail.com' },
      token: Math.random(),
    }
    // Real
    const res = await API.post('/login', { email, password })
    return res.data
  },
  logout: async () => {
    // Fake
    return { status: true }
    // Real
    const res = await API.post('/logout')
    return res.data
  },
})
