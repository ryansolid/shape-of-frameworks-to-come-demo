import { For } from "solid-js";
import "./app.css";

const POSTS = [
  {
    id: 1,
    title: "First Blog Post",
    caption: "This is where it all starts",
    content: "",
    date: new Date(),
  },
  {
    id: 2,
    title: "Second Blog Post",
    caption: "This is where it all continues",
    content: "",
    date: new Date(),
  },
];

export default function App() {
  return (
    <main>
      <a href="/">
        <h1>Solidarity</h1>
      </a>
      <ul>
        <For each={POSTS}>
          {(post) => (
            <li>
              <a href={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <small>{post.date.toLocaleDateString()}</small>
                <p>{post.caption}</p>
              </a>
            </li>
          )}
        </For>
      </ul>
      <a href="/new">Add a New Post...</a>
    </main>
  );
}
