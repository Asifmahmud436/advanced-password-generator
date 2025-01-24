import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length,setLength] = useState(6)
  const [isNumber,setIsNumber] = useState(false)
  const [isChar,setIsChar] = useState(false)
  const passRef = useRef(null)

  const passGenerator = useCallback(()=>{
    let pass = ''
    let str = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'
    
    if(isChar) str+= '!@#$%^&*()_+~`'
    if(isNumber) str+= '1234567890'

    for(let i = 0; i< length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length)) 
    }

    setPassword(pass)

  },[length,isNumber,isChar])

  useEffect(()=>{
    passGenerator()
  },[length,isChar,isNumber])
  
  function handleNumber(){
    setIsNumber((prev)=>!prev)
  }

  function handleChar(){
    setIsChar((prev)=>!prev)
  }

  function handleCopy(){
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div>
        <input 
        type="text" 
        name="" 
        id="" 
        readOnly 
        value={password}
        ref={passRef}
        />
        <button type="button" onClick={handleCopy}>Copy</button>
        <br />

        <label htmlFor="number">Number</label>
        <input 
        type='checkbox' 
        name="" 
        id="number" 
        onChange={handleNumber}/>
        <br />

        <label htmlFor="char">Special Character</label>
        <input 
        type='checkbox' 
        name="" 
        id="char"  
        onChange={handleChar}/>
        <br />
        <label htmlFor="range">{length}</label>
        <input 
        type="range" 
        name="" 
        id="range" 
        min='6' 
        max='35'
        onChange={(e)=>setLength(parseInt(e.target.value))}
        defaultValue={length}
        />
      </div>
    </>
  )
}

export default App
