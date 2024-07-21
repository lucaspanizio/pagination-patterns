import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.25px;

  margin-bottom: 3px;
`

const Item = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: ${shimmer} 1.2s ease-in-out infinite;
  height: 0.95rem;
  width: 100%;
  border-radius: 4px;
`

export { Wrapper, Item }
