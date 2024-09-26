import * as S from "./styles";
import { Link } from "react-scroll";

import logo from '../../assets/images/logo.png'

const Header = () => (
  <S.HeaderBar>
    <img src={logo} alt="" />
    <nav>
      <S.HeaderOptions>
        <S.HeaderItems>
          <Link to="projects" smooth={true} duration={800}>Projetos</Link>
        </S.HeaderItems>
        <S.HeaderItems>
          <Link to="skills" smooth={true} duration={800}>Tecnologias</Link>
        </S.HeaderItems>
        <S.HeaderItems>
          <Link to="contact" smooth={true} duration={800}>Contato</Link>
        </S.HeaderItems>
      </S.HeaderOptions>
    </nav>
  </S.HeaderBar>
);

export default Header;
