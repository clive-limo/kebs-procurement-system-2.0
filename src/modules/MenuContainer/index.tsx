import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';

import MenuButton from '@/components/MenuButton';

import SettingsPanel from './SettingsPanel';
import UsersPanel from './UsersPanel';

interface Iprops {
  show: boolean;
}

const MenuContainer: FC<Iprops> = ({ show }) => {
  const [close, setClose] = useState(true);
  const [panel, setPanel] = useState({ currentPanel: ' ' });
  return (
    <section>
      <div
        className={clsx(
          'absolute right-0 h-full w-[20vw] bg-dark-primary',
          close ? 'hidden' : 'visible'
        )}
      >
        <button
          className="m-1 p-2"
          onClick={() => {
            setClose(true);
          }}
        >
          <img src="/assets/icons/ic-close.svg" alt="close icon" />
        </button>
        {panel.currentPanel === 'users' ? <UsersPanel /> : <SettingsPanel />}
      </div>
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
          onClick={() => {
            setClose(!close);
            setPanel({ ...panel, currentPanel: 'users' });
          }}
        />
        <MenuButton
          src="/assets/icons/ic-settings.svg"
          alt="settings icon"
          name="Settings"
          onClick={() => {
            setClose(!close);
            setPanel({ ...panel, currentPanel: 'settings' });
          }}
        />
      </div>
    </section>
  );
};

export default MenuContainer;
