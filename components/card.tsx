import colorMap from '@/styles/color';
import { hover } from '@/styles';
import styled from 'styled-components';

const Card = styled.div`
  ${colorMap.base.complete}
  ${hover}

  padding: 16px;
  margin-bottom: 32px;
  
  > h1 {
    ${colorMap.primary.complete}
    margin: -16px -16px 16px -16px;
    padding: 16px;
  }
`
Card.displayName = 'Card'

export default Card