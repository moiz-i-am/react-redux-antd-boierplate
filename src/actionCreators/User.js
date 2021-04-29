export const signUp = (obj, history) => ({
  type: "SIGNUP",
  obj,
  history,
});

export const signUpSuccess = (data) => ({
  type: "SIGNUP_SUCCESS",
  data,
});

export const signUpFail = (error) => ({
  type: "SIGNUP_FAIL",
  error,
});

export const logIn = (obj, history, redirectUrl) => ({
  type: "LOGIN",
  obj,
  history,
  redirectUrl,
});

export const logInSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
  data: payload,
});

export const logInFail = (error) => ({
  type: "LOGIN_FAIL",
  error,
});

export const logOut = () => ({
  type: "LOGOUT",
});

export const logOutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});

export const logOutFail = (error) => ({
  type: "LOGOUT_FAIL",
  error,
});


export const getCurrentUser = (obj, history, redirectUrl) => ({
  type: "GET_CURRENT_USER",
  obj,
  history,
  redirectUrl,
});

export const getCurrentUserSuccess = (data) => ({
  type: "GET_CURRENT_USER_SUCCESS",
  data,
});

export const getCurrentUserFail = (error) => ({
  type: "GET_CURRENT_USER_FAIL",
  error,
});
