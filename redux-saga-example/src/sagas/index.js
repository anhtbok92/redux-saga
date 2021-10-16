import { put, call, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions'
import { api } from '../apis'

// 1. Dispatch 1 action tên là : RECEIVE_PRODUCTS
export function* getAllProducts() {
  const products = yield call(api.getProducts)
  yield put(actions.receiveProducts(products))
}

// 2. Lắng nghe việc phát đi action GET_ALL_PRODUCTS và thực hiện gọi hàm getAllProducts
export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}

export default function* root() {
  yield all([
      getAllProducts(),
      watchGetProducts(),
  ])
}
