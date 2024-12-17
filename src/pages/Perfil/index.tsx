import Hero from '../../components/Hero'
import CardListPerfil from '../../containers/CardListPerfil'
import { Container } from './styles'

const Perfil = () => {
  return (
    <Container>
      <Hero title="Restaurantes" />
      <CardListPerfil />
    </Container>
  )
}

export default Perfil
