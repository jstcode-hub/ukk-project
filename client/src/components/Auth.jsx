import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../actions/auth.js';
import { getError } from '../utils/error.js';

// const initialState = { nik: '', firstName: '', lastName: '', telp: '', email: '', password: '', confirmPassword: '' };
const navigate = useNavigate();

const Auth = () => {
  // const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const switchMode = () => {
    // setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const submitHandler = async ({ nik, firstName, lastName, telp, email, password }) => {
    const form = { nik: nik, firstName: firstName, lastName: lastName, telp: telp, email: email, password: password };
    try {
      if (isSignup) {
        dispatch(signup(form));
      } else {
        dispatch(signin(form));
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (isSignup) {
  //     dispatch(signup(form));
  //   } else {
  //     dispatch(signin(form));
  //   }
  // };

  return (
    <div>
      <div>
        <h3>{isSignup ? 'Sign up' : 'Sign in'}</h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            {isSignup && (
              <>
                <input type="text" id="nik" {...register('nik', { required: 'Masukkan NIKmu' })}></input>
                <input type="text" id="firstName" {...register('firstName')}></input>
                <input type="text" id="lastName" {...register('lastName')}></input>
                <input type="tel" id="telp" {...register('telp')}></input>
              </>
            )}
            <input type="email" id="email" {...register('email')}></input>
            <input type="password" id="password" {...register('password')}></input>
            {isSignup && (
              <input
                className="w-full"
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: 'Masukkan konfirmasi password',
                  validate: (value) => value === getValues('password'),
                })}
              />
            )}
          </div>
          <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
          <div>
            <div>
              <button onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
