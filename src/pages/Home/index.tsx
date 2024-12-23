import Hero from '../../components/Hero'
import CardListHome from '../../containers/CardListHome'
import { Container } from '../../globals/globalStyle'
import { HomeContainer } from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <Hero textContent="Viva experiências gastronômicas no conforto da sua casa" />
      <Container>
        <CardListHome />
      </Container>
    </HomeContainer>
  )
}

export default Home
