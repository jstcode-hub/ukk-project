import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { signin, signup } from '../actions/auth.js';
import { getError } from '../utils/error.js';

// const initialState = { nik: "", firstName: "", lastName: "", telp: "", email: "", password: "", confirmPassword: "" };

const Auth = () => {
  const navigate = useNavigate();
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
        // navigate('/');
      } else {
        dispatch(signin(form));
        // navigate('/');
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-sky-500 to-fuchsia-500">
      {/* <div> */}
      <form className="px-16 py-10 border-2 rounded-lg bg-white shadow-lg flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <h3 className="text-center text-7xl font-extrabold mb-4" style={{ fontFamily: 'Josefin Sans' }}>
          {isSignup ? 'Sign up' : 'Sign in'}
        </h3>
        {/* <div> */}
        {isSignup && (
          <>
            <div className="flex flex-col mb-4">
              <label for="nik">NIK</label>
              <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="text" id="nik" {...register('nik', { required: 'Masukkan NIKmu' })}></input>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex flex-col mr-2">
                <label for="firstName">Nama Depan</label>
                <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="text" id="firstName" {...register('firstName')}></input>
              </div>

              <div className="flex flex-col ml-2">
                <label for="lastName">Nama Belakang</label>
                <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="text" id="lastName" {...register('lastName')}></input>
              </div>
            </div>

            {/* <div className="flex flex-col mb-4">
              <label for="lastName">Nama Belakang</label>
              <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="text" id="lastName" {...register("lastName")}></input>
            </div> */}

            <div className="flex flex-col mb-4">
              <label for="telp">No. Telp</label>
              <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="tel" id="telp" {...register('telp')}></input>
            </div>
          </>
        )}
        <div className="flex flex-col mb-4">
          <label for="email">Email</label>
          <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="email" id="email" {...register('email')}></input>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex flex-col mr-2">
            <label for="password">Password</label>
            <input className="w-full py-1 px-2 border-2 border-slate-700 rounded" type="password" id="password" {...register('password')}></input>
          </div>

          {isSignup && (
            <div className="flex flex-col ml-2">
              <label for="confirmPassword">Confirm Password</label>
              <input
                className="w-full py-1 px-2 border-2 border-slate-700 rounded"
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: 'Masukkan konfirmasi password',
                  validate: (value) => value === getValues('password'),
                })}
              />
            </div>
          )}
        </div>
        {/* </div> */}
        <div className="mb-4">
          <button className="rounded-full px-8 py-2 bg-blue-700 text-white font-bold float-right" type="submit">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </form>
      <button className="text-center mt-3 font-medium" onClick={switchMode}>
        {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
      </button>
      {/* </div> */}
    </div>
  );
};

export default Auth;
