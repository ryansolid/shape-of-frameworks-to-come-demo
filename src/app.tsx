import { Route, Router } from "@solidjs/router";
import "./app.css";

import Posts from "./pages/posts";
import PostView from "./pages/posts/[id]";
import PostNew from "./pages/new";
import { Suspense } from "solid-js";

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
      <Route path="/" component={Posts} />
      <Route path="/posts/:id" component={PostView} />
      <Route path="/new" component={PostNew} />
    </Router>
  );
}
