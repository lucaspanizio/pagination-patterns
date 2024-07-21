import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.25px;

  margin-bottom: 3px;
`

type ItemProps = {
  width?: string
  height?: string
}

export const Item = styled.div<ItemProps>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: ${shimmer} 1.2s ease-in-out infinite;
  height: ${({ height }) => height ?? '0.95rem'};
  width: ${({ width }) => width ?? '100%'};
  border-radius: 4px;
`
