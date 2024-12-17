import Card from '../../components/Card'
import { getDescription, getDescriptionProduct } from '../../utils/ProductUtils'
import { useState } from 'react'
import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './style'
import { data } from 'react-router-dom'
import { Container } from '../../globals/globalStyle'
import Star from '../../assets/icons/star.svg'

const CardListPerfil = () => {
  function renderProductList(products: MenuProps[]) {
    if (!products) {
      return (
        <TextMessage>
          Não existem ainda produtos para este restaurante
        </TextMessage>
      )
    }

    return products.map((product) => (
      <Card
        key={product.id}
        card="second"
        kindButton="button"
        nameButton="Adicionar ao carrinho"
        title={product.nome}
        description={getDescriptionProduct(product.descricao)}
        cover={product.foto}
        handleClick={() => void 0}
      />
    ))
  }

  return (
    <ContainerListPerfil>
      <BannerContainer
        key="1"
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__")`
        }}
      >
        <Container>
          <SubTitle>Restaurante</SubTitle>
          <Title>Nome do Restaurante</Title>
        </Container>
      </BannerContainer>

      <Container>
        <CardListContainer>
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
          <Card
            key="2"
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/2`}
            iconName={Star}
            title="Café Aurora"
            description={getDescription(
              'Delicie-se com um café artesanal único e pratos leves preparados com carinho. Um ambiente aconchegante para relaxar e aproveitar momentos especiais. Visite-nos e sinta o sabor da tranquilidade!'
            )}
            rating="4.8"
            tagType="Cafeteria"
            cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__"
          />

          <Card
            key="3"
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/3`}
            iconName={Star}
            title="Boutique Elegance"
            description={getDescription(
              'Descubra peças exclusivas de moda e acessórios que destacam sua personalidade. Com design sofisticado e qualidade excepcional, seja elegante em qualquer ocasião. A elegância está ao seu alcance!'
            )}
            rating="4.5"
            tagType="Loja de Moda"
            cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__"
          />

          <Card
            key="4"
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/4`}
            iconName={Star}
            title="Conforto Lar"
            description={getDescription(
              'Transforme sua casa em um lar com nossos móveis e decorações pensados para o seu bem-estar. Designs modernos, materiais de alta qualidade e conforto garantido. Encontre o estilo que é a sua cara!'
            )}
            rating="4.7"
            tagType="Decoração"
            cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__"
          />

          <Card
            key="5"
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/5`}
            iconName={Star}
            title="Natureza Viva"
            description={getDescription(
              'Explore o mundo das plantas com nossa seleção incrível de flores, suculentas e ervas aromáticas. Tudo para trazer frescor, beleza e um toque verde à sua vida!'
            )}
            rating="4.9"
            tagType="Jardinagem"
            cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__"
          />

          <Card
            key="6"
            card="primary"
            kindButton="link"
            nameButton="Saiba Mais"
            to={`/perfil/6`}
            iconName={Star}
            title="Melody Studio"
            description={getDescription(
              'Aprenda música com os melhores! Aulas de diversos instrumentos, técnicas vocais e produção musical. Descubra seu talento e leve sua paixão pela música ao próximo nível.'
            )}
            rating="4.6"
            tagType="Escola de Música"
            cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPEGLq6mcmMI3jZ~MvxghfzN23FZTrqdy6mZk6h2yXosJmax1e29g4ibVblwccVKFD26OkqX5r2DVVp0XA6uRh1dLyqwMK8QJ6eVLHdrD1v5eVABTGt8436~yqerz6I6GSGjtQUHeU2W1te5PvVUdSbBAAIOf3SUxyUcl-zcY9loAe5PBJFslHiKTBhYi8NS3xkBfxBVRvbQ2r-w5hIeTim7Br-DUEsr23pmaS91r5oWAALLSQcMPrqlgkS080yztabkSKCqT5W339Ek2qkytz3~scJbrPS23DqsB7G4pdNMogyi8LI2nGpVEK2BtZU13mIyHT6985dS2sisV7vsUA__"
          />
        </CardListContainer>
      </Container>
    </ContainerListPerfil>
  )
}
function useGetRestaurantQuery(arg0: string): { data: any } {
  throw new Error('Function not implemented.')
}

export default CardListPerfil
