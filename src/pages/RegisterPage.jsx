import { useDispatch } from 'react-redux';

import { register } from '../redux/auth/authOps';
import { RegisterForm } from '../components/Forms/index';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const callBack = (data) => dispatch(register(data));

  return (
    <>
      <RegisterForm
        option="register"
        title="User register"
        buttonName="Register"
        onSubmitForm={callBack}
      />
    </>
  );
}
