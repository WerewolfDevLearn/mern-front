import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import usePHBState from '../../redux/selectors';

function AppHeader() {
  const state = usePHBState();
  const token = state.user.token;
  const userName = state.user.profile.name;
  return <header>{token ? <UserMenu userName={userName} /> : <Navigation />}</header>;
}

export default AppHeader;
