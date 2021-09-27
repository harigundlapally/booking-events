import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_EVENTS_DATA_REQUEST, getEventsDataRequestSuccess, getEventsDataRequestFailure} from '../actions/get_events_action';
import {eventsData} from '../api/get_events_api';

export function* getEventsSaga() {
    try {
        const {data} = yield call(eventsData);
        if(data) {
            yield put(getEventsDataRequestSuccess(data));
        }
    } catch (error) {
        yield put(getEventsDataRequestFailure(error));
    }
}

export default function* getEventsSagas() {
    yield takeLatest(GET_EVENTS_DATA_REQUEST, getEventsSaga);
}