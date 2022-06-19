import styled from 'styled-components'
import img from '../images/icon-person.svg'
import img2 from '../images/icon-dollar.svg'

export const CalculatorContainer = styled.div`
  background: hsl(172, 51%, 78%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CalculatorNameWrapper = styled.div`
  margin-bottom: 40px;
`

export const CalculatorName = styled.h3`
  color: var(--dark-grayish-cyan);
`

export const CalculatorCard = styled.div`
  width: 750px;
  height: 400px;
  background: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
`

export const CalculatorLeftPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`
export const CalculatorLeftText = styled.h5`
  color: var(--grayish-cyan);
  margin-left: 40px;
  margin-top: 35px;
  margin-bottom: 5px;
`

export const CalculatorInput = styled.input`
  width: 81.5%;
  margin-left: 40px;
  height: 9%;
  border: none;
  background: hsl(186, 58%, 94%);
  text-align: right;
  color: hsl(183, 100%, 15%);
  font-size: 22px;
  padding-right: 10px;
  border-radius: 5px;
  background-image: url(${img2});
  background-repeat: no-repeat;
  background-position: 10px 10px; 

  &::placeholder{
    color: var(--grayish-cyan);
    text-align: left;
    padding-left: 10px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
`

export const CalculatorInput2 = styled.input`
  width: 81.5%;
  margin-left: 40px;
  height: 9%;
  border: none;
  background: hsl(186, 58%, 94%);
  text-align: right;
  color: hsl(183, 100%, 15%);
  font-size: 22px;
  padding-right: 10px;
  border-radius: 5px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 10px 10px; 

  &::placeholder{
    color: var(--grayish-cyan);
    text-align: left;
    padding-left: 10px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
`

export const CalculatorButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 40px;
  gap: 10px;
`

export const CalculatorButton = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  font-size: 18px;
  cursor: pointer;

  &:focus{
    background-color: hsl(172, 91%, 78%);
  }
`

export const CalculatorCustomInput = styled.input`
  width: 95px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: hsl(186, 58%, 94%);
  font-size: 18px;
  color: var(--grayish-cyan);
  text-align: center;

  &::placeholder{
    text-align: center;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
`

export const CalculatorRightPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CalculatorRightElements = styled.div`
  background: var(--very-dark-cyan);
  width: 85%;
  height: 85%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const TipAmount = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  ${'' /* background: white; */}
  height: 20%;
  width: 80%;
`

export const TipAmount2 = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  ${'' /* background: white; */}
  height: 20%;
  width: 80%;
`

export const TipAmountTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  ${'' /* background-color: red; */}
`
export const TipAmountText = styled.h4`
  font-weight: bold;
  color: var(--very-light-grayish-cyan);
`

export const TipPersonText = styled.h5`
  margin-top: 5px;
  font-weight: 200;
  color: var(--grayish-cyan);
`

export const TipAmountPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  ${'' /* background-color: red; */}
`

export const TipPrice = styled.h1`
  color: hsl(172, 67%, 45%);
  font-size: 35px;
`

export const TipButton = styled.button`
  margin-top: 60px;
  width: 80%;
  height: 13%;
  border-radius: 10px;
  background-color: hsl(172, 67%, 45%);
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  color: hsl(183, 100%, 15%);
`
