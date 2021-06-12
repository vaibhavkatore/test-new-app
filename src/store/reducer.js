import { combineReducers } from 'redux';
import authReducer from '../auth/modules/reducer';

export default combineReducers({
    auth: authReducer,
});
