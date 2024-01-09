import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { noAuthApiService } from "./services/noauthService";
import { authApiService } from "./services/authService";

export const appReducers = combineReducers({
  [noAuthApiService.reducerPath]: noAuthApiService.reducer,
  [authApiService.reducerPath]: authApiService.reducer,
  auth: authSlice,
});

export const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "RESET") {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("token");
    state = undefined;
  }

  return appReducers(state, action);
};
