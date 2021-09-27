import {call, put, takeLatest} from 'redux-saga/effects';
import { postEventBookingDataRequestFailure, postEventBookingDataRequestSuccess, POST_EVENTBOOKING_DATA_REQUEST } from '../actions/post_eventbooking_action';
import {eventBookingData} from '../api/post_eventbooking_api';

export function* postEventBookingSaga({payload}) {
    try {
        const {data} = yield call(eventBookingData,payload);
        if(data) {
            yield put(postEventBookingDataRequestSuccess(data));
        }
    } catch (error) {
        yield put(postEventBookingDataRequestFailure(error));
    }
}

export default function* postEventBookingSagas() {
    yield takeLatest(POST_EVENTBOOKING_DATA_REQUEST, postEventBookingSaga);
}