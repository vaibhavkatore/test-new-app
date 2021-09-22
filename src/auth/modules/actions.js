import Constants from './constants';
import { URL } from '../../env';




const getUser = (handleSuccess,handleError) => {
    return function (dispatch) {
        dispatch({
            type: Constants.GET_USER_REQUEST
        });
        return fetch(`${URL}api/v1/jobs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + token
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
    getUser
};