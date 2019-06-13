import {
  GET_ALL_USERS, GET_ALL_USERS_FAILURE, CREATE_ENTRY_SUCCESS, CREATE_ENTRY_FAILURE,
} from '../constants/index';
import api from '../../api';


const getAllUsersSuccess = data => ({
  type: GET_ALL_USERS,
  data,
});

const getAllUsersFailure = error => ({
  type: GET_ALL_USERS_FAILURE,
  error,
});

const createEntrySuccess = response => ({
  type: CREATE_ENTRY_SUCCESS, response,
});

const createEntryFailure = error => ({
  type: CREATE_ENTRY_FAILURE,
  error,
});

const getAllUsers = () => async (dispatch) => {
  try {
    const { getAllUsers: usersApi } = api;
    const response = await usersApi();
    dispatch(getAllUsersSuccess(response.data));
  } catch (error) {
    dispatch(getAllUsersFailure(error));
  }
};

const createEntry = (data, callBack, final) => async (dispatch) => {
  try {
    const { createEntry: createEntryApi } = api;
    const response = await createEntryApi(data);
    dispatch(createEntrySuccess(response));
    callBack();
  } catch (error) {
    dispatch(createEntryFailure(error));
  } finally {
    final();
  }
};

export default {
  getAllUsersSuccess, getAllUsers, getAllUsersFailure, createEntry,
};