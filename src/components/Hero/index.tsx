import { Container } from '../../globals/globalStyle'
import Logo from '../Logo'
import { HeroContainer, Text, TextContainer, HeaderText } from './style'

type Props = {
  title?: string
  description?: string
}

const Hero: React.FC<Props> = ({ title, description }) => {
  return (
    <HeroContainer>
      <Container>
        <HeaderText>Restaurantes</HeaderText>
        {description && (
          <TextContainer>
            <Text>{description}</Text>
          </TextContainer>
        )}
        <Logo kind="link" cover="/logo.png" title="Logo eFood" to="/" />
      </Container>
    </HeroContainer>
  )
}

export default Hero
