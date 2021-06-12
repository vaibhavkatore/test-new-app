import Constants from './constants';

const INITIAL_STATE = {
    token: '',
    error: undefined,
    signUp: {},
    isUserLoggedIn:false,
    isLoading:false,
    userlist:{}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    
        case Constants.POST_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.POST_LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isUserLoggedIn:true,
                isLoading:false
            };
        case Constants.POST_LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
                isUserLoggedIn:false,
                isLoading:false

            };
        case Constants.POST_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.POST_SIGNUP_SUCCESS:
            return {
                ...state,
                signUp: action.payload,
                isLoading:false

            };
        case Constants.POST_SIGNUP_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading:false

            };
            case Constants.GET_USER_REQUEST:
                return {
                    ...state,
                    isLoading: true
                };
            case Constants.GET_USER_REQUEST_SUCCESS:
                return {
                    ...state,
                    userlist: action.payload,
                    isLoading:false
    
                };
            case Constants.GET_USER_REQUEST_FAIL:
                return {
                    ...state,
                    error: action.error,
                    isLoading:false
    
                };
        case Constants.LOGOUT_REQUEST:
            return INITIAL_STATE;
        default:
            return state;
    }
}
