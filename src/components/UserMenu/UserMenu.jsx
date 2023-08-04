import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/authOps';

import UserStyle from './UserMenu.module.css';

function UserMenu({ userName }) {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div className={UserStyle.list}>
      <p key="userName" className={UserStyle.navLink}>
        {userName}
      </p>

      <button type="button" className={UserStyle.btn} onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}
export default UserMenu;

UserMenu.propTypes = {
  userName: PropTypes.string.isRequired
};
