import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

async function handleCreateNewTransactions(data: NewTransactionFormInputs) {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log(data)
}



export const NewTransactionModal = () => { 
  const { register,
          handleSubmit,
          formState: { isSubmitting }
        } = useForm<NewTransactionFormInputs>({
          resolver: zodResolver(newTransactionFormSchema)
        })

  return ( 
    <>
      <Dialog.Portal>
        <S.Overlay />

          <S.Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <S.CloseButton><X /></S.CloseButton>
            <form action="" onSubmit={handleSubmit(handleCreateNewTransactions)}>
              <input type="text" placeholder='Descrição' required {...register('description')}/>
              <input type="text" placeholder='Preço' required {...register('price', {valueAsNumber: true})}/>
              <input type="text" placeholder='Categoria' required {...register('category')}/>

              <S.TransactionType>
                <S.TransactionTypeButton variant='income' value='income'>
                  <ArrowCircleUp size={24}/>
                  Entrada
                </S.TransactionTypeButton>
                <S.TransactionTypeButton variant='outcome' value='outcome'>
                  <ArrowCircleDown size={24} />
                  Saída
                </S.TransactionTypeButton>
              </S.TransactionType>

              <button type='submit' disabled={isSubmitting}>Cadastrar</button>
            </form>
          </S.Content>
        </Dialog.Portal>
    </>
  )
}