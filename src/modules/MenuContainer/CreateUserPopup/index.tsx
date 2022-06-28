import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';

interface Iprops {
  email: string;
  password: string;
  show: boolean;
}
const CreateUserPopup: FC<Iprops> = ({ email, password, show }) => {
  const [showPopUp, setShowPopup] = useState(show);
  return (
    <div
      className={clsx(
        'absolute mx-auto w-[16vw] rounded-2xl bg-white',
        showPopUp ? 'visible' : 'hidden'
      )}
    >
      <p className="p-1 text-center text-sm font-semibold">Add User</p>
      <div className="flex flex-row">
        <p className="px-3 text-sm font-medium">Email:</p>
        <p className="px-1 text-sm font-light">{email}</p>
      </div>
      <div className="flex flex-row">
        <p className="px-3 text-sm font-medium">Password:</p>
        <p className="px-1 pb-2 text-sm font-light">{password}</p>
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
        <button className="flex-1 rounded-br-2xl bg-green-300 p-1">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CreateUserPopup;
