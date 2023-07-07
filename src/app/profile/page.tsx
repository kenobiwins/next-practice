import { authConfig } from '@/configs';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
// async coz server component
export default async function Profile() {
  // server helper
  const session = await getServerSession(authConfig);
  // console.log('session', session);

  return (
    <div>
      <h2>profile{session?.user?.name}</h2>
      {session?.user?.image !== null && session?.user?.image !== undefined && (
        <Image src={session.user.image} alt={session.user.name || ''} />
      )}
    </div>
  );
}
