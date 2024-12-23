import { getDescription } from '../../utils/ProductUtils'

import Card from '../../components/Card'

import Star from '../../assets/icons/star.svg'
import { CardListContainer } from './style'

const CardListHome = () => {
  return (
    <>
      <CardListContainer>
        <Card
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          title="Hioki Sushi"
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jV5VSZJySun4XWmForyXHvp6tz9Cw~d7p09YVB08c5QaJBBt6~LcahmuqOtqdmovnGqSBa9c9B1GAe7IaTHJkN0inO-GO~cVYZuFZqxJ2osdteM7GXplWzcTnUT34AYi1bEYtfCLHrMNndO48QNclHYlSrTVcf8Hk8aJ~DcKUM2xfB2DiNbx8TPwPiT0vh5YPcRo7pDS6WiAnU4GtMgip32LRgH4raD8uqU1SySka0TqFe7AMdw9~e~zufo1Z5M3cxlcr3p-hIKx3JzHyexNOIwnk7OC5ZE3FWrsfSpZmDALKhi1Afnazbrcfnk70Lc67gAzw6q0CCj0Sghe9pkoWg__"
          iconName={Star}
          rating="4.5"
          tagType={['Japonesa', 'Destaque da semana']}
          to="/perfil/1"
        />
        <Card
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          title="La Dolce Vita Trattoria"
          description={
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
          }
          cover="https://s3-alpha-sig.figma.com/img/3a24/4472/c90467aeb9c58ffac7808807e160ee0c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjZfvSh6BF7nyY6a2chnYtaSX4P71fnPcs~Ifw7tvzxhZe6ehidyrgWbARpY2dwDaD7K8xM2-0XtV57A2JrP8~NJbsm7J54LVRW3TxGYIOy82GIZTEQkNon1o7GPotQtEknf~NiU8Pba5PQ1-~BbfcRODa1xMAxhjGpLsHdWH7FLN6Jgxr36inVnogpCStE-owPh1ZD7GV0eES9oKlInhRKii4rTzB07CWt3jfNeogELkMFmRMNntpWOg-DzukpnqpRRNdlH7eKpal~SwhlP3yz9J1Ymvh5NQknI6SbxT-fUtJvEsBUvWvFf2kXS3ptJks6WAFhLNV7cwY5dvgTLlg__"
          iconName={Star}
          rating="4.6"
          tagType={['Italiana']}
          to="/perfil/1"
        />
        <Card
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          title="Hioki Sushi"
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jV5VSZJySun4XWmForyXHvp6tz9Cw~d7p09YVB08c5QaJBBt6~LcahmuqOtqdmovnGqSBa9c9B1GAe7IaTHJkN0inO-GO~cVYZuFZqxJ2osdteM7GXplWzcTnUT34AYi1bEYtfCLHrMNndO48QNclHYlSrTVcf8Hk8aJ~DcKUM2xfB2DiNbx8TPwPiT0vh5YPcRo7pDS6WiAnU4GtMgip32LRgH4raD8uqU1SySka0TqFe7AMdw9~e~zufo1Z5M3cxlcr3p-hIKx3JzHyexNOIwnk7OC5ZE3FWrsfSpZmDALKhi1Afnazbrcfnk70Lc67gAzw6q0CCj0Sghe9pkoWg__"
          iconName={Star}
          rating="4.5"
          tagType={['Japonesa', 'Destaque da semana']}
          to="/perfil/1"
        />
        <Card
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          title="Hioki Sushi"
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jV5VSZJySun4XWmForyXHvp6tz9Cw~d7p09YVB08c5QaJBBt6~LcahmuqOtqdmovnGqSBa9c9B1GAe7IaTHJkN0inO-GO~cVYZuFZqxJ2osdteM7GXplWzcTnUT34AYi1bEYtfCLHrMNndO48QNclHYlSrTVcf8Hk8aJ~DcKUM2xfB2DiNbx8TPwPiT0vh5YPcRo7pDS6WiAnU4GtMgip32LRgH4raD8uqU1SySka0TqFe7AMdw9~e~zufo1Z5M3cxlcr3p-hIKx3JzHyexNOIwnk7OC5ZE3FWrsfSpZmDALKhi1Afnazbrcfnk70Lc67gAzw6q0CCj0Sghe9pkoWg__"
          iconName={Star}
          rating="4.5"
          tagType={['Japonesa', 'Destaque da semana']}
          to="/perfil/1"
        />
        <Card
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          title="Hioki Sushi"
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jV5VSZJySun4XWmForyXHvp6tz9Cw~d7p09YVB08c5QaJBBt6~LcahmuqOtqdmovnGqSBa9c9B1GAe7IaTHJkN0inO-GO~cVYZuFZqxJ2osdteM7GXplWzcTnUT34AYi1bEYtfCLHrMNndO48QNclHYlSrTVcf8Hk8aJ~DcKUM2xfB2DiNbx8TPwPiT0vh5YPcRo7pDS6WiAnU4GtMgip32LRgH4raD8uqU1SySka0TqFe7AMdw9~e~zufo1Z5M3cxlcr3p-hIKx3JzHyexNOIwnk7OC5ZE3FWrsfSpZmDALKhi1Afnazbrcfnk70Lc67gAzw6q0CCj0Sghe9pkoWg__"
          iconName={Star}
          rating="4.5"
          tagType={['Japonesa', 'Destaque da semana']}
          to="/perfil/1"
        />
        <Card
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          title="Hioki Sushi"
          description={
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          }
          cover="https://s3-alpha-sig.figma.com/img/5d53/a2e2/28895a55942ffb290182da4c32ba645d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jV5VSZJySun4XWmForyXHvp6tz9Cw~d7p09YVB08c5QaJBBt6~LcahmuqOtqdmovnGqSBa9c9B1GAe7IaTHJkN0inO-GO~cVYZuFZqxJ2osdteM7GXplWzcTnUT34AYi1bEYtfCLHrMNndO48QNclHYlSrTVcf8Hk8aJ~DcKUM2xfB2DiNbx8TPwPiT0vh5YPcRo7pDS6WiAnU4GtMgip32LRgH4raD8uqU1SySka0TqFe7AMdw9~e~zufo1Z5M3cxlcr3p-hIKx3JzHyexNOIwnk7OC5ZE3FWrsfSpZmDALKhi1Afnazbrcfnk70Lc67gAzw6q0CCj0Sghe9pkoWg__"
          iconName={Star}
          rating="4.5"
          tagType={['Japonesa', 'Destaque da semana']}
          to="/perfil/1"
        />
      </CardListContainer>
    </>
  )
}

export default CardListHome
