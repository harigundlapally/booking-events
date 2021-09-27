export const GET_EVENTS_DATA_REQUEST = 'GET_EVENTS_DATA_REQUEST';
export const GET_EVENTS_DATA_REQUEST_SUCCESS = 'GET_EVENTS_DATA_REQUEST_SUCCESS';
export const GET_EVENTS_DATA_REQUEST_FAILURE = 'GET_EVENTS_DATA_REQUEST_FAILURE';

export const getEventsDataRequest = () => ({
    type: GET_EVENTS_DATA_REQUEST
});

export const getEventsDataRequestSuccess = payload => ({
    type: GET_EVENTS_DATA_REQUEST_SUCCESS,
    payload
});

export const getEventsDataRequestFailure = error => ({
    type: GET_EVENTS_DATA_REQUEST_FAILURE,
    error
});