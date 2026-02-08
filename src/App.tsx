import Loading from "@/components/Loading"
import useCount from "@/hooks/useCount"
import Count from "@/pages/count/Count"
import Home from "@/pages/home/Home"
import { useEffect } from "react"
import { Slide, toast, ToastContainer } from "react-toastify"

function App() {
  const { savedCode, getCount, countDate, createCount, error, clear, isLoading } = useCount()

  useEffect(() => {
    if (error) {
      toast(error, { ariaLabel: "Error Occured!", type: "error", hideProgressBar: true })
    }
  }, [error])

  return (
    <>
    <div className="h-dvh w-dvw flex flex-col justify-center items-center">
      <div className="text-3xl font-bold mb-5">
        Count Website!
      </div>

      {savedCode && countDate ? 
        <Count countDate={countDate} code={savedCode} error={error} /> 
        : 
        <Home onSubmit={getCount} isLoading={isLoading} />
      }

      <div className="flex gap-3">
        <button disabled={isLoading} onClick={createCount} className="mt-6 px-2 py-1 text-sm bg-green-900 hover:bg-green-950 transition-all text-white rounded-lg cursor-pointer">
          Create New +
        </button>
        { savedCode ? (
          <button disabled={isLoading} onClick={() => clear()} className="mt-6 px-2 py-1 bg-blue-900 hover:bg-blue-950 transition-all text-white rounded-lg cursor-pointer">
            Enter other code
          </button>
        ) : null }
      </div>

      <div style={{opacity: `${isLoading? 100 : 0}`}} className={`mt-5 flex gap-3 items-center justify-center transition-all duration-200`}>
        <Loading className={``} size={20} />
        <div className="text-sm">
          Fetching api...
        </div>
      </div>

      <ToastContainer position="top-center" transition={Slide} />
    </div>
    </>
  )
}

export default App
