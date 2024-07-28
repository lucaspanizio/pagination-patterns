import { useSearchParams } from 'react-router-dom'

interface UsePaginationProps {
  total: number
  initialPage?: number
  initialLimit?: number
}

interface PaginationActions {
  goToPrevPage: () => void
  goToFirstPage: () => void
  goToNextPage: () => void
  goToLastPage: () => void
  updateParams: (newPage: string, newLimit: string) => void
  currentPage: number
  totalPages: number
  limit: number
}

export const usePagination = ({
  total,
  initialPage = 1,
  initialLimit = 10,
}: UsePaginationProps): PaginationActions => {
  const [params, setParams] = useSearchParams()
  const page = Math.max(1, Number(params.get('page'))) || initialPage
  const limit = Math.max(1, Number(params.get('limit'))) || initialLimit
  const totalPages = Math.ceil(total / limit) || 1
  const currentPage = Math.min(page, totalPages) || initialPage

  const goToFirstPage = () => {
    setParams({ page: '1', limit: limit.toString() })
  }

  const goToPrevPage = () => {
    if (page > 1) {
      setParams({ page: (page - 1).toString(), limit: limit.toString() })
    }
  }

  const goToNextPage = () => {
    if (page < totalPages) {
      setParams({ page: (page + 1).toString(), limit: limit.toString() })
    }
  }

  const goToLastPage = () => {
    setParams({ page: totalPages.toString(), limit: limit.toString() })
  }

  const updateParams = (newPage: string, newLimit: string) => {
    if (limit !== Number(newLimit)) {
      const calculatedPage = Math.min(
        currentPage,
        Math.ceil(total / Number(newLimit))
      )
      setParams({ page: calculatedPage.toString(), limit: newLimit })
    }
    setParams({ page: newPage, limit: newLimit })
  }

  return {
    goToFirstPage,
    goToPrevPage,
    goToNextPage,
    goToLastPage,
    updateParams,
    currentPage,
    totalPages,
    limit,
  }
}
