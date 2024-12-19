import styled from 'styled-components'
import theme from '../../globals/theme'
import ButtonComponent from '../Button'

// Define the types for the CardProps
type CardProps = {
  $card: 'primary' | 'second'
}

export const Button = styled(ButtonComponent)`
  position: absolute;
  bottom: 2px;
  left: 2px;
`

// Container for the entire card
export const CardContainer = styled.div<CardProps>`
  width: ${(props) => (props.$card === 'primary' ? '472px' : '304px')};
  max-width: 100%;
  display: block;
  position: relative; // Certifique-se de que o contêiner do card tenha position: relative
`

// Container for tags, positioned absolutely within the card
export const ContainerTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`

// Image container with dynamic styles based on the $card prop
export const CardImage = styled.div<CardProps>`
  width: ${(props) => (props.$card === 'primary' ? '472px' : '304px')};
  height: ${(props) => (props.$card === 'primary' ? '217px' : '167px')};
  border: 1px solid transparent;
  background-color: ${(props) =>
    props.$card === 'primary' ? '' : theme.Colors.text};
  padding: ${(props) => (props.$card === 'primary' ? 0 : '8px 8px 0 8px')};
`

// Cover image with full width and height, maintaining aspect ratio
export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// Content container with dynamic styles based on the $card prop
export const CardContent = styled.div<CardProps>`
  display: block;
  padding: 8px;
  background-color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.white : theme.Colors.text};
  border: 1px solid;
  border-color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.text : 'transparent'};
`

// Header section of the card with flexbox for layout
export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -2px;
`

// Title with dynamic color based on the $card prop
export const Title = styled.h2<CardProps>`
  color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.text : theme.Colors.primary};
  font-size: ${(props) => (props.$card === 'primary' ? '18px' : '16px')};
  font-weight: 700;
`

// Text with dynamic color based on the $card prop
export const Text = styled.p<CardProps>`
  color: ${(props) =>
    props.$card === 'primary' ? theme.Colors.text : theme.Colors.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
  height: 88px;
`

// Icon with fixed size and margin
export const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`
