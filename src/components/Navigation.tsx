'use client';
import { INavItemType } from '@/types';
import Link from 'next/link';
// use client => special command for nextjs than you transfered js code to front end
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navigation = ({ links }: { links: INavItemType[] }) => {
  const pathname = usePathname();
  const session = useSession();

  // console.log('session', session);

  return (
    <nav>
      <ul>
        {links.map((item) => (
          <li key={item.link}>
            <Link
              style={{
                backgroundColor:
                  pathname === item.link ? 'blanchedalmond' : 'transparent',
              }}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
        {session.data && <Link href={'/profile'}>{'profile'}</Link>}
        {session.data ? (
          <Link href={'#'} onClick={() => signOut({ callbackUrl: '/' })}>
            {'sign out'}
          </Link>
        ) : (
          <Link href={'/signin'}>{'sign in'}</Link>
        )}
      </ul>
    </nav>
  );
};

export { Navigation };
