import Button from '@/components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { WithChildren } from '@/utils'
import colorMap from '@/styles/color'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { hover } from '@/styles'
import styled from 'styled-components'

export  const H_HEIGHT = 64
export const H_PADDING = 8

const Header = styled.header`
  ${hover}
  ${colorMap.primary.complete}
  font-size: ${(H_HEIGHT - H_PADDING * 2) * 0.5}px;
  height: ${H_HEIGHT}px;
  padding: ${H_PADDING}px;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: stretch;

  z-index: 1000;

  > * {
    flex: 0 0 auto;
  }
  > h1 {
    margin: 0;
    flex: 1 0 auto;
    font-size: ${(H_HEIGHT - H_PADDING * 2) * 0.75}px;
    text-align: center;
  }
`

interface Props {
  expanded?: boolean
  onToggle?: (value: boolean) => void
}

export default function HeaderLayout({
  children,
  expanded,
  onToggle,
}: Props & WithChildren): ReactElement {
  return (
    <>
      <Header>
        {expanded != null && (
          <Button
            toggle
            isActive={expanded}
            variant="base"
            onClick={() => onToggle?.(!expanded)}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
        <h1>GitHub Plastic</h1>
      </Header>
      {children}
    </>
  )
}
