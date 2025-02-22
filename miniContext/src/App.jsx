import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
      <div className="bg-gray-900 min-h-screen text-white">
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello world</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
