import clsx from 'clsx';
import type { FC } from 'react';

import MenuButton from '@/components/MenuButton';

interface Iprops {
  show: boolean;
}

const MenuContainer: FC<Iprops> = ({ show }) => {
  return (
    <section>
      <div
        className={clsx(
          'h-full w-[20vw] bg-dark-primary',
          show ? 'visible' : 'hidden'
        )}
      >
        <div className="mx-auto mb-[10vh] flex h-[100px] w-[250px] flex-row pt-5">
          <img
            src="/assets/images/im-orange-circle.svg"
            alt="orange circle"
            className="h-[80px] w-[80px]"
          />
          <p className="my-auto mx-3 text-center font-porter text-[30px] leading-none text-white">
            CUREN
          </p>
        </div>
        <MenuButton
          src="/assets/icons/ic-dashboard.svg"
          alt="dashboard icon"
          name="Dashboard"
        />
        <MenuButton
          src="/assets/icons/ic-reports.svg"
          alt="reports icon"
          name="Reports"
        />
        <MenuButton
          src="/assets/icons/ic-users.svg"
          alt="users icon"
          name="Users"
        />
        <MenuButton
          src="/assets/icons/ic-settings.svg"
          alt="settings icon"
          name="Settings"
        />
      </div>
    </section>
  );
};

export default MenuContainer;
