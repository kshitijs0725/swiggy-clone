import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import AboutPage from './components/About';
import ContactPage from './components/Contact';

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
    }]
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
