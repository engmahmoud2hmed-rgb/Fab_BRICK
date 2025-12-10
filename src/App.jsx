import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import Samples from './pages/Samples';
import Shop from './pages/Shop';
import ShopProductDetail from './pages/ShopProductDetail';
import Contact from './pages/Contact';
import BoxDetail from './pages/BoxDetail';
import Option2Detail from './pages/Option2Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Partner from './pages/Partner';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const routes = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'samples', element: <Samples /> },
        { path: 'samples/:slug', element: <BoxDetail /> },
        { path: 'samples/option2/:slug', element: <Option2Detail /> },
        { path: 'shop', element: <Shop /> },
        { path: 'shop/:slug', element: <ShopProductDetail /> },
        { path: 'contact', element: <Contact /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'partner', element: <Partner /> }, // Added Partner route
        {
          path: 'checkout',
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          )
        },
        { path: '*', element: <Home /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
