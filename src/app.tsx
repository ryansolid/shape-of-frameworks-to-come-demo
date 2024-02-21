import { Route, Router } from "@solidjs/router";
import "./app.css";

import Posts from "./pages/posts";
import PostView from "./pages/posts/[id]";
import PostNew from "./pages/new";
import PostsProvider from "./components/PostsContext";

export default function App() {
  return (
    <Router
      root={(props) => (
        <main>
          <a href="/">
            <h1>Solidarity</h1>
          </a>
          <PostsProvider>{props.children}</PostsProvider>
        </main>
      )}
    >
      <Route path="/" component={Posts} />
      <Route path="/posts/:id" component={PostView} />
      <Route path="/new" component={PostNew} />
    </Router>
  );
}
