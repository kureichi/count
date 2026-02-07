import { endpoint } from "@/services/count/config"
import type { createCountRequestType, createCountResponseType, deleteCountRequestType, deleteCountResponseType, detailCountRequestType, detailCountResponseType } from "@/services/count/types"

export const create = async (value: createCountRequestType): Promise<createCountResponseType> => {
  const res = await fetch(endpoint + "/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value)
  })

  return await res.json()
}

export const detail = async (value: detailCountRequestType): Promise<detailCountResponseType> => {
  const res = await fetch(endpoint + `/detail?code=${value.code}`)

  return await res.json()
}

export const remove = async (value: deleteCountRequestType): Promise<deleteCountResponseType> => {
  const res = await fetch(endpoint + "/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value)
  })

  return await res.json()
}