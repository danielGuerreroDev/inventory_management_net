import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const routes = [
    {
      path: '/',
      exact: false,
      page: null,
    },
    {
      path: '/pages/Dashboard',
      exact: false,
      page:
        <Dashboard />,
    },
    {
      path: '/pages/Products',
      exact: false,
      page:
        <Products />,
    },
  ];

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <>
      {isAuthenticated ? null : <Home />}
      <Routes>
        {routes.map((route, index) => (
          <Route
            element={route.page}
            exact={route.exact}
            key={index}
            path={route.path}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
