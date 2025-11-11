import { useState, UseState } from 'react'
import {InputBox} from './components'
import UseCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("inr")
  const [convertedamount] = useState(0)
  (0)

  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)

  const swap = ()  => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  const convert = ()  => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap
      justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImages: 'url('${backgroundImage}')',
      }}
>
     <div className="w-full">
      <div className="W-full max-w-md mx-auto
      border border-gray-60 rounded-lg p-5
      backdrop-blur-sm bg-white/30'>
      <form
      onSubmit={(e) => {
      e,preventDefault();
      convert[]

      }}

  >
  
  <div className="w-full mb-1">
    <InputBox
    label="From"
    amount={amount}
    currencyoptions ={options}
    onCurrencyChange={(currency)
    => setAmount(amount)}
    SelectCurrency={from}
    onAmountChange={(amount)}


    />
  </div>
  <div className="relative w-full h-0.
  5">
  <button
  type="button"
  className="absolute left-1/2
  -translate-x-1/2
  -translate-y-1/2 border-2
  border-white rounded-md
  bg-blue-600 text-white px-2
  py-0.5
  Onclick={swap}

  >

  swap
  </button>
  </div>
  <div className="w-full mt-1 mb-4">
    <InputBox
    label="To"
     amount={convertedamount}
    currencyoptions ={options}
    onCurrencyChange={(currency}
    => setTo(Currency)}
    selectCurrency={form}
    amountDisable


    />
  </div>
  <button type="submit"
  className="w-full bg-blue-600
  text-white px-4 py-3 rounded-lg">
    Convert {from.toUppercase ()} to
    {to.touppercase()}
  </button>

  </form>
  </div>
  </div>
  </div>



     </div>
    
  
  )
}

export default App
