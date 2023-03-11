import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { useNavigate } from 'react-router-dom';

export const signin = (form, router) => async (dispatch) => {
  const navigate = useNavigate();

  try {
    const { data } = await api.signIn(form);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, router) => async (dispatch) => {
  const navigate = useNavigate();

  try {
    const { data } = await api.signUp(form);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
