import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { fetchLoremIpsum } from '../../services/fake-api'
import { Skeleton } from '../../components/Skeleton'
import * as S from './styles'

export const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const observer = useRef<IntersectionObserver | null>(null)

  // Função de observação de interseções com a viewport
  const handleObserver = useDebounce((entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1)
    }
  }, 500)

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(
        (entries) => handleObserver(entries),
        {
          root: null, // Observe the viewport
          rootMargin: '200px', // Trigger loading before reaching the end
          threshold: 1.0, // Trigger when 100% of the target is visible
        }
      )

      if (node) observer.current.observe(node)
    },
    [handleObserver, loading]
  )

  // Carregar mais itens quando a página muda
  useEffect(() => {
    setLoading(true)
    fetchLoremIpsum(page)
      .then((newItems) => setItems((prevItems) => [...prevItems, ...newItems]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [page])

  return (
    <S.Container>
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={index === items.length - 1 ? lastElementRef : undefined}
        >
          {item.text}
        </div>
      ))}
      {loading && <Skeleton lines={30} />}
    </S.Container>
  )
}
