import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter, setCounter] = useState(15)


  //let counter = 15


  const addValue = () => {
    //counter = counter +1
   
     setCounter((prevCounter) =>  prevCounter + 1)
      setCounter((prevCounter) =>  prevCounter + 1)
      setCounter((prevCounter) =>  prevCounter + 1)
      setCounter((prevCounter) =>  prevCounter + 1)
       
       
     
  }

  const RemoveValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:  {counter}</h2>


      <button
      OnClick={addValue}
      >Add Value</button>
      <br/>
      <button>remove Value</button>
      <p>footer: {counter}</p>
     </>
  )
}

export default App
