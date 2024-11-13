import './global.css'

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';

import './global.css';

const App = () => {
  return (
  <div className='container'>
    <header>
        <h1>Dětský koutek</h1>
    </header>
    <main>
    <nav className='nav-container'>
        <Link className='link-nav' to="/homepage">HomePage</Link>
        <Link className='link-nav' to="/about">O nás</Link>
        <Link className='link-nav' to="/contact">Kontakt</Link>
        <Link className='link-nav' to="/pobocky">Pobočky</Link>
      </nav>
      <Outlet />
    </main>
    <footer>
      <p>2024</p>
    </footer>
  </div>
)}

const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:
    [
      {
        path: 'homepage',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'pobocky',
        element: <CentersPage />,
        children:
        [
          {
          path: ':centerId',
          element: <CenterDetail />
          }
        ]
      },
    ]
    },
]);


createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router}/>);
