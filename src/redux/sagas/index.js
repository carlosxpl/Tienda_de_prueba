import { fork, takeLatest, call, put } from "@redux-saga/core/effects"
import { setProductsData, ACTIONS } from '../actions';
import { GET } from "../../services/http.service";

export function* rootSaga() {
    yield fork(productSaga);
}

// El saga quedará a la escucha de la ultima acción ejecutada
// del tipo LOAD_PROODUCTS, gracias al método takeLatest, y ejecutará
// la función indicada como segundo argumento cuando detecte esa acción.
function* productSaga() {
    yield takeLatest(ACTIONS.LOAD_PRODUCTS, loadProductosArray);
}

// También como generadora, esta función obtendrá el listado de productos
// utilizando axios, y luego lanzará una nueva acción para actualizar el
// listado, en lugar de con dispatch, utilizando el método propio put.
function* loadProductosArray() {
    const products = yield call(() => GET('https://fakestoreapi.com/products'));
    yield put(setProductsData(products));
}