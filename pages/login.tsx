import { ComponentWithLayout, EmptyObject } from '@/utils'
import { memo, useCallback, useContext, useState } from 'react'

import { Attention } from '@/styles/color'
import Button from '@/components/button'
import FormField from '@/components/form-field'
import { SessionContext } from '@/contexts/session'
import UnauthenticatedLayout from '@/layouts/unathenticaded'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

const Login: ComponentWithLayout<EmptyObject> = memo(() => {
  const [login, _setLogin] = useState(undefined as string | undefined)
  const [password, setPassword] = useState(undefined as string | undefined)
  const [error, setError] = useState(undefined as string | undefined)

  const { setLogin } = useContext(SessionContext)
  const router = useRouter()

  const send = useCallback(() => {
    if (login)
      axios
        .get(process.env.NEXT_PUBLIC_USER_CHECK_API + login)
        .then(() =>
          axios.post('/api/login', { login, password }).then(({ data }) => {
            if (data.ok && data.login) {
              setLogin(data.login)
              localStorage.setItem('login', data.login)
              router.push('/')
            } else {
              setError('Erro desconhecido.')
            }
          })
        )
        .catch(err => {
          switch (err.response.status) {
            case 400:
              setError('Senha incorreta.')
              break
            case 404:
              setError('Usuário não encontrado.')
              break
            case 500:
              setError('Ocorreu um erro, tente novamente mais tarde.')
              break
          }
        })
  }, [login, password, router, setLogin])

  return (
    <>
      <FormField
        type="username"
        label="Nome de usuário"
        value={login}
        onChange={({ target }) => _setLogin(target.value)}
      />
      <FormField
        type="password"
        label="Senha"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      {error && (
        <div>
          <Attention>{error}</Attention>
        </div>
      )}
      <Button disabled={!login || !password} onClick={send}>
        Entrar
      </Button>
    </>
  )
})
Login.Layout = UnauthenticatedLayout
Login.displayName = 'Login'

export default Login
