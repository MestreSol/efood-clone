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
            card="second"
            kindButton="link"
            nameButton="Saiba Mais"
            title="Pizza Marguerita"
            description={getDescription(
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            )}
            cover="https://s3-alpha-sig.figma.com/img/2d19/1807/374d0118af6a26d9cdb2300a285d481a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt7Yftpbxg-o5BIsUJHliPgV2ypNTSz6s-HFyqKZfVnVbPxdcBM2VyLSdsjf9H3A00Qzkvq6jpxTP6lp2XK0p3ZHhb8K8ZsnvpL4VuXaU-QCBUok15BI0VdXreIaejmoZgf-lh1bZ6v3IETFPoGuq6HOjNcQL9Mymnc8O8WUcD5oJNETsrwlWQPfI29r1VZWoLSAzVBTWGYWRcm2FuceCM4ufrPY~c9Mrfxfa79Kc6dRJ4sV17iwW1FbBcaBD3zw31E6~kfcv2JuaMC1LMn7ZkuSVpCy~8OgJon3Lb5utHHzD~YbE6dIg9Do1VvpzHHVcoYADLp41T6oFd8-rhjoRA__"
          />
          <Card
            key="1"
            card="second"
            kindButton="link"
            nameButton="Saiba Mais"
            title="Pizza Marguerita"
            description={getDescription(
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            )}
            cover="https://s3-alpha-sig.figma.com/img/2d19/1807/374d0118af6a26d9cdb2300a285d481a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt7Yftpbxg-o5BIsUJHliPgV2ypNTSz6s-HFyqKZfVnVbPxdcBM2VyLSdsjf9H3A00Qzkvq6jpxTP6lp2XK0p3ZHhb8K8ZsnvpL4VuXaU-QCBUok15BI0VdXreIaejmoZgf-lh1bZ6v3IETFPoGuq6HOjNcQL9Mymnc8O8WUcD5oJNETsrwlWQPfI29r1VZWoLSAzVBTWGYWRcm2FuceCM4ufrPY~c9Mrfxfa79Kc6dRJ4sV17iwW1FbBcaBD3zw31E6~kfcv2JuaMC1LMn7ZkuSVpCy~8OgJon3Lb5utHHzD~YbE6dIg9Do1VvpzHHVcoYADLp41T6oFd8-rhjoRA__"
          />
          <Card
            key="1"
            card="second"
            kindButton="link"
            nameButton="Saiba Mais"
            title="Pizza Marguerita"
            description={getDescription(
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            )}
            cover="https://s3-alpha-sig.figma.com/img/2d19/1807/374d0118af6a26d9cdb2300a285d481a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt7Yftpbxg-o5BIsUJHliPgV2ypNTSz6s-HFyqKZfVnVbPxdcBM2VyLSdsjf9H3A00Qzkvq6jpxTP6lp2XK0p3ZHhb8K8ZsnvpL4VuXaU-QCBUok15BI0VdXreIaejmoZgf-lh1bZ6v3IETFPoGuq6HOjNcQL9Mymnc8O8WUcD5oJNETsrwlWQPfI29r1VZWoLSAzVBTWGYWRcm2FuceCM4ufrPY~c9Mrfxfa79Kc6dRJ4sV17iwW1FbBcaBD3zw31E6~kfcv2JuaMC1LMn7ZkuSVpCy~8OgJon3Lb5utHHzD~YbE6dIg9Do1VvpzHHVcoYADLp41T6oFd8-rhjoRA__"
          />
          <Card
            key="1"
            card="second"
            kindButton="link"
            nameButton="Saiba Mais"
            title="Pizza Marguerita"
            description={getDescription(
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            )}
            cover="https://s3-alpha-sig.figma.com/img/2d19/1807/374d0118af6a26d9cdb2300a285d481a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt7Yftpbxg-o5BIsUJHliPgV2ypNTSz6s-HFyqKZfVnVbPxdcBM2VyLSdsjf9H3A00Qzkvq6jpxTP6lp2XK0p3ZHhb8K8ZsnvpL4VuXaU-QCBUok15BI0VdXreIaejmoZgf-lh1bZ6v3IETFPoGuq6HOjNcQL9Mymnc8O8WUcD5oJNETsrwlWQPfI29r1VZWoLSAzVBTWGYWRcm2FuceCM4ufrPY~c9Mrfxfa79Kc6dRJ4sV17iwW1FbBcaBD3zw31E6~kfcv2JuaMC1LMn7ZkuSVpCy~8OgJon3Lb5utHHzD~YbE6dIg9Do1VvpzHHVcoYADLp41T6oFd8-rhjoRA__"
          />
          <Card
            key="1"
            card="second"
            kindButton="link"
            nameButton="Saiba Mais"
            title="Pizza Marguerita"
            description={getDescription(
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            )}
            cover="https://s3-alpha-sig.figma.com/img/2d19/1807/374d0118af6a26d9cdb2300a285d481a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt7Yftpbxg-o5BIsUJHliPgV2ypNTSz6s-HFyqKZfVnVbPxdcBM2VyLSdsjf9H3A00Qzkvq6jpxTP6lp2XK0p3ZHhb8K8ZsnvpL4VuXaU-QCBUok15BI0VdXreIaejmoZgf-lh1bZ6v3IETFPoGuq6HOjNcQL9Mymnc8O8WUcD5oJNETsrwlWQPfI29r1VZWoLSAzVBTWGYWRcm2FuceCM4ufrPY~c9Mrfxfa79Kc6dRJ4sV17iwW1FbBcaBD3zw31E6~kfcv2JuaMC1LMn7ZkuSVpCy~8OgJon3Lb5utHHzD~YbE6dIg9Do1VvpzHHVcoYADLp41T6oFd8-rhjoRA__"
          />
          <Card
            key="1"
            card="second"
            kindButton="link"
            nameButton="Saiba Mais"
            title="Pizza Marguerita"
            description={getDescription(
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            )}
            cover="https://s3-alpha-sig.figma.com/img/2d19/1807/374d0118af6a26d9cdb2300a285d481a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mt7Yftpbxg-o5BIsUJHliPgV2ypNTSz6s-HFyqKZfVnVbPxdcBM2VyLSdsjf9H3A00Qzkvq6jpxTP6lp2XK0p3ZHhb8K8ZsnvpL4VuXaU-QCBUok15BI0VdXreIaejmoZgf-lh1bZ6v3IETFPoGuq6HOjNcQL9Mymnc8O8WUcD5oJNETsrwlWQPfI29r1VZWoLSAzVBTWGYWRcm2FuceCM4ufrPY~c9Mrfxfa79Kc6dRJ4sV17iwW1FbBcaBD3zw31E6~kfcv2JuaMC1LMn7ZkuSVpCy~8OgJon3Lb5utHHzD~YbE6dIg9Do1VvpzHHVcoYADLp41T6oFd8-rhjoRA__"
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
