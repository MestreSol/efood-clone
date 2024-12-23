import { Container } from '../../globals/globalStyle'
import Logo from '../Logo'
import {
  HeroContainer,
  HeroHeader,
  Text,
  TextContainer,
  Title,
  TitleLink
} from './style'

type Props = {
  title?: string
  textContent?: string
  description?: string
}

const Hero: React.FC<Props> = ({ textContent, title }) => {
  const items = ['1', '2', '3']

  function handleOpenCart() {
    console.log('handleOpenCart')
  }
  function renderHeaderContent(item: string | undefined) {
    if (item === undefined) {
      return <Logo kind="link" cover="/logo.png" title="Logo eFood" to="/" />
    }

    return (
      <HeroHeader>
        <TitleLink to="/">{item}</TitleLink>
        <Logo kind="link" cover="/logo.png" title="Logo eFood" to="/" />
        <Title onClick={handleOpenCart}>
          {items.length} produto(s) no carrinho
        </Title>
      </HeroHeader>
    )
  }

  return (
    <HeroContainer>
      <Container>
        {renderHeaderContent(title)}

        {textContent && (
          <TextContainer>
            <Text>{textContent}</Text>
          </TextContainer>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
