import { Metadata } from 'next';
import Link from 'next/link';

enum ROUTES {
  HOME = '/about',
  CONTACTS = '/about/contacts',
  TEAM = '/about/team',
}

const navItems: { title: string; link: ROUTES }[] = [
  {
    title: 'about',
    link: ROUTES.HOME,
  },
  {
    title: 'contacts',
    link: ROUTES.CONTACTS,
  },
  {
    title: 'team',
    link: ROUTES.TEAM,
  },
];

export const metadata: Metadata = {
  title: 'About us',
  description: 'home page About us',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>ABOUT US</h1>
      <ul>
        {navItems.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
