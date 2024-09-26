import * as S from './styles'

import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import email from '../../assets/images/email.png'
import whatsapp from '../../assets/images/whatsapp.png'

const Footer = () => (
      <S.SocialMedia>
      <h3 className='gradient'>Contato</h3>
      <div>
        <S.Contact href="https://www.linkedin.com/in/kethyllendeliperi/"><img src={linkedin} alt="Ícone do LinkedIn" /></S.Contact>
        <S.Contact href="https://github.com/kethyllendeliperi"><img src={github} alt="Ícone do GitHub" /></S.Contact>
        <S.Contact href="mailto:kethyllenldeliperi@gmail.com"><img src={email} alt="Ícone do E-mail" /></S.Contact>
        <S.Contact href='https://wa.me/5511963376434'><img src={whatsapp} alt="ícone do WhatsApp" /></S.Contact>
      </div>
    </S.SocialMedia>
)

export default Footer
