import { create, detail } from "@/services/count/fetcher"
import { daysBetween } from "@/util"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"

const useCount = () => {
  const [error, setError] = useState("")
  const [savedCode, setSavedCode] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("code")
    }
    return null
  })
  
  const [count, setCount] = useState(0)

  const refreshCount = async () => {
    if (!savedCode) return
    setError("")

    try {
      const res = await detail({ code: savedCode })
      const now = Date.now()
      setCount(daysBetween(res.data.date, now))
    } catch (error) {
      console.error("Gagal mengambil data detail:", error)
      setError("Data Not Found or App Error!")
    }
  }

  const createCount = async () => {
    const newCode = nanoid(5).toUpperCase()

    try {
      const res = await create({ code: newCode })
      setSavedCode(res.data.code)
    } catch (error) {
      console.error("Gagal membuat data:", error)
      setError("Failed create new data")
    }
  }

  useEffect(() => {
    if (savedCode !== null) {
      localStorage.setItem("code", savedCode)
      setTimeout(() => refreshCount(), 0)
    }
  }, [savedCode])

  return {
    error,
    savedCode,
    setSavedCode,
    count,
    createCount
  }
}

export default useCount