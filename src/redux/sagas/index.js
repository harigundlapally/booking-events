import {all} from 'redux-saga/effects';
import getEventsSagas from './get_events_saga';
import postEventBookingSagas from './post_eventbooking_saga';

export default function* rootSaga() {
    yield all([
        getEventsSagas(),
        postEventBookingSagas()
    ])
};