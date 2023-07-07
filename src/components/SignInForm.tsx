'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false, // in case when we catch error our next redirect to primary form
    });

    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log('error', res);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button>sign in</button>
    </form>
  );
};

export { SignInForm };
