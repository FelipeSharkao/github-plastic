import styled, { DefaultTheme, ThemedStyledProps, css } from 'styled-components'

interface Props {
  variant?: keyof DefaultTheme['color']
  toggle?: boolean
  isActive?: boolean
}

function getColor(props: ThemedStyledProps<Props, DefaultTheme>) {
  return props.theme.color[props.variant || 'primary']
}

const pressed = css`
  border-bottom-width: 2px;
  transform: translateY(4px);
`

function toggleOrClick(props: Props) {
  if (props.toggle) {
    if (props.isActive) return pressed
  } else {
    return css`
      &:active {
        ${pressed}
      }
    `
  }
}

const Button = styled.button<Props>`
  font-size: inherit;

  background-color: ${props => getColor(props).bg};
  color: ${props => getColor(props).fg};
  border: 2px solid ${props => props.theme.color.base.fg};

  border-radius: 8px;
  padding: 8px 16px;
  border-bottom-width: 6px;
  margin-bottom: 4px;

  font-size: 16px;

  ${toggleOrClick}
`
export default Button
