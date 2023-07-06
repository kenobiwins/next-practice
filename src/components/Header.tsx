import { INavItemType } from '@/types';
import { Navigation } from '@/components';

enum ROUTES {
  HOME = '/',
  ABOUT = '/about',
  BLOG = '/blog',
}

const navItems: INavItemType[] = [
  {
    title: 'home',
    link: ROUTES.HOME,
  },
  {
    title: 'about',
    link: ROUTES.ABOUT,
  },
  {
    title: 'blog',
    link: ROUTES.BLOG,
  },
];

const Header = () => {
  return (
    <header>
      <Navigation links={navItems} />
    </header>
  );
};

export { Header };
