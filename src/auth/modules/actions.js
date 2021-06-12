import Constants from './constants';
import { URL } from '../../env';


const login = (handleSuccess, handleFailure, data) => {
    return function (dispatch) {
        dispatch({
            type: Constants.POST_LOGIN_REQUEST
        });
        return fetch(`${URL}/api/v1/user/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: Constants.POST_LOGIN_FAIL,
                        payload: body.error
                    });
                 
                    handleFailure(response, body);
                } else {
                    localStorage.setItem('test_user', JSON.stringify(body));
                    dispatch({
                        type: Constants.POST_LOGIN_SUCCESS,
                        payload: body
                    });
                    handleSuccess(body);
                }
            });
    }
}

const signUp = (handleSuccess, handleError, data) => {
    return function (dispatch) {
        dispatch({
            type: Constants.POST_SIGNUP_REQUEST
        });
        return fetch(`${URL}/api/v1/user`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: Constants.POST_SIGNUP_FAIL,
                        payload: body.error
                    });
                    handleError();
                } else {
                    dispatch({
                        type: Constants.POST_SIGNUP_SUCCESS,
                        payload: body
                    });
                    handleSuccess(body);
                }
            });
    }
}

const logOut = () =>{
    localStorage.clear();
    return function (dispatch) {
        dispatch({
            type: Constants.LOGOUT_REQUEST,
        });
    }
}


const getUser = (handleSuccess,handleError,token) => {
    return function (dispatch) {
        dispatch({
            type: Constants.GET_USER_REQUEST
        });
        return fetch(`${URL}/api/v1/user/info`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
           
        })
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: Constants.GET_USER_REQUEST_FAIL,
                        payload: body.error
                    });
                    handleError();
                } else {
                    dispatch({
                        type: Constants.GET_USER_REQUEST_SUCCESS,
                        payload: body
                    });
                    handleSuccess(body);
                }
            });
    }
}

export default {
    login,
    logOut,
    signUp,
    getUser
};