import React from 'react'
import * as S from './styles'

type SkeletonItem = { width: string; height?: string }

type SkeletonProps = {
  lines?: number
  items?: SkeletonItem[]
}

export const Skeleton: React.FC<SkeletonProps> = ({ lines = 10, items }) => {
  const generateRandomSkeletons = (): SkeletonItem[] => {
    return Array.from({ length: lines }, () => ({
      // Largura aleatória entre 50% e 100%
      width: `${Math.floor(Math.random() * (100 - 50 + 1)) + 50}%`,
      // Altura aleatória entre 15px e 30px
      // height: `${Math.floor(Math.random() * (30 - 15 + 1)) + 15}px`,
    }))
  }

  if (
    Array.isArray(items) &&
    items.every(
      ({ width, height }) =>
        typeof width === 'string' && (!height || typeof height === 'string')
    )
  ) {
    return (
      <S.Wrapper>
        {items.map((skeleton, index) => (
          <S.Item key={index} width={skeleton.width} height={skeleton.height} />
        ))}
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      {generateRandomSkeletons().map((props, index) => (
        <S.Item key={index} {...props} />
      ))}
    </S.Wrapper>
  )
}
