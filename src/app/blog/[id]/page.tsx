import { getPostById, getPosts } from '@/services/getPosts';
import { IMockDataType } from '@/types';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

// async function getData(id: string): Promise<IMockDataType> {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/posts/' + id,
//     { next: { revalidate: 60, tags: ['post'] } } // params object
//   );

//   return response.json();
// }

export async function generateStaticParams() {
  const posts  = await getPosts();

  return posts.map((post: IMockDataType) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostById(id);
  // console.log('post=>>>>', post);

  return {
    title: post.title,
    description: post.body,
  };
}

export const revalidate = 10;

export default async function Post({ params: { id } }: Props) {
  const post = await getPostById(id);

  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
