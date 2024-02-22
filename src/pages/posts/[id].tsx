import { RouteSectionProps, createAsync } from "@solidjs/router";
import { Show } from "solid-js";

export default function PostView(props: RouteSectionProps) {
  const post = createAsync(async () =>
    (await fetch(`/api/posts/${props.params.id}`)).json()
  );
  return (
    <Show when={post()}>
      {(post) => (
        <article>
          <h3>{post().title}</h3>
          <small>{new Date(post().timestamp).toLocaleDateString()}</small>
          <div>{post().content}</div>
        </article>
      )}
    </Show>
  );
}
