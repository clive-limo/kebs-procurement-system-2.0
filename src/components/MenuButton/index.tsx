import type { FC } from 'react';

interface Iprops {
  src: string;
  alt: string;
  name: string;
}

const MenuButton: FC<Iprops> = ({ src, alt, name }) => {
  return (
    <div className="mx-auto my-2 flex w-[150px] flex-row">
      <img src={src} alt={alt} />
      <button className="m-2 text-lg font-semibold text-white">{name}</button>
    </div>
  );
};

export default MenuButton;
