import { css, styled } from 'styled-components'

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e7;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;
  padding: 0.5rem;
`

export const MenuList = styled.ul`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  list-style-type: none;
  margin: 0;
`

type TMenuItem = {
  $isActive: boolean
}

export const MenuItem = styled.li<TMenuItem>`
  padding: 0.7rem;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #fcfcfc;
      background-color: #a3e635;
    `};
`
