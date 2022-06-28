import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';

const UsersPanel: FC = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

  const openConfirmationPopup = () => {
    setShowPopup(!showPopup);
  };
  const handleUserCreation = () => {
    localStorage.setItem('newUserEmail', userDetails.email);
    localStorage.setItem('newUserPassword', userDetails.password);
    router.push('/create_user');
  };
  return (
    <div>
      <p className="m-5 text-[30px] font-bold text-white">Users</p>
      <div className="mx-auto h-[35vh] w-[18vw] rounded-lg border bg-transparent"></div>
      <p className="m-5 text-[30px] font-bold text-white">Create User</p>
      <div className="mx-auto w-[18vw] px-3">
        <label className="my-3 font-medium text-white">Email</label>
        <input
          type="text"
          placeholder="User Email"
          className="h-[40px] w-full rounded-md border bg-inherit p-3 text-white"
          onChange={(e: any) => {
            setUserDetails({ ...userDetails, email: e.target.value });
          }}
          value={userDetails.email}
        />
        <label className="my-3 font-medium text-white">Password</label>
        <input
          type="password"
          autoComplete="off"
          placeholder="User Password"
          className="h-[40px] w-full rounded-md border bg-inherit p-3 text-white"
          onChange={(e: any) => {
            setUserDetails({ ...userDetails, password: e.target.value });
          }}
          value={userDetails.password}
        />
        <button
          onClick={openConfirmationPopup}
          className="my-5 w-[150px] rounded-lg bg-light-secondary p-1 font-bold text-light-primary"
        >
          Create
        </button>
        <div
          className={clsx(
            'absolute mx-auto w-[16vw] rounded-2xl bg-white',
            showPopup ? 'visible' : 'hidden'
          )}
        >
          <p className="p-1 text-center text-sm font-semibold">Add User</p>
          <div className="flex flex-row">
            <p className="px-3 text-sm font-medium">Email:</p>
            <p className="px-1 text-sm font-light">{userDetails.email}</p>
          </div>
          <div className="flex flex-row">
            <p className="px-3 text-sm font-medium">Password:</p>
            <p className="px-1 pb-2 text-sm font-light">
              {userDetails.password}
            </p>
          </div>
          <div className="flex flex-row">
            <button
              className="flex-1 rounded-bl-2xl bg-red-300 p-1"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleUserCreation}
              className="flex-1 rounded-br-2xl bg-green-300 p-1"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPanel;
