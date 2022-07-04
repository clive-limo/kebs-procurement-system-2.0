import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import Router from 'next/router';
import { useEffect } from 'react';

import DropDownList from '@/components/DropDownList';
import MainLayout from '@/layouts';
import DashboardContainer from '@/modules/DashboardContainer';

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
        <div className="h-full w-full">
          <p className="m-6 text-[30px] font-bold text-light-primary">
            Dashboard
          </p>
          <DropDownList />
          <DashboardContainer />
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
