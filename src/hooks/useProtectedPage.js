import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { goLogin } from '../routes/Coordinator'

export const useProtectedPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token === null || token === '') {
      goLogin(navigate)
    }
  }, [])
}
