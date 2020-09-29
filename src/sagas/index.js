import usersSaga from "./users.saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...usersSaga]);
}
