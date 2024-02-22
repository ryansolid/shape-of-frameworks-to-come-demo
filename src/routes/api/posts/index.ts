import { APIEvent } from "@solidjs/start/server/types";
import { addPost, getPosts } from "~/lib/posts";

export const GET = () => {
  return getPosts();
}

export const POST = async (event: APIEvent) => {
  const post = await addPost(await event.request.json());
  return new Response(JSON.stringify(post), { status: 201 });
}