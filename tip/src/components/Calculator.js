import React, {useState, useEffect} from 'react'
import {
  CalculatorContainer,
  CalculatorCard,
  CalculatorNameWrapper,
  CalculatorName,
  CalculatorLeftPart,
  CalculatorLeftText,
  CalculatorButtons,
  CalculatorButton,
  CalculatorCustomInput,
  CalculatorInput,
  CalculatorInput2,
  CalculatorRightPart,
  CalculatorRightElements,
  TipAmount,
  TipAmount2,
  TipAmountTextWrapper,
  TipAmountText,
  TipPersonText,
  TipAmountPriceWrapper,
  TipPrice,
  TipButton,

} from './CalculatorElements'

const Calculator = () => {
  const [bill, setBill] = useState('')
  const [tipAmount, setTipAmount] = useState('')
  const [people, setPeople] = useState('1')
  const [tipTotal, setTipTotal] = useState('')
  const [billTotal, setBillTotal] = useState('')

  const handleReset = () => {
    setTipTotal('')
    setBillTotal('')
    setTipAmount('')
    setPeople('')
    setBill('')
  }

  useEffect(() => {
    let tipLocal = 0
    if(parseFloat(tipAmount) > 1) {
      tipLocal = (parseFloat(bill) * parseFloat(tipAmount)/100)/parseFloat(people)
    } else {
      tipLocal = (parseFloat(bill) * parseFloat(tipAmount))/parseFloat(people)
    }
    setTipTotal(tipLocal.toPrecision(3))

    const totalLocal = (parseFloat(bill)/parseFloat(people)) + parseFloat(tipLocal)
    setBillTotal(totalLocal.toPrecision(3))
  }, [bill, tipAmount, people])

  return (
  <CalculatorContainer>
    <CalculatorNameWrapper>
      <CalculatorName>S P L I<br/>T T E R</CalculatorName>
    </CalculatorNameWrapper>
    <CalculatorCard>
      <CalculatorLeftPart>
        <CalculatorLeftText>Bill</CalculatorLeftText>
        <CalculatorInput type="number" value={bill} onChange={ e => setBill(e.target.value) }></CalculatorInput>
        <CalculatorLeftText>Select tip %</CalculatorLeftText>
        <CalculatorButtons>
          <CalculatorButton onClick={e => setTipAmount('0.05')}>5%</CalculatorButton>
          <CalculatorButton onClick={e => setTipAmount('0.1')}>10%</CalculatorButton>
          <CalculatorButton onClick={e => setTipAmount('0.15')}>15%</CalculatorButton>
          <CalculatorButton onClick={e => setTipAmount('0.25')}>25%</CalculatorButton>
          <CalculatorButton onClick={e => setTipAmount('0.5')}>50%</CalculatorButton>
          <CalculatorCustomInput placeholder="Custom" value={tipAmount} type="number" min="1" max="100" onChange={e => {setTipAmount((e.target.value))}}></CalculatorCustomInput>
        </CalculatorButtons>
        <CalculatorLeftText>Number of people</CalculatorLeftText>
        <CalculatorInput2 type="number" value={people} onChange={e => setPeople(e.target.value)}></CalculatorInput2>
      </CalculatorLeftPart>
      <CalculatorRightPart>
        <CalculatorRightElements>
          <TipAmount>
            <TipAmountTextWrapper>
              <TipAmountText>Tip amount</TipAmountText>
              <TipPersonText>/ person</TipPersonText>
            </TipAmountTextWrapper>
            <TipAmountPriceWrapper>
              <TipPrice>${tipTotal}</TipPrice>
            </TipAmountPriceWrapper>
          </TipAmount>
          <TipAmount2>
            <TipAmountTextWrapper>
              <TipAmountText>Total</TipAmountText>
              <TipPersonText>/ person</TipPersonText>
            </TipAmountTextWrapper>
            <TipAmountPriceWrapper>
              <TipPrice>${billTotal}</TipPrice>
            </TipAmountPriceWrapper>
          </TipAmount2>
          <TipButton onClick={handleReset}>RESET</TipButton>
        </CalculatorRightElements>
      </CalculatorRightPart>
    </CalculatorCard>
  </CalculatorContainer>
  )
}

export default Calculator
