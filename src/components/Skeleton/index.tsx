import React from 'react'
import * as S from './styles'

interface SkeletonProps {
  lines?: number
}

export const Skeleton: React.FC<SkeletonProps> = ({ lines = 10 }) => {
  return (
    <S.Wrapper>
      {Array.from({ length: lines }).map((_, index) => (
        <S.Item key={index} />
      ))}
    </S.Wrapper>
  )
}
