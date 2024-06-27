import { createBrowserRouter } from 'react-router-dom';
import Detail from 'src/pages/detail/Detail';
import Home from 'src/pages/home/Home';
import NotFound from 'src/pages/notFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/detail',
    element: <Detail />,
    errorElement: <NotFound />,
  },
]);
