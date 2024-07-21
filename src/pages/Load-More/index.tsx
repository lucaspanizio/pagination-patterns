import React, { useCallback, useEffect, useState } from 'react'
import { getToDos, TData } from '../../services/api'
import { Skeleton } from '../../components/Skeleton'
import * as S from './styles'

export const LoadMore: React.FC = () => {
  const limit = 10
  const [data, setData] = useState<TData[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const canShowButton = data.length === page * limit

  const fetchData = useCallback(() => {
    setLoading(true)

    getToDos(page, limit)
      .then((result) => setData((prevData) => [...prevData, ...result]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [page, limit])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    if (!signal.aborted) fetchData()

    return () => {
      controller.abort()
    }
  }, [page])

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }, [data])

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <S.Container>
      <S.List>
        {data.map((item) => (
          <S.Item key={item.id}>{item.title}</S.Item>
        ))}
        {loading && <Skeleton lines={limit} />}
      </S.List>

      {canShowButton && <S.Button onClick={handleShowMore}>Show More</S.Button>}
    </S.Container>
  )
}
