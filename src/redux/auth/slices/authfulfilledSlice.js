import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { register, userlogin, logOut, getCurrent } from '../authOps';

const initialState = {
  profile: { email: '', name: '', avatarUrl: '' },
  token: ''
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.profile.email = payload.email;
        state.profile.name = payload.name;
        state.profile.avatarUrl = payload.avatarUrl;
        state.token = payload.token;
      })
      .addCase(userlogin.fulfilled, (state, { payload }) => {
        state.profile.email = payload.user.email;
        state.profile.name = payload.user.name;
        state.profile.avatarUrl = payload.user.avatarUrl;
        state.token = payload.token;
      })
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.profile.email = payload.user.email;
        state.profile.name = payload.user.name;
        state.profile.avatarUrl = payload.user.avatarUrl;
      })
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
