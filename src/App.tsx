import useCount from "@/hooks/useCount"
import Count from "@/pages/count/Count"
import Home from "@/pages/home/Home"

function App() {
  const { savedCode, setSavedCode, count, createCount, error } = useCount()
  return (
    <>
    <div className="h-dvh w-dvw flex flex-col justify-center items-center">
      <div className="text-3xl font-bold mb-5">
        Count Website!
      </div>

      {savedCode ? (<Count count={count} code={savedCode} error={error} />) : <Home onSubmit={setSavedCode} />}

      <div className="flex gap-3">
        <button onClick={createCount} className="mt-6 px-3 py-2 bg-green-900 hover:bg-green-950 transition-all text-white rounded-lg cursor-pointer">
          Create New +
        </button>
        { savedCode ? (
          <button onClick={() => {setSavedCode("")}} className="mt-6 px-3 py-2 bg-blue-900 hover:bg-blue-950 transition-all text-white rounded-lg cursor-pointer">
            Enter other code
          </button>
        ) : null }
      </div>
    </div>
    </>
  )
}

export default App
