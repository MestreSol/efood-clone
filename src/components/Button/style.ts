import styled, { css } from 'styled-components'
import theme from '../../globals/theme'
import { Link } from 'react-router-dom'

// Definição dos tipos de propriedades aceitas pelo componente
type Props = {
  $displayMode?: 'fullWidth' | 'inlineBlock'
  $themeMode?: 'primary' | 'second'
}

// Estilos base para o botão, utilizando as propriedades passadas
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

// Componente de botão estilizado
export const ButtonContainer = styled.button<Props>`
  ${baseStyleButton}
  cursor: pointer;
`

// Componente de link estilizado como botão
export const ButtonContainerLink = styled(Link)<Props>`
  ${baseStyleButton}
  text-decoration: none;
`
