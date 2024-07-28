import { styled } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  line-height: 2rem;
  border-spacing: 0px;
  border-collapse: collapse;

  tr {
    position: relative;
  }

  th,
  td {
    padding: 0 0.75rem;
    text-align: left;
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    background-color: #d4e6d1;
  }

  tr:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.75rem;
    width: calc(100% - 2rem);
    height: 1px;
    background-color: #d4e6d1;
  }
`

export const Loading = styled.tr`
  td {
    padding: 2rem;
    text-align: center;
  }
`
