import React, { ChangeEventHandler } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'
import { usePagination } from '../../../hooks/usePagination'
import * as S from './styles'

const LIMIT_OPTIONS = [5, 10, 15, 20]

interface IPaginationProps {
  total: number
}

export const Pagination: React.FC<IPaginationProps> = ({ total }) => {
  const {
    limit,
    totalPages,
    currentPage,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
    updateParams,
  } = usePagination({ total })

  const handleUpdateLimit: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
    updateParams(currentPage.toString(), target.value)
  }

  return (
    <S.Container>
      <span>
        Registros por página:{' '}
        <select onChange={handleUpdateLimit} value={limit}>
          {LIMIT_OPTIONS.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>

      <S.ContainerPages>
        <span>
          Página {currentPage} de {totalPages}
        </span>

        <S.Button onClick={goToFirstPage} disabled={currentPage === 1}>
          <ChevronsLeftIcon size={15} />
        </S.Button>
        <S.Button onClick={goToPrevPage} disabled={currentPage === 1}>
          <ChevronLeftIcon size={15} />
        </S.Button>
        <S.Button onClick={goToNextPage} disabled={currentPage === totalPages}>
          <ChevronRightIcon size={15} />
        </S.Button>
        <S.Button onClick={goToLastPage} disabled={currentPage === totalPages}>
          <ChevronsRightIcon size={15} />
        </S.Button>
      </S.ContainerPages>
    </S.Container>
  )
}
