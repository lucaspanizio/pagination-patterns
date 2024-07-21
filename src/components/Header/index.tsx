import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

const MENUS = [
  { pathname: '/load-more', label: 'Load More' },
  { pathname: '/infinite-scroll', label: 'Infinite Scroll' },
  { pathname: '/pagination', label: 'Pagination' },
]

export const Header: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <S.Header>
      <S.MenuList>
        {MENUS.map((item) => (
          <S.MenuItem isActive={pathname === item.pathname}>
            <Link to={item.pathname}>{item.label}</Link>
          </S.MenuItem>
        ))}
      </S.MenuList>
    </S.Header>
  )
}
