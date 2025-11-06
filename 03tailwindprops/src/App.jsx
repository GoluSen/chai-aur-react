import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'
import './App.css'
import Card from '/components/Card'

function App() {
  const [Count, SetCount] = useState(0)
  let myObj = {
    username" "hitesh",
    age: 21
  }
    let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl'>Tailwind test</h1>
      <Card channel ="chaiaurcode" btnText ="Click me" />
     <Card username ="hitesh"btnText/> 
    </>
  )
}

export default App
