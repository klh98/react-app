import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HeaderText from './components/HeaderText'

function App() {
  const [count, setCount] = useState(0);
  const name ="mgmg";

  return (
    <div className='p-8'>
      <Header username='mgmg'></Header>
        <h1 className="text-3xl font-bold underline">hello world</h1>
        <p>I am {name}</p>
        <p>I am {20+4}</p>
        <HeaderText text='testing'></HeaderText>
    </div>
  )
}

export default App
