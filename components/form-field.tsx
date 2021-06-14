import { InputHTMLAttributes, ReactElement } from 'react'

import colorMap from '@/styles/color'
import { hover } from '@/styles'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Label = styled.label`
  ${colorMap.muted.fg}

  font-size: 16px;
`

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  border: none;

  padding: 8px;
  border-radius: 8px;
  margin-bottom: 16px;

  ${colorMap.base.complete}
  ${hover}
`

export default function FormField({ label, ...props }: Props): ReactElement {
  return (
    <div>
      <Label>
        {label}
        <div>
          <Input {...props} />
        </div>
      </Label>
    </div>
  )
}
