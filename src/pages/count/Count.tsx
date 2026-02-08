import { daysBetween, secondsBetween, secondsToHms } from "@/util"
import { useEffect, useRef, useState } from "react"

const Count: React.FC<{countDate: Date, code: string, error: string}>= ({countDate, code, error}) => {
  const [days, setDays] = useState(0)
  const [hms, setHms] = useState("")
  const seconds = useRef(0)

  const refreshCount = () => {
    console.log(countDate)
    setHms(secondsToHms(seconds.current))
    setDays(() => {
      const now = new Date()
      const newDays = daysBetween(countDate, now)

      return newDays
    })
  }

  useEffect(() => {
    const now = new Date()
    seconds.current = secondsBetween(countDate, now)
    refreshCount()

    const interval = setInterval(() => {
      seconds.current = seconds.current + 1
      refreshCount()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [countDate])

  return (
    <>
      { error ? (
        <div>
          {error}
        </div>
      ) : (
        <>
        <div>
          Now you're in
        </div>
        <div className="flex gap-3">
          <div className="text-9xl font-bold">
            {days}
          </div>
          <div className="text-lg">
            Days!
          </div>
        </div>
        <div>
          {hms}
        </div>
        </>
      )}
      <div className="mt-3 text-sm opacity-70">Code: {code}</div>
    </>
  )
}

export default Count