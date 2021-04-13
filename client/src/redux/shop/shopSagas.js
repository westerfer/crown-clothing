import {takeLatest, call, put, all} from 'redux-saga/effects'

import ShopActionTypes from "./shopTypes";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebaseUtils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shopActions";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}

export function* shopSagas() {
    yield all([(
        call(fetchCollectionsStart)
    )])
}

