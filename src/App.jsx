import { useState } from 'react'

import './App.css'
import { NMSButton } from './components'
// import { NMSButton } from './components/Button/Button';
// NMSButton

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NMSButton />
    </>
  )
}

export default App
