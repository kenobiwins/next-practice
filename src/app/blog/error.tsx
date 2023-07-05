'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Wooops... {error.message}</h1>;
}
