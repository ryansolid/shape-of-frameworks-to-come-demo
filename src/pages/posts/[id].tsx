import { RouteSectionProps } from "@solidjs/router";
import { Show } from "solid-js";
import { usePosts } from "~/components/PostsContext";

export default function PostView(props: RouteSectionProps) {
  const [posts] = usePosts();
  return (
    <Show when={posts().find((p) => p.id === +props.params.id)}>
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
