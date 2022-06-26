import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import Router from 'next/router';
import { useEffect } from 'react';

import MainLayout from '@/layouts';

function Home() {
  useEffect(() => {
    const user = auth.currentUser;
    onAuthStateChanged(auth, () => {
      if (!user) {
        Router.push('/');
      }
    });
  });
  const handleLogout = async () => {
    await signOut(auth);
    alert('Log out user ?');
    Router.push('/');
  };
  return (
    <MainLayout title="" description="">
      <section className="flex h-full w-full flex-row">
        <div className="absolute right-0 h-full w-[20vw] bg-dark-primary"></div>
        <p>{auth.currentUser?.email}</p>
        <button
          className="m-3 h-[40px] bg-dark-primary p-1"
          onClick={handleLogout}
        >
          logout
        </button>
      </section>
    </MainLayout>
  );
}

export default Home;
