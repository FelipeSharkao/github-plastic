import { css } from 'styled-components'

export const hover = css`
  box-shadow: 0 6px 3px rgba(0, 0, 0, 20%);
  border-bottom: 2px solid ${props => props.theme.color.base.fg};
`
