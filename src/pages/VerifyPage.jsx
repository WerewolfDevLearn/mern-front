import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import routes from 'src/routes';
import { verify } from 'src/redux/auth/authOps';

import usePHBState from '../redux/selectors';

export default function VerifyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sendCode, setSendCode] = useState(false);
  const {
    error,
    isLoading,
    user: {
      profile: { verifiedEmail }
    }
  } = usePHBState();

  const onVerify = (event) => {
    event.preventDefault();
    const verifycode = event.target.code.value;
    dispatch(verify(verifycode));
    setSendCode(true);
  };

  useEffect(() => {
    if (!error && !isLoading && sendCode && verifiedEmail) {
      navigate(routes.items);
    }
  }, [error, isLoading, sendCode, verifiedEmail]);

  return (
    <>
      <form id="verifyCode" onSubmit={onVerify}>
        <label htmlFor="code">Enter verifycation code</label>
        <input type="text" autoComplete="off" id="code" name="code" />
        <button type="submit">Press to verify your email</button>
      </form>
    </>
  );
}
