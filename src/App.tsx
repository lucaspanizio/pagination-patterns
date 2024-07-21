import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import GlobalStyle from './global.styles.ts'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
