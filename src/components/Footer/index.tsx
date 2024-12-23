import Logo from '../Logo'
import { SocialLinks } from '../../utils/SocialLinks'

import { FooterContainer, SocialIcons, Text } from './style'

const Footer = () => (
  <FooterContainer>
    <Logo kind="link" cover="/logo.png" title="Logo eFood" to="/" />
    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer
