import { createAsync } from "@solidjs/router";
import { For } from "solid-js";

export default function Posts() {
  const posts = createAsync(async () => (await fetch("/api/posts")).json());
  return (
    <>
      <ul>
        <For each={posts()}>
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
