import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from 'firebase_config/firebaseInit';
import { useRouter } from 'next/router';

import MainLayout from '@/layouts';

function CreateUser() {
  const router = useRouter();
  const addUserToDb = async () => {
    const newUserEmail = localStorage.getItem('newUserEmail');
    const newUserPassword = localStorage.getItem('newUserPassword');
    const adminEmail = localStorage.getItem('email');
    const adminPassword = localStorage.getItem('password');
    if (newUserEmail && newUserPassword && adminPassword && adminEmail) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          newUserEmail,
          newUserPassword
        );
        await signOut(auth);
        signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        alert('User created successfully');
        router.push('/home');
      } catch (e) {
        alert(e);
      }
    } else {
      alert('user details null');
    }
  };
  addUserToDb();
  return (
    <MainLayout title="Create User" description="Create new user">
      <div className="h-full w-full">
        <div className="mx-auto my-80 flex h-[300px] w-[400px] content-center rounded-lg bg-dark-primary">
          <p className="m-auto h-[50px] text-center text-[30px] font-light text-white">
            Creating user...
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default CreateUser;
