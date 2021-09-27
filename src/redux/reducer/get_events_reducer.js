import { GET_EVENTS_DATA_REQUEST, GET_EVENTS_DATA_REQUEST_SUCCESS, GET_EVENTS_DATA_REQUEST_FAILURE} from '../actions/get_events_action';

const initialState = {
    events: [],
    error: null,
    loading: false
};

export const EventsDataReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_EVENTS_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_EVENTS_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload
            };
        case GET_EVENTS_DATA_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };            
        default:
            return state;
    }
}