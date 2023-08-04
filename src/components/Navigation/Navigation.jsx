import { NavLink } from 'react-router-dom';

import routes from '../../routes.js';

export const Navigation = () => {
  return (
    <ul>
      <li key="NavigationRegister">
        <NavLink to={routes.register}>Register</NavLink>
      </li>
      <li key="NavigationLogin">
        <NavLink to={routes.login}>Login</NavLink>
      </li>
    </ul>
  );
};
