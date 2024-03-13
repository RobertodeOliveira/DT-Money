import * as S from './styles' 
import  logo  from '../../../public/logo.svg'

export const Header = () => {
  return (
      <S.HeaderContainer>
        <S.HeaderContent>
          <img src={logo} alt="" />
          <S.NewTranactionButton>Nova transação</S.NewTranactionButton>
        </S.HeaderContent>
      </S.HeaderContainer>
  )
}