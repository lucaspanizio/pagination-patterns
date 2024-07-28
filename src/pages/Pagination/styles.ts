import { styled } from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 50%;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContainerTable = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ccc;
  overflow-x: auto;
`
