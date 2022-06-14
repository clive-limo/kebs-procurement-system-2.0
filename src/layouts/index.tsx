import type { FC, ReactNode } from 'react';

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
  return (
    <section className="fixed inset-0 overflow-hidden">
      <MainSeo description={description} title={title} canonical={canonical} />
      <article className="absolute h-full w-full bg-white">
        <section className="flex h-full w-full flex-1 ">{children}</section>
      </article>
    </section>
  );
};

export default MainLayout;
