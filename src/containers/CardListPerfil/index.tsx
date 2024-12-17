import Card from '../../components/Card'
import { getDescriptionProduct } from '../../utils/ProductUtils'
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
      <BannerContainer key="1">
        <Container>
          <SubTitle>Restaurante</SubTitle>
          <Title>Nome do Restaurante</Title>
        </Container>
      </BannerContainer>

      <Container>
        <CardListContainer key="1"></CardListContainer>
      </Container>
    </ContainerListPerfil>
  )
}
function useGetRestaurantQuery(arg0: string): { data: any } {
  throw new Error('Function not implemented.')
}

export default CardListPerfil
