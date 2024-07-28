import { ReactElement, useEffect, useState } from 'react'
import { getProducts, Product } from '../api'
import { useSearchParams } from 'react-router-dom'

type CacheEntry = {
  total: number
  products: ProductDomain[]
}

type ProductDomain = {
  id: string
  title: string
  price: string
  link: ReactElement
}

type UseCachedDataParams = {
  updateData: (data: Product[]) => ProductDomain[]
}

export const useFetchProducts = ({ updateData }: UseCachedDataParams) => {
  const [params, _] = useSearchParams()
  const page = Number(params.get('page') ?? 1)
  const limit = Number(params.get('limit') ?? 10)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cache, setCache] = useState<{ [key: string]: CacheEntry }>({})
  const [currentData, setCurrentData] = useState<CacheEntry | undefined>()

  useEffect(() => {
    const cacheKey = `${page}-${limit}`

    if (cache[cacheKey]) {
      setCurrentData(cache[cacheKey])
      return
    }

    setIsLoading(true)
    getProducts(page, limit)
      .then((data) => {
        const products = updateData(data.results)
        const cacheEntry = {
          total: data.total,
          products,
        }
        setCurrentData(cacheEntry)
        setCache((prevCache) => ({
          ...prevCache,
          [cacheKey]: cacheEntry,
        }))
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error)
      })
      .finally(() => setIsLoading(false))
  }, [page, limit])

  return {
    isLoading,
    data: currentData,
  }
}
