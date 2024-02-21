import { For } from "solid-js";

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

export default function Posts() {
  return (
    <>
      <ul>
        <For each={POSTS}>
          {(post) => (
            <li>
              <a href={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <small>{new Date(post.timestamp).toLocaleDateString()}</small>
                <p>{post.caption}</p>
              </a>
            </li>
          )}
        </For>
      </ul>
      <a href="/new">Add a New Post...</a>
    </>
  );
}
