import { all } from 'redux-saga/effects';

import userWatcher from './User';

export default function* rootWatchers() {
  yield all([
    userWatcher(),
  ]);
}
