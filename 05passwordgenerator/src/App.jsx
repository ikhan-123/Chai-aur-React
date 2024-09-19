import { useState, useCallback } from "react"




function App() {

  const [lenght, setlenght] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ""
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}`~"

    for (let i = 0; i < array.length; i++) {
      let char = math.floor(math.random() * str.length + 1)

      pass = str.charAt(char)

    }
    setpassword(pass)

  }, [lenght, numberAllowed, charAllowed, setpassword])

  return (
    <>
      <h1 className='text-4xl text-white text-center mt-5'>Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        Test
      </div>
    </>
  )
}

export default App
