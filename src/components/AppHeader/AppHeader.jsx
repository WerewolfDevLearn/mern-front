import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import usePHBState from '../../redux/selectors';

function AppHeader() {
  const state = usePHBState();
  const verifiedEmail = state.user.profile.verifiedEmail;
  const userName = state.user.profile.name;
  return <header>{verifiedEmail ? <UserMenu userName={userName} /> : <Navigation />}</header>;
}

export default AppHeader;
