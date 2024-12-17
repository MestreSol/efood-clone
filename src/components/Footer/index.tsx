import { SocialLinks } from "../../utils/SocialLinks";
import Logo from "../Logo";
import { FooterContainer, SocialIcons, Text } from "./style"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo
      kind="link"
      cover="https://raw.githubusercontent.com/BrunoOliveira16/Curso-Engenheiro-Front-End-EBAC/main/Modulo-35/ImagesEfood/logo.png"
      title="Logo Efood"
      to="/"
      />
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
  );
}

export default Footer;
