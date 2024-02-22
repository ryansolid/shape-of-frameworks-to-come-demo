import { APIEvent } from "@solidjs/start/server";
import { getPost } from "~/lib/posts";

export const GET = (event: APIEvent) => {
  return getPost(+event.params.id);
}