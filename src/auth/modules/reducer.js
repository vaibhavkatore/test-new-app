import Constants from './constants';

const INITIAL_STATE = {
    error: undefined,
    isLoading: false,
    jobList: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case Constants.GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_USER_REQUEST_SUCCESS:
            return {
                ...state,
                jobList: action.payload,
                isLoading: false

            };
        case Constants.GET_USER_REQUEST_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false

            };
        default:
            return state;
    }
}
