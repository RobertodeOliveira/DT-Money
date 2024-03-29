import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransactions(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
    console.log(data)
  }

  return (
    <>
      <Dialog.Portal>
        <S.Overlay />

        <S.Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <S.CloseButton>
            <X />
          </S.CloseButton>
          <form action="" onSubmit={handleSubmit(handleCreateNewTransactions)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="text"
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <S.TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <S.TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </S.TransactionTypeButton>
                    <S.TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </S.TransactionTypeButton>
                  </S.TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </S.Content>
      </Dialog.Portal>
    </>
  )
}
