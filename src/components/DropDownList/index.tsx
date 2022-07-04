import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';

const DropDownList: FC = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div id="drop-down-menu" className="ml-5 w-[300px] border">
      <div className="flex flex-row">
        <p className="my-auto flex-1 p-3 font-semibold text-light-primary">
          Procurement Plan
        </p>
        <button
          onClick={() => {
            setShowList(!showList);
          }}
          className="right-0 h-[45px] w-[45px] py-1 px-2"
        >
          <img src="/assets/icons/ic-drop-down.svg" alt="drop down icon" />
        </button>
      </div>
      <ul className={clsx('m-1', showList ? 'visible' : 'hidden')}>
        <li className="p-3 text-sm font-light">Procurement 2022-2021</li>
        <li className="p-3 text-sm font-light">Procurement 2020-2021</li>
        <li className="p-3 text-sm font-light">Procurement 2019-2020</li>
      </ul>
    </div>
  );
};

export default DropDownList;
