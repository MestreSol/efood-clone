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
          title="Hioki Sushi"
          description={getDescription(
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          )}
          rating="5"
          tagType="Restaurante"
          cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__"
        />
      </div>
    </CardListContainer>
  )
}

export default CardListHome
