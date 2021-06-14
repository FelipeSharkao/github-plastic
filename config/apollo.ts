import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const link = setContext((_, context) => {
  const token = process.env.NEXT_PUBLIC_TOKEN
  return {
    headers: {
      ...context.headers,
      authorization: token ? `bearer ${token}` : '',
    },
  }
}).concat(
  createHttpLink({
    uri: process.env.NEXT_PUBLIC_API,
  })
)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
})
