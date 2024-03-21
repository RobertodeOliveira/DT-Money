import * as S from './styles'
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from './components/SearchForm'
import { useEffect, useState } from 'react'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export const Transactions = () => { 
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function loadTransaction() {

    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])
  return ( 
    <>
      <Header />
      <Summary />
      <S.TransactionsContainer>
        <SearchForm />
      <S.TransactionsTable>
        <tbody>
          {transactions.map((transactions) => {
            return (
              <tr key={transactions.id}>
                <td width='50%'>{transactions.description}</td>
                <td><S.PriceHighLight variant={transactions.type}>R${transactions.price}</S.PriceHighLight></td>
                <td>{transactions.category}</td>
                <td>{transactions.createdAt}</td>
              </tr>
            )
          })
        }
        </tbody>
      </S.TransactionsTable>
      </S.TransactionsContainer>
    </>
  )
}