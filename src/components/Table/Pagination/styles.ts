import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    justify-content: flex-end;

    & > span:first-of-type {
      display: none;
    }
  }
`

export const ContainerPages = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  background-color: #d4e6d1;

  @media (max-width: 480px) {
    padding: 4px;
    font-size: 0.8rem;
  }
`
