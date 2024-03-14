import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import * as S from './styles' 
import { defaultTheme } from '../../styles/themes/default'

export const Summary = () => {
  return (
     <>
     <S.Container>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']}/>
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']}/>
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <ArrowCircleDown size={32} color={defaultTheme.white}/>
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
     </S.Container>
     </>
  )
}