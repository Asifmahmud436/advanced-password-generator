import { useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length,setLength] = useState(6)
  const [isNumber,setIsNumber] = useState(false)
  const [isChar,setIsChar] = useState(false)



  return (
    <>
      <div>
        <input type="text" name="" id="" readOnly value={password}/>
        <button type="button">Copy</button>
        <br />
        <label htmlFor="number">Number</label>
        <input type='checkbox' name="" id="number" />
        <br />
        <label htmlFor="char">Special Character</label>
        <input type='checkbox' name="" id="char" />
        <br />
        <label htmlFor="range">{length}</label>
        <input 
        type="range" 
        name="" 
        id="range" 
        min='6' 
        max='35'
        onChange={(e)=>setLength(e.target.value)}
        defaultValue={length}
        />
      </div>
    </>
  )
}

export default App
