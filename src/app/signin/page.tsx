import { GoogleButton, SignInForm } from '@/components';

export default async function Signin() {
  return (
    <div>
      <h2>Sign in</h2>
      <SignInForm />
      <GoogleButton />
    </div>
  );
}
