import {
  Dispatch,
  ReactElement,
  createContext,
  useEffect,
  useState,
} from 'react'

import { ApolloProvider } from '@apollo/client'
import { WithChildren } from '@/utils'
import { client } from '@/config/apollo'
import { useRouter } from 'next/dist/client/router'

export interface SessionContextType {
  client: typeof client
  login: string
  setLogin: Dispatch<string | ((prev: string) => string)>
}

export const SessionContext = createContext<SessionContextType>({
  client,
  login: '',
  setLogin: () => null,
})

interface Props {
  authenticated?: boolean
}

export function SessionProvider({
  authenticated,
  children,
}: Props & WithChildren): ReactElement {
  const router = useRouter()
  const [login, setLogin] = useState('')

  useEffect(() => {
    console.log({ authenticated, path: router.asPath, login })
    if (authenticated === true && !login) {
      const storageLogin = localStorage.getItem('login')
      if (!storageLogin) router.push('/login')
      else setLogin(storageLogin)
    }
  }, [authenticated, router, login])

  if (authenticated === true && !login) return <></>

  return (
    <ApolloProvider client={client}>
      <SessionContext.Provider
        value={{
          client,
          login,
          setLogin,
        }}
      >
        {children}
      </SessionContext.Provider>
    </ApolloProvider>
  )
}
