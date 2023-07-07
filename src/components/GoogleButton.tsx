'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const REDIRECT_URL = '/profile';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || REDIRECT_URL;

  return (
    <button onClick={() => signIn('google', { callbackUrl })}>Google</button>
  );
};

export { GoogleButton };
