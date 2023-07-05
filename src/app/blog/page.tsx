import { IMockDataType } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';

async function getData(): Promise<IMockDataType[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { next: { revalidate: 30, tags: ['post'] } } // params object
  );

  if (!response.ok) {
    throw new Error('woops');
  }

  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h2>hello blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
