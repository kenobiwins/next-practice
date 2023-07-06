import { IMockDataType } from '@/types';

export async function getPosts(): Promise<IMockDataType[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { next: { revalidate: 30, tags: ['post'] } } // params object
  );

  if (!response.ok) {
    throw new Error('woops');
  }

  return response.json();
}

export async function getPostBySearch(
  search: string
): Promise<IMockDataType[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?q=' + search,
    { next: { revalidate: 30, tags: ['post'] } } // params object
  );

  if (!response.ok) {
    throw new Error('woops');
  }

  return response.json();
}
