import type { FC } from 'react';

const LoginForm: FC = () => {
  return (
    <form className="flex h-[50vh] flex-col py-3 pl-8 pr-20 lg:h-[40vh]">
      <label className="my-1 text-sm font-light text-dark-primary">EMAIL</label>
      <input
        type="email"
        id="email"
        value=""
        placeholder="example@kebs.org"
        className="rounded-md border-[1px] border-dark-primary px-3 py-1 font-light"
      />
      <label className="my-3 text-sm font-light text-dark-primary">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="rounded-md border-[1px] border-dark-primary px-3 py-1 font-light"
      />
      <button
        className="my-auto w-[150px] rounded-full bg-light-primary p-2 text-center text-sm font-semibold text-white"
        type="submit"
      >
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
