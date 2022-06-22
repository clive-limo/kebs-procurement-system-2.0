import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import Router from 'next/router';
import type { FC } from 'react';
import React, { useState } from 'react';

const LoginForm: FC = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  onAuthStateChanged(auth, () => {
    Router.push('/home');
  });

  const handleLogin = async () => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    console.log(data.email);
  };

  return (
    <form
      className="flex h-[50vh] flex-col py-3 pl-8 pr-20 lg:h-[40vh]"
      autoComplete="off"
    >
      <label className="my-1 text-sm font-light text-dark-primary">EMAIL</label>
      <input
        onChange={(e: any) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
        type="email"
        id="email"
        value={data.email}
        placeholder="example@kebs.org"
        className="rounded-md border-[1px] border-dark-primary px-3 py-1 font-light"
        autoComplete="false"
      />
      <label className="my-3 text-sm font-light text-dark-primary">
        PASSWORD
      </label>
      <input
        onChange={(e: any) =>
          setData({
            ...data,
            password: e.target.value,
          })
        }
        type="password"
        id="password"
        placeholder="Password"
        className="rounded-md border-[1px] border-dark-primary px-3 py-1 font-light"
        autoComplete="false"
      />
      <button
        className="my-auto w-[150px] rounded-full bg-light-primary p-2 text-center text-sm font-semibold text-white"
        type="submit"
        onClick={handleLogin}
      >
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
