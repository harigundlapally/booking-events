import { POST_EVENTBOOKING_DATA_REQUEST_SUCCESS, POST_EVENTBOOKING_DATA_REQUEST_FAILURE, POST_EVENTBOOKING_DATA_REQUEST, RESET_EVENTBOOKING} from '../actions/post_eventbooking_action';

const initialState = {
    eventBooked: {},
    eventBookedSuccess: false,
    error: null,
    loading: false
};

export const EventBookingReducer = (state= initialState, action) => {
    switch (action.type) {
        case POST_EVENTBOOKING_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                eventBooked: action.payload
            };
        case POST_EVENTBOOKING_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                eventBookedSuccess: true
            };
        case POST_EVENTBOOKING_DATA_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case RESET_EVENTBOOKING:
            return initialState;       
        default:
            return state;
    }
}