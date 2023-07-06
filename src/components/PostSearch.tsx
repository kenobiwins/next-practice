'use client';

import React from 'react';
import useSWR from 'swr';
import { getPostBySearch } from '@/services';

const PostSearch = () => {
  const [search, setSearch] = React.useState('');
  const { mutate } = useSWR('posts');
  // zustand aproach
  //   const [getPostBySearch] = usePosts(({ getPostBySearch }) => [
  //     getPostBySearch,
  //   ]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    mutate(await getPostBySearch(search));

    // await getPostBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="search post"
      />
      <button>search</button>
    </form>
  );
};

export { PostSearch };
