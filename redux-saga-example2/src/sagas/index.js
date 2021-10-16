import { put, takeLatest, all } from 'redux-saga/effects';
import CallApi from '../apis';

function* fetchNews() {
    const json = yield CallApi();
    yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
