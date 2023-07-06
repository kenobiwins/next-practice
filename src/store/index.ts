import { getPostBySearch, getPosts } from '@/services';
import { IMockDataType } from '@/types';
import { create } from 'zustand';

interface IUsePosts {
  posts: IMockDataType[];
  isLoading: boolean;
  getAllPosts: () => Promise<void>;
  getPostBySearch: (value: string) => Promise<void>;
}

const usePosts = create<IUsePosts>((set) => ({
  posts: [],
  isLoading: false,
  getAllPosts: async () => {
    set({ isLoading: true });
    const { posts } = await getPosts();
    set({ posts, isLoading: false });
  },
  getPostBySearch: async (search) => {
    set({ isLoading: true });
    const { posts } = await getPostBySearch(search);
    set({ posts, isLoading: false });
  },
}));

export { usePosts };
