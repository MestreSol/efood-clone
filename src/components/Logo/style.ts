import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    width: 125px;
    height: 57px;
  }
`
export const LogoContainerLink = styled(Link)`
  margin: 0 auto;
  text-decoration: none;

  img {
    width: 125px;
    height: 57px;
  }
`
