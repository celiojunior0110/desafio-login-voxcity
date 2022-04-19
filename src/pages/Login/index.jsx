import { useContext } from 'react'
import * as Styled from './styles'

import { Input } from '../../components/Input'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../../Auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { goDashboard } from '../../routes/Coordinator'
import { Header } from '../../components/Header'

export const Login = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const { form, onChange } = useForm({ email: '', password: '' })

  const sendForm = async e => {
    e.preventDefault()

    if (form.email && form.password) {
      const isLogged = await auth.login(form.email, form.password)
      if (isLogged) {
        goDashboard(navigate)
      } else {
        alert('Não foi possível fazer o login')
      }
    }
  }

  return (
    <Styled.Login className='bg-light'>
      <Header />
      <Styled.Form className='bg-secondary' onSubmit={sendForm}>
        <Styled.Title>Entrar</Styled.Title>
        <Input
          className='form-control mb-3'
          type='email'
          placeholder='Digite seu email'
          name='email'
          value={form.email}
          onChange={onChange}
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'}
          title='Exemplo: foo@foo.com'
          required
        />
        <Input
          className='form-control mb-3'
          type='password'
          placeholder='Digite sua senha'
          name='password'
          value={form.password}
          onChange={onChange}
          pattern={'.{6,}'}
          title='Mínimo: 6 caracteres'
          required
        />
        <Styled.Button className='btn btn-light'>Fazer Login</Styled.Button>
      </Styled.Form>
    </Styled.Login>
  )
}
