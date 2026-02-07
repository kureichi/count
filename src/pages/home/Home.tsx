import React, { useState } from "react"

const Home: React.FC<{onSubmit: (code:string) => void}> = ({onSubmit}) => {
  const [code, setCode] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase())
  }


  return (
    <>
    <div className="flex gap-2">
      <input 
        className="border-2 border-gray-600 hover:border-gray-500 outline-0 px-3 py-2 rounded-lg transition-all"
        placeholder="Enter Code" type="text" value={code} onChange={handleChange} 
      /> 
      <button onClick={() => onSubmit(code)} className="bg-white hover:bg-gray-300 transition-all text-black px-3 py-2 rounded-lg cursor-pointer">
        Send
      </button>
    </div>
    </>
  )
}

export default Home