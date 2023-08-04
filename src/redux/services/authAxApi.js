import axios from 'axios';

axios.defaults.baseURL = 'https://mern-backend-test2.onrender.com/api';

export async function userRegister(userData) {
  const response = await axios.post('users/register', userData);
  return response.data;
}
export async function userLogin(loginData) {
  const response = await axios.post('/users/login', loginData);
  const data = response.data;
  return data;
}
export async function userLogOut() {
  const response = await axios.post('/users/logout');
  const data = response.data;
  return data;
}
export async function getCurrentUser(tokenAuth) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await axios.get('/users/current');
  const data = response.data;
  return data;
}

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
};
