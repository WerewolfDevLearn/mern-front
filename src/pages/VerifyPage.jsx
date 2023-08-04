import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { verify } from 'src/redux/auth/authOps';

export default function VerifyPage() {
  const { verifycode } = useParams();
  const dispatch = useDispatch();
  const onVerify = () => {
    dispatch(verify(verifycode));
  };
  return (
    <>
      <button type="button" onClick={onVerify}>
        Press to verify your email
      </button>
    </>
  );
}
