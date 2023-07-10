import { IMockDataType } from '@/types';

//'https://jsonplaceholder.typicode.com/posts',
// { posts: IMockDataType[] }
export async function getPosts(): Promise<IMockDataType[]> {
  const response = await fetch(
    // '/api/posts',
    'https://jsonplaceholder.typicode.com/posts',
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

// export async function getPostById(
//   id: string
// ): Promise<{ data: IMockDataType }> {
//   const response = await fetch('/api/posts' + id, { next: { revalidate: 30 } });

//   if (!response.ok) {
//     throw new Error('post not found');
//   }

//   return response.json();
// }

export const getPostById = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    // '/api/posts?id='+id,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) throw new Error('Unable to fetch post.');

  return response.json();
};
