import type { FC } from 'react';

interface Iprops {
  src: string;
  alt: string;
  name: string;
  onClick?: () => void;
}

const MenuButton: FC<Iprops> = ({ src, alt, name, onClick }) => {
  return (
    <div className="mx-auto my-4 flex w-[150px] flex-row">
      <img src={src} alt={alt} />
      <button
        className="m-2 text-lg font-semibold text-white"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default MenuButton;
