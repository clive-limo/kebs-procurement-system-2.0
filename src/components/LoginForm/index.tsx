import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import Router from 'next/router';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

const LoginForm: FC = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const user = auth.currentUser;
    onAuthStateChanged(auth, () => {
      if (user) {
        Router.push('/home');
      }
    });
  });

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      if (data.email === 'test2@gmail.com') {
        localStorage.setItem('email', data.email);
        localStorage.setItem('password', data.password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-[50vh] flex-col py-3 pl-8 pr-20 lg:h-[40vh]">
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
    </div>
  );
};

export default LoginForm;
