'use client';
import { INavItemType } from '@/types';
import Link from 'next/link';
// use client => special command for nextjs than you transfered js code to front end
import { usePathname } from 'next/navigation';

const Navigation = ({ links }: { links: INavItemType[] }) => {
  const pathname = usePathname();

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
      </ul>
    </nav>
  );
};

export { Navigation };
