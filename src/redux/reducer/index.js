import {combineReducers} from 'redux';
import {EventsDataReducer} from './get_events_reducer';
import {EventBookingReducer} from './post_eventbooking_reducer';

export const rootReducer = combineReducers({
    EventsDataReducer,
    EventBookingReducer
});