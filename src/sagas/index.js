import { takeEvery } from 'redux-saga/effects'

import getIP from './ipSagas'

function *index(){
    yield takeEvery('LOAD_SAGA_REQUEST', getIP)
}

export default index