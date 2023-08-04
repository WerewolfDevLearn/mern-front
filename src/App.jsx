import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoutes from './components/Routes/PrivateRoutes';
import PubliceRourtes from './components/Routes/PubliceRoutes';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import VerifyPage from './pages/VerifyPage';
import RegisterPage from './pages/RegisterPage';
import ItemsPage from './pages/ItemPage';

import routes from './routes.js';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route element={<PubliceRourtes />}>
            <Route index element={<HomePage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.register} element={<RegisterPage />} />
            <Route path={routes.verify} element={<VerifyPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={routes.items} element={<ItemsPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
