import styled, { css } from 'styled-components'

import { defaultTheme } from '@/config/theme'
import { mapToObject } from '@/styles/object'

const colorMap = mapToObject(
  defaultTheme.color,
  ([key]) =>
    [
      key,
      {
        complete: css`
          background-color: ${props => props.theme.color[key].bg};
          color: ${props => props.theme.color[key].fg};
        `,
        bg: css`
          background-color: ${props => props.theme.color[key].bg};
        `,
        fg: css`
          color: ${props => props.theme.color[key].fg};
        `,
      },
    ] as const
)
export default colorMap

export const Attention = styled.b`
  color: ${props => props.theme.color.secondary.bg};
`
