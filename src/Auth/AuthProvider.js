import { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const api = useApi()

  useEffect(() => {
    const validadeToken = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        const data = await api.validadeToken(token)
        if (data.user) {
          setUser(data.user)
        }
      }
    }
    validadeToken()
  }, [])

  const login = async (email, password) => {
    const data = await api.login(email, password)
    if (data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true
    }
    return false
  }

  const singout = async () => {
    await api.logout()
    setUser(null)
    setToken('')
  }

  const setToken = token => {
    localStorage.setItem('token', token)
  }

  return (
    <AuthContext.Provider value={{ user, login, singout }}>
      {children}
    </AuthContext.Provider>
  )
}
