import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import * as S from './styles' 
import { defaultTheme } from '../../styles/themes/default'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSumary'

export const Summary = () => {

  const summary = useSummary()  

  return (
     <>
     <S.Container>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']}/>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>
      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']}/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>
      <S.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <ArrowCircleDown size={32} color={defaultTheme.white}/>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
     </S.Container>
     </>
  )
}