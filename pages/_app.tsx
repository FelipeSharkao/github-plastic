import { AnyObject, ComponentWithLayout } from '@/utils'
import { Fragment, ReactElement } from 'react'

import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals'
import { SessionProvider } from '@/contexts/session'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/config/theme'

interface AppPropsWithLayout extends AppProps {
  Component: ComponentWithLayout<AnyObject>
}

function App({ Component, pageProps }: AppPropsWithLayout): ReactElement {
  const Layout =
    'Layout' in Component && Component.Layout ? Component.Layout : Fragment

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Layout>
        <SessionProvider authenticated={Component.authenticated}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </ThemeProvider>
  )
}
export default App
