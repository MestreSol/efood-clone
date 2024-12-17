import styled from 'styled-components'
import theme from '../../globals/theme'

// Container for the footer section, taking full width and centered content
export const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.Colors.primary};
`

// Container for social media icons with spacing and centered alignment
export const SocialIcons = styled.div`
  display: flex;
  gap: 8px; // Space between icons
  margin: 32px auto 80px; // Centered with top and bottom margins

  img {
    width: 24px; // Icon width
    height: 24px; // Icon height
  }
`

// Text styling for footer text
export const Text = styled.p`
  color: ${theme.Colors.text}; // Text color from theme
  font-size: ${theme.fontSizes.body}; // Font size from theme
  text-align: center; // Centered text
  font-weight: 400; // Normal font weight
  line-height: normal; // Normal line height
`
