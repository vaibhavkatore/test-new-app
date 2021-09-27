import Constants from './constants';
import { URL } from '../../env';

const getJobs = (handleSuccess, handleError) => {
    return function (dispatch) {
        dispatch({
            type: Constants.GET_USER_REQUEST
        });
        return fetch(`${URL}api/v1/jobs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
const getJobDetail = (id,handleSuccess, handleError) => {
    return function (dispatch) {
        dispatch({
            type: Constants.GET_JOB_DETAIL_REQUEST
        });
        return fetch(`${URL}api/v1/jobs/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        })
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: Constants.GET_JOB_DETAIL_REQUEST_FAIL,
                        payload: body.error
                    });
                    handleError();
                } else {
                    dispatch({
                        type: Constants.GET_JOB_DETAIL_REQUEST_SUCCESS,
                        payload: body
                    });
                    handleSuccess(body);
                }
            });
    }
}

export default {
    getJobs,
    getJobDetail
};