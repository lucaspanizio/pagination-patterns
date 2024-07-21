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
