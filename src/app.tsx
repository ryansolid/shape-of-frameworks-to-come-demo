import { Router } from "@solidjs/router";
import "./app.css";
import { Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start";

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
      <FileRoutes />
    </Router>
  );
}
