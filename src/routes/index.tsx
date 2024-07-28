import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { InfiniteScroll } from '../pages/Infinite-Scroll'
import { PaginationPage } from '../pages/Pagination'
import { LoadMore } from '../pages/Load-More'
import { NoMatch } from '../pages/NoMatch'
import ErrorBoundary from '../utils/ErrorBondary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'load-more',
        element: <LoadMore />,
      },
      {
        path: 'infinite-scroll',
        element: <InfiniteScroll />,
      },
      {
        path: 'pagination',
        element: (
          <ErrorBoundary>
            <PaginationPage />
          </ErrorBoundary>
        ),
      },
      {
        index: true,
        element: <Navigate to="/load-more" replace />,
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
])
