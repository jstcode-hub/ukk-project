import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { redirect } from 'react-router';

export const signin = (form, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);

    dispatch({ type: AUTH, data });

    return redirect('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(form);

    dispatch({ type: AUTH, data });

    return redirect('/auth');
  } catch (error) {
    console.log(error);
  }
};
