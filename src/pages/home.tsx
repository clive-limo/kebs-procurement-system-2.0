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

  return (
    <MainLayout title="" description="">
      <section className="flex h-full w-full flex-row">
        <p>{auth.currentUser?.email}</p>
        

      </section>
    </MainLayout>
  );
}

export default Home;
