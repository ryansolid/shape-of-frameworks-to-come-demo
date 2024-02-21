import {
  Accessor,
  JSX,
  createContext,
  createSignal,
  useContext,
} from "solid-js";
import { Post } from "~/types";

const POSTS = [
  {
    id: 1,
    title: "First Blog Post",
    caption: "This is where it all starts",
    content: "",
    timestamp: Date.now(),
  },
  {
    id: 2,
    title: "Second Blog Post",
    caption: "This is where it all continues",
    content: "",
    timestamp: Date.now(),
  },
];

type PostInput = Pick<Post, "title" | "caption" | "content">;
const PostContext =
  createContext<[Accessor<Post[]>, (post: PostInput) => void]>();

export default function PostsProvider(props: { children: JSX.Element }) {
  const [posts, setPosts] = createSignal([...POSTS].reverse());
  const addPost = (post: PostInput) => {
    setPosts((p) => [
      { ...post, id: p.length + 1, timestamp: Date.now() },
      ...p,
    ]);
  };

  return (
    <PostContext.Provider value={[posts, addPost]}>
      {props.children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext)!;
}
