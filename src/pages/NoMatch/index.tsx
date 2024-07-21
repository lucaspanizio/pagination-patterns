import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

export const NoMatch: React.FC = () => {
  return (
    <S.Container>
      <h2>Nothing to see here!</h2>
      <Link to="/">Go to the home page</Link>
    </S.Container>
  )
}
