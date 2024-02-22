import { Route, Router } from "@solidjs/router";
import "./app.css";
import { Suspense, lazy } from "solid-js";
import { getPost, getPosts } from "./lib/posts";

const Posts = lazy(() => import("./pages/posts"));
const PostView = lazy(() => import("./pages/posts/[id]"));
const PostNew = lazy(() => import("./pages/new"));

export default function App() {
  return (
    <Router
      root={(props) => (
        <main>
          <a href="/">
            <h1>Solidarity</h1>
          </a>
          <Suspense fallback="Loading...">{props.children}</Suspense>
        </main>
      )}
    >
      <Route path="/" component={Posts} load={() => getPosts()} />
      <Route
        path="/posts/:id"
        component={PostView}
        load={({ params }) => getPost(+params.id)}
      />
      <Route path="/new" component={PostNew} />
    </Router>
  );
}
