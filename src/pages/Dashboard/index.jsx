import * as Styled from './styles'

import { useProtectedPage } from '../../hooks/useProtectedPage'
import { Header } from '../../components/Header'

export const Dashboard = () => {
  useProtectedPage()
  const token = localStorage.getItem('token')

  return (
    <Styled.Dashboard className='bg-light'>
      <Header />
      <Styled.Token>Token de acesso: {token}</Styled.Token>
    </Styled.Dashboard>
  )
}
