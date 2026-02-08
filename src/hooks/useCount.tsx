import { create, detail } from "@/services/count/fetcher"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"

const useCount = () => {
  const [error, setError] = useState<string>("")
  const [savedCode, setSavedCode] = useState<string>("")
  const [countDate, setCountDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const getCount = async (code: string) => {
    setIsLoading(true)
    setError("")

    try {
      const res = await detail({ code: code })
      if (res.statusCode !== 200) {
        setError(res.message)
        return
      }

      setSavedCode(code)
      setCountDate(new Date(res.data.date))
    } catch (error) {
      console.error("Gagal mengambil data detail:", error)
      setError("Failed to get count: " + error)
    } finally {
      setIsLoading(false)
    }
  }

  const createCount = async () => {
    setIsLoading(true)
    setError("")
    const newCode = nanoid(5).toUpperCase()

    try {
      const res = await create({ code: newCode })

      if (res.statusCode !== 200) {
        setError(res.message)
        return
      }

      getCount(res.data.code)
    } catch (error) {
      console.error("Gagal membuat data:", error)
      setError("Failed to create new count: " + error)
    } finally {
      setIsLoading(false)
    }
  }

  const clear = () => {
    setSavedCode("")
  }

  useEffect(() => {
    if (typeof window === "undefined") return 

    const code = localStorage.getItem("code")
    if (!code) return

    getCount(code)
  }, [])

  useEffect(() => {
    if (!savedCode) return
    localStorage.setItem("code", savedCode)
  }, [savedCode])

  return {
    error,
    clear,
    isLoading,
    savedCode,
    countDate,
    getCount,
    createCount
  }
}

export default useCount