import React, { useState } from "react"

const Home: React.FC<{onSubmit: (code:string) => void, isLoading: boolean}> = ({onSubmit, isLoading}) => {
  const [code, setCode] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase())
  }


  return (
    <>
    <div className="w-[50dvw] lg:w-[20dvw] flex gap-2 border-2 border-gray-800 hover:border-gray-500 outline-0 pl-2 pr-1 py-1 rounded-lg transition-all">
      <input 
        className="flex-1 outline-0"
        placeholder="Enter Code" type="text" value={code} onChange={handleChange} 
      /> 
      <button onClick={() => onSubmit(code)} className="text-sm bg-gray-200 hover:bg-gray-300 transition-all text-black px-3 py-1 rounded-lg cursor-pointer">
        { isLoading ? "Loading" : "Submit Code" }
      </button>
    </div>
    </>
  )
}

export default Home