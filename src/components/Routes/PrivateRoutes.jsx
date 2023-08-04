import { Outlet, Navigate } from 'react-router-dom';

import usePHBState from '../../redux/selectors';

import routes from '../../routes';
export default function PrivateRoutes() {
  const {
    user: { profile }
  } = usePHBState();

  return profile.verifiedEmail ? <Outlet /> : <Navigate to={routes.login} />;
}
