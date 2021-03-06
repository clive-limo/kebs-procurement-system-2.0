import { signOut } from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import { useRouter } from 'next/router';
import type { FC } from 'react';

const SettingsPanel: FC = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut(auth);
    alert('Log out user ?');
    router.push('/');
  };
  return (
    <div>
      <p className="m-5 text-[30px] font-bold text-white">Settings</p>
      <button
        className="m-3 h-[40px] w-[300px] rounded-2xl border bg-dark-primary p-1 font-semibold text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default SettingsPanel;
