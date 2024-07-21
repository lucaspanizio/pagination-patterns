export type TData = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getData = async (
  page: number,
  limit: number
): Promise<TData[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(`Fetch error: ${err.message}`)
    })

  return response
}
