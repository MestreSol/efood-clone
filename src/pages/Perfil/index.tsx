import Hero from '../../components/Hero'
import CardListPerfil from '../../containers/CardListPerfil'
import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  Title
} from '../../containers/CardListPerfil/style'
import { getDescription } from '../../utils/ProductUtils'
import { Container } from './styles'
import Star from '../../assets/icons/star.svg'
import Card from '../../components/Card'

const Perfil = () => {
  return (
    <Container>
      <Hero title="Restaurantes" />
      <CardListPerfil />
    </Container>
  )
}

export default Perfil
