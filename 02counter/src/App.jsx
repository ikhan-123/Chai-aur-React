import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  let [counter, setcounter] = useState(0)

  const addValue = () => {
    if (counter == 20) {
      setcounter(counter = 20)
      alert("You have reached the maximum number of count")

    } else {
      setcounter(counter + 1)
    }

  }

  const removeValue = () => {
    if (setcounter > 0) {
      setcounter(counter - 1)
    } else {
      setcounter(counter = 0)
    }

  }

  return (
    <>

      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>

    </>
  )
}

export default App
