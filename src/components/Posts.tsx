'use client';

import { getPosts } from '@/services';
import Link from 'next/link';
import useSWR from 'swr';

// import { shallow } from 'zustand/shallow';
// import { usePosts } from '@/store';
// import { useEffect } from 'react';
const POSTS_KEY = 'posts';
const Posts = () => {
  // 3. zustand
  //   const [posts, isLoading, getAllPosts] = usePosts(
  //     ({ getAllPosts, getPostBySearch, isLoading, posts }) => [
  //       posts,
  //       isLoading,
  //       getAllPosts,
  //       getPostBySearch,
  //     ],
  //     shallow
  //   );

  //   useEffect(() => {
  //     getAllPosts();
  //   }, [getAllPosts]);

  // SWR like RTK query but develops by vercel
  const {
    isLoading,
    data,
  } = useSWR(POSTS_KEY, getPosts);

  return isLoading ? (
    <h3>loading...</h3>
  ) : (
    <ul>
      {data?.posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
