import type { FC } from 'react';

import LoginForm from '@/components/LoginForm';

const LoginContainer: FC = () => {
  return (
    <section className="m-auto flex h-[500px] w-[800px] flex-row rounded-md shadow-lg">
      <div className="h-full flex-1">
        <p className="mt-[100px] px-8 text-[24px] text-dark-primary">SIGN IN</p>
        <LoginForm />
      </div>
      <div className="h-full w-[400px] flex-1 rounded-r-md  bg-[url('/assets/images/bg-login.svg')] bg-cover p-10">
        <p className="text-center text-[28px] font-medium leading-tight text-white">
          Welcome to
        </p>
        <p className="text-center font-porter text-[30px] leading-none text-white">
          CUREN
        </p>
        <div className="mx-auto my-[20px] h-[4px] w-[150px] bg-white"></div>
        <p className="text-center text-[18px] font-light text-white">
          This is the KEBS procurement mangement system. Please enter your
          credentials to gain access. If you don’t have an account click the
          request access button below.
        </p>
      </div>
    </section>
  );
};

export default LoginContainer;
