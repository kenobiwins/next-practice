import { IMockDataType } from '@/types';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string): Promise<IMockDataType> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    { next: { revalidate: 60, tags: ['post'] } } // params object
  );

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  // console.log('post=>>>>', post);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
