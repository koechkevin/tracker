import { combineReducers } from 'redux';
import {
  CREATE_ENTRY_FAILURE, GET_ALL_USERS, GET_ALL_USERS_FAILURE, TYPE,
} from '../constants';

const initialState = {
  users: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state, users: action.data.users,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state, errors: action.errors,
      };
    default:
      return state;
  }
};

export const createEntry = (state = {
  errors: [],
}, action) => {
  switch (action.type) {
    case CREATE_ENTRY_FAILURE:
      return { ...state, errors: action.error.response.data.errors };
    default:
      return state;
  }
};
export default combineReducers({
  reducer, entries: createEntry,
});
