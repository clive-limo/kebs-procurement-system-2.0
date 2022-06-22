import { signOut } from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import { useRouter } from 'next/router';

import MainLayout from '@/layouts';

function Home() {
  const router = useRouter();
  const logOutUser = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <MainLayout title="" description="">
      <section>
        <p>{auth.currentUser?.email}</p>
        <button onClick={logOutUser}>logout</button>
      </section>
    </MainLayout>
  );
}

export default Home;
