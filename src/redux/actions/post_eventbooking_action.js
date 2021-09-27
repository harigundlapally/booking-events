export const POST_EVENTBOOKING_DATA_REQUEST = 'POST_EVENTBOOKING_DATA_REQUEST';
export const POST_EVENTBOOKING_DATA_REQUEST_SUCCESS = 'POST_EVENTBOOKING_DATA_REQUEST_SUCCESS';
export const POST_EVENTBOOKING_DATA_REQUEST_FAILURE = 'POST_EVENTBOOKING_DATA_REQUEST_FAILURE';
export const RESET_EVENTBOOKING = 'RESET_EVENTBOOKING';

export const postEventBookingDataRequest = payload => ({
    type: POST_EVENTBOOKING_DATA_REQUEST,
    payload
});

export const postEventBookingDataRequestSuccess = payload => {
    return {
        type: POST_EVENTBOOKING_DATA_REQUEST_SUCCESS,
        payload
    }
};

export const postEventBookingDataRequestFailure = error => ({
    type: POST_EVENTBOOKING_DATA_REQUEST_FAILURE,
    error
});

export const resetEventBooking = () => ({
    type: RESET_EVENTBOOKING
});