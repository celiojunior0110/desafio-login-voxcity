import * as Styled from './styles'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthContext'
import { goLogin } from '../../routes/Coordinator'

export const Header = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = async () => {
    await auth.singout()
    goLogin(navigate)
  }

  return (
    <Styled.Header>
      <Styled.Title>Desafio React - Login</Styled.Title>
      {auth.user && (
        <button className='btn btn-danger btn-lg' onClick={logout}>
          Encerrar a sessão
        </button>
      )}
    </Styled.Header>
  )
}
