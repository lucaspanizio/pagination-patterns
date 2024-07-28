import { TableHTMLAttributes } from 'react'
import * as S from './styles'

type ExtractorObject = {
  [key: string]: any
}

type KeyExtractor<T> = (item: T) => string | number

interface Column {
  key: string
  label: string
}

interface ITableProps<T extends ExtractorObject>
  extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column[]
  rows: T[]
  isLoading: boolean
  keyExtractor: KeyExtractor<T>
}

export const Table = <T extends ExtractorObject>({
  columns,
  rows,
  isLoading,
  keyExtractor,
  ...props
}: ITableProps<T>) => {
  return (
    <>
      <S.Table {...props}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <S.Loading>
              <td colSpan={columns.length}>Loading...</td>
            </S.Loading>
          ) : (
            rows.map((row) => (
              <tr key={keyExtractor(row)}>
                {columns.map((column) => (
                  <td key={`column_${keyExtractor(row)}`}>
                    {row[column.key] ?? ''}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </S.Table>
    </>
  )
}
