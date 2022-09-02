import { ActionTypes } from '@mui/base';
import axios from 'axios';
import { GET_CHATS, FAILED_TO_LOAD_CHATS } from './actionTypes';


const URL = 'http://localhost:6001/users/chats';

export const getAllChats = () => async (dispatch) => {
  try {
    const response = await axios.get(URL);
    if (response.data.status === 200) {
      dispatch({
        type: GET_CHATS,
        payload: { chats: response.data.chats },
      });
    }
  } catch (err) {
    dispatch({
      type: FAILED_TO_LOAD_CHATS,
      payload: 'failed to load chats',
    });
  }
};