import React from 'react'
import { Product } from '../../services/api'
import { useFetchProducts } from '../../services/hooks/useFetchProducts'
import { formatCurrency } from '../../utils/formatCurrency'
import { Table } from '../../components/Table'
import { Pagination } from '../../components/Table/Pagination'
import * as S from './styles'
import { Link2Icon } from 'lucide-react'

const headers = [
  { key: 'title', label: 'Produto' },
  { key: 'price', label: 'Preço' },
  { key: 'link', label: '' },
]

export const PaginationPage: React.FC = () => {
  const updateData = (data: Product[]) => {
    return data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: formatCurrency(item.price),
        link: (
          <a href={item.permalink} target="_blank">
            <Link2Icon />
          </a>
        ),
      }
    })
  }

  const { data, isLoading } = useFetchProducts({ updateData })

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContainerTable>
          <Table
            rows={data?.products ?? []}
            columns={headers}
            isLoading={isLoading}
            keyExtractor={(item) => item.id}
          />
        </S.ContainerTable>

        <Pagination total={data?.total ?? 0} />
      </S.Wrapper>
    </S.Container>
  )
}
