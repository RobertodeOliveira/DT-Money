import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog';

export const NewTransactionModal = () => { 
  return ( 
    <>
      <Dialog.Portal>
        <S.Overlay />

          <S.Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <form action="">
              <input type="text" placeholder='Descrição' required/>
              <input type="text" placeholder='Preço' required/>
              <input type="text" placeholder='Categoria' required/>

              <button type='submit'>Cadastrar</button>
            </form>
            <Dialog.Close />
          </S.Content>
        </Dialog.Portal>
    </>
  )
}