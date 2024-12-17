import { ButtonContainer, ButtonContainerLink } from './style'

// Define the Props type for the Button component
type Props = {
  kind: 'button' | 'link' // Determines if the component is a button or a link
  displayMode?: 'fullWidth' | 'inlineBlock' // Optional display mode
  themeMode: 'primary' | 'second' // Theme mode for styling
  placeholder: string // Text to display inside the button or link
  to?: string // URL for the link
  type?: 'button' | 'reset' | 'submit' // Type of the button
  disabled?: boolean // Disabled state for the button
  onClick?: () => void // Click event handler
}

const Button = ({
  kind,
  placeholder,
  displayMode = 'fullWidth',
  themeMode = 'primary',
  to,
  type = 'button',
  disabled = false,
  onClick
}: Props) => {
  // Render a link if kind is 'link'
  if (kind === 'link') {
    return (
      <ButtonContainerLink
        $displayMode={displayMode}
        $themeMode={themeMode}
        to={to as string}
      >
        {placeholder}
      </ButtonContainerLink>
    )
  }

  // Render a button if kind is 'button'
  return (
    <ButtonContainer
      onClick={onClick}
      $displayMode={displayMode}
      $themeMode={themeMode}
      type={type}
      disabled={disabled}
    >
      {placeholder}
    </ButtonContainer>
  )
}

export default Button
