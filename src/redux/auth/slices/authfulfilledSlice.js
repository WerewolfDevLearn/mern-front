import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { register, userlogin, logOut, getCurrent, verify } from '../authOps';

const initialState = {
  profile: { email: '', name: '', avatarUrl: '', verifiedEmail: '' },
  token: ''
};

const userHandler = (state, { payload }) => {
  state.profile.email = payload.user.email;
  state.profile.name = payload.user.name;
  state.profile.avatarUrl = payload.user.avatarUrl;
  state.profile.verifiedEmail = payload.user.verifiedEmail;
  state.token = payload.token;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, userHandler)
      .addCase(userlogin.fulfilled, userHandler)
      .addCase(verify.fulfilled, userHandler)
      .addCase(getCurrent.fulfilled, userHandler)
      .addCase(logOut.fulfilled, () => initialState);
  }
});

const persistUserConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
};

export const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
