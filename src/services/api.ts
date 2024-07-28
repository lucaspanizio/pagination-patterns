import { delay } from '../utils/delay'

export type TData = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getToDos = async (
  page: number,
  limit: number
): Promise<TData[]> => {
  // Simula um atraso de 1 segundo antes de fazer a requisição
  await delay(1000)

  return fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .catch((error) => {
      console.error(`Fetch error: ${error.message}`)
      return []
    })
}

export type Product = {
  id: string
  price: number
  title: string
  permalink: string
}

export const getProducts = async (
  page: number,
  limit: number
): Promise<{ results: Product[]; total: number }> => {
  // Simula um atraso de 1 segundo antes de fazer a requisição
  await delay(1000)
  const offset = (page - 1) * limit

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&offset=${offset}&limit=${limit}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
      results: data.results,
      total: Math.min(data.paging.total, 1000),
    }
  } catch (error) {
    console.error(`Fetch error: ${error}`)
    return {
      results: [],
      total: 0,
    }
  }
}
