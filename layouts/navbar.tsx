import HeaderLayout, { H_HEIGHT } from './header'
import { ReactElement, useCallback, useContext, useState } from 'react'
import {
  faBars,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'

import Button from '@/components/button'
import { ClickablePanel } from '@/components/clickable-panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '@/components/icon'
import Link from 'next/link'
import { SessionContext } from '@/contexts/session'
import { WithChildren } from '@/utils'
import colorMap from '@/styles/color'
import { useRouter } from 'next/dist/client/router'

interface NavProps {
  expanded: boolean
}

const navAnimation = css<NavProps>`
  transition: transform 0.3s;
  transform: translateX(${props => (props.expanded ? '256px' : 0)});
`

const Nav = styled.nav<NavProps>`
  position: fixed;
  top: ${H_HEIGHT};
  left: -256px;
  width: 256px;
  height: 100vh;

  ${colorMap.primary.complete}
  ${navAnimation}

  ul {
    list-style: none;
    padding-left: 16px;

    li {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
`

const Content = styled.div<NavProps>`
  position: relative;
  height: 100%;
  width: 100%;

  ${navAnimation}
`

export default function NavbarLayout({ children }: WithChildren): ReactElement {
  const [expanded, setExpanded] = useState(false)

  const { setLogin } = useContext(SessionContext)
  const router = useRouter()

  return (
    <HeaderLayout expanded={expanded} onToggle={setExpanded}>
      <Nav expanded={expanded}>
        <ul>
          <li>
            <Link href="/">
              <a>
                <Icon icon={faHome} />
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/user">
              <a>
                <Icon icon={faUser} />
                Meu Perfil
              </a>
            </Link>
          </li>
          <li>
            <a
              onClick={() => {
                setLogin('')
                localStorage.clear()
                router.push('/login')
              }}
            >
              <Icon icon={faSignOutAlt} />
              Sair
            </a>
          </li>
        </ul>
      </Nav>
      <Content expanded={expanded}>
        {expanded && <ClickablePanel onClick={() => setExpanded(false)} />}
        <div>{children}</div>
      </Content>
    </HeaderLayout>
  )
}
