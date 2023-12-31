// 'use client'; we don't use use client, because our state manager takes tusk on hmself
// 'use client';
import React from 'react';
import { PostSearch, Posts } from '@/components';
import { Metadata } from 'next';
import { getPosts } from '@/services';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  // 1. standart aproach for working with nextjs but we use client
  // const [posts, setPosts] = React.useState<IMockDataType[]>([]);
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   getPosts()
  //     .then(setPosts)
  //     .finally(() => setIsLoading(false));
  // }, []);

  // 2. aproach with usage state manager
  // const [posts, isLoading, getAllPosts] = usePosts(
  //   ({ getAllPosts, getPostBySearch, isLoading, posts }) => [
  //     posts,
  //     isLoading,
  //     getAllPosts,
  //     getPostBySearch,
  //   ],
  //   shallow
  // );

  // React.useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  // 3. look in Posts.tsx

  const posts = await getPosts();

  return (
    <>
      <h2>hello blog</h2>
      {/* <PostSearch /> */}
      {/* approach when u need combine server render and insert client component */}
      {/* <Posts /> */}
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
