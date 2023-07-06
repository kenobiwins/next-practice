import { IMockDataType } from '@/types';

//'https://jsonplaceholder.typicode.com/posts',
export async function getPosts(): Promise<{ posts: IMockDataType[] }> {
  const response = await fetch(
    '/api/posts',
    { next: { revalidate: 30 } } // params object
  );

  if (!response.ok) {
    throw new Error('woops');
  }

  return response.json();
}

export async function getPostBySearch(
  search: string
): Promise<{ posts: IMockDataType[] }> {
  const response = await fetch(
    '/api/posts?q=' + search,
    { next: { revalidate: 30 } } // params object
  );

  if (!response.ok) {
    throw new Error('woops');
  }

  return response.json();
}
