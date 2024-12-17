import styled, { css } from 'styled-components'
import theme from '../../globals/theme'
import { Link } from 'react-router-dom'

type Props = {
  $displayMode?: 'fullWidth' | 'inlineBlock'
  $themeMode?: 'primary' | 'second'
}

const baseStyleButton = css<Props>`
  width: ${(props) => (props.$displayMode === 'fullWidth' ? '100%' : 'auto')};
  display: ${(props) =>
    props.$displayMode === 'fullWidth' ? 'block' : 'inline-block'};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${(props) =>
    props.$themeMode === 'primary' ? theme.Colors.text : theme.Colors.primary};
  color: ${(props) =>
    props.$themeMode === 'primary'
      ? theme.Colors.background
      : theme.Colors.text};
  border: none;
`

export const ButtonContainer = styled.button<Props>`
  ${baseStyleButton}
  cursor: pointer;
`

export const ButtonContainerLink = styled(Link)<Props>`
  ${baseStyleButton}
  text-decoration: none;
`