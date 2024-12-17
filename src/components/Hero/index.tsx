import { Container } from '../../globals/globalStyle'
import Logo from '../Logo'
import {
  HeroContainer,
  HeroHeader,
  Text,
  TextContainer,
  TitleLink
} from './style'

type Props = {
  title?: string
  description?: string
}

const Hero: React.FC<Props> = ({ title, description }) => {
  return (
    <HeroContainer>
      <Container>
        <Logo kind="link" cover="/logo.png" title="Logo eFood" to="/" />
        {description && (
          <TextContainer>
            <Text>{description}</Text>
          </TextContainer>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
