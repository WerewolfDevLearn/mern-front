import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppHeader from '../AppHeader/AppHeader';
import Loader from '../Loader/Loader';
import usePHBState from '../../redux/selectors';

import ContainerSTL from '../Layout/Layout.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { isLoading } = usePHBState();

  return (
    <div className={ContainerSTL.container}>
      <AppHeader />
      <ToastContainer />
      <hr />
      <Outlet />
      {isLoading && <Loader />}
    </div>
  );
};

export default Layout;
