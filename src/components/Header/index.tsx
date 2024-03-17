import * as S from './styles' 
import  logo  from '../../../public/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';


export const Header = () => {
  return (
      <S.HeaderContainer>
        <S.HeaderContent>
          <img src={logo} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <S.NewTranactionButton>Nova transação</S.NewTranactionButton>
            </Dialog.Trigger>
            
            <NewTransactionModal />

          </Dialog.Root>
        </S.HeaderContent>
      </S.HeaderContainer>
  )
}