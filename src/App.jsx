import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import ResMenu from './components/ResMenu';
import Cart from './components/Cart';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [  
    {
      path: "/",
      element: <Body />
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: "/restaurants/:resId",
      element: <ResMenu />
    },
    {
      path: "/cart",
      element: <Cart />
    }
]
  }
]);

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
