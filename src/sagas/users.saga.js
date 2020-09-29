import { takeEvery, call, fork } from "redux-saga/effects";
import * as actions from "../actions/users.action";
import * as api from "../api/users.api";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_SUCCESS, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
