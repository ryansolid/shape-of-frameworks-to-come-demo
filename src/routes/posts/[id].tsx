import { RouteDefinition, RouteSectionProps, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getPost } from "~/lib/posts";

export const route = {
  load({ params }) {
    return getPost(+params.id);
  }
} satisfies RouteDefinition

export default function PostView(props: RouteSectionProps) {
  const post = createAsync(() => getPost(+props.params.id));
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
