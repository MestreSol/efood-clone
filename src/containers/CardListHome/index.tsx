import Card from '../../components/Card'
import Star from '../../assets/icons/star.svg'
import { CardListContainer } from './style'
import { getDescription } from '../../utils/ProductUtils'

const CardListHome = () => {
  return (
    <CardListContainer>
      <div>
        <Card
          key="1"
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          to={`/perfil/1`}
          iconName={Star}
          title="Teste"
          description={getDescription('Teste')}
          rating="5"
          tagType="Restaurante"
          cover=""
        />
      </div>
    </CardListContainer>
  )
}

export default CardListHome
