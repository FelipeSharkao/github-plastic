import 'styled-components'

export interface Color {
  fg: string
  bg: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      base: Color
      muted: Color
      primary: Color
      secondary: Color
    }
  }
}