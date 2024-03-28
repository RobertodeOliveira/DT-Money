import * as S from './styles'
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from './components/SearchForm'
import { useContext } from 'react'
import { TransactionsContext } from '../../components/contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'



export const Transactions = () => { 

  const { transactions } = useContext(TransactionsContext)

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
                <td>
                  <S.PriceHighLight variant={transactions.type}>
                    {transactions.type === 'outcome' && '- '}
                    {priceFormatter.format(transactions.price)}
                  </S.PriceHighLight></td>
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