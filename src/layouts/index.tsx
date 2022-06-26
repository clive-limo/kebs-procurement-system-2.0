import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import MenuContainer from '@/modules/MenuContainer';

import { MainSeo } from './seo';

interface IMainProps {
  title: string;
  description: string;
  canonical?: string;
  children: ReactNode;
}

const MainLayout: FC<IMainProps> = ({
  description,
  title,
  canonical,
  children,
}) => {
  const [showMenu, setShow] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') {
      setShow(false);
    }
  });
  return (
    <section className="fixed inset-0 overflow-hidden">
      <MainSeo description={description} title={title} canonical={canonical} />
      <article className="absolute h-full w-full bg-white">
        <section className="flex h-full w-full flex-1 ">
          <MenuContainer show={showMenu} />
          {children}
        </section>
      </article>
    </section>
  );
};

export default MainLayout;
