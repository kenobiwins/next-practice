import Link from 'next/link';

enum ROUTES {
  HOME = '/',
  ABOUT = '/about',
  BLOG = '/blog',
}

const navItems: { title: string; link: ROUTES }[] = [
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
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
