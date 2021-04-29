import { call, all, put, takeLatest } from "redux-saga/effects";

import {
  logInSuccess,
  logInFail,
  logOutSuccess,
  logOutFail,
  signUpSuccess,
  signUpFail,
  getCurrentUserSuccess,
  getCurrentUserFail,
} from "../actionCreators/User";
import { doGet, doPost } from "../utils/request";

function* dosignUp({ obj, history }) {
  try {
    const response = yield doPost("/users/signup", obj);
    yield put(signUpSuccess(response.data));
  } catch (err) {
    const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
    yield put(signUpFail(err.response.data.message || err.message));
    yield call(delay, 2000);
    yield put(signUpFail());
  }
}

function* doLogIn({ obj, history, redirectUrl }) {
  try {
    const response = yield doPost("/users/login", obj);
    yield put(logInSuccess(response.data));

    if (redirectUrl) {
      history.push(redirectUrl);
    } else {
      history.push("/home");
    }
  } catch (err) {
    if (err.response.data && err.response.data.expired) {
      const delay = (time) =>
        new Promise((resolve) => setTimeout(resolve, time));
      yield put(logInFail(err.response.data.message));
      yield call(delay, 9000);
      yield put(logInFail());
    } else {
      const delay = (time) =>
        new Promise((resolve) => setTimeout(resolve, time));
      yield put(logInFail(err.response.data.message));
      yield call(delay, 2000);
      yield put(logInFail());
    }
  }
}

function* doLogOut() {
  try {
    yield doPost("/users/logout");
    yield put(logOutSuccess());
    // window.location = '/';
    // window.location.reload();
  } catch (err) {
    yield put(logOutFail(err.response.data.message));
  }
}

function* getCurrentUser({ history, redirectUrl }) {
  try {
    const response = yield doGet("/users/me");
    yield put(getCurrentUserSuccess(response.data));

    if (redirectUrl && redirectUrl !== "/") {
      const { location } = history;
      if (location.search) {
        history.push(`${redirectUrl}${location.search}`);
      } else {
        history.push(redirectUrl);
      }
    }
  } catch (err) {
    yield put(getCurrentUserFail(err.message));
  }
}

export default function* watcher() {
  yield all([
    takeLatest("SIGNUP", dosignUp),
    takeLatest("LOGIN", doLogIn),
    takeLatest("LOGOUT", doLogOut),
    takeLatest("GET_CURRENT_USER", getCurrentUser),
  ]);
}
