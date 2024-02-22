import { Post } from "~/types";
import { storage } from "./db";
import { cache, action, redirect } from "@solidjs/router"

export const getPosts = cache(async () => {
  "use server";
  return ((await storage.getItem("posts:data")) as Post[]).reverse();
}, "posts");

export const getPost = cache(async (id: number) => {
  "use server";
  return ((await storage.getItem("posts:data")) as Post[]).find(
    (post) => post.id === id
  );
}, "post");

export const addPost = action(async (data: FormData) => {
  "use server";
  const postInput = {
    title: String(data.get("title")),
    caption: String(data.get("caption")),
    content: String(data.get("content"))
  }
  let [{ value: posts }, { value: index }] = await storage.getItems([
    "posts:data",
    "posts:counter",
  ]);

  await Promise.all([
    storage.setItem("posts:data", [
      ...(posts as Post[]),
      { ...postInput, id: index as number, timestamp: Date.now() },
    ]),
    storage.setItem("posts:counter", (index as number) + 1),
  ]);
  return redirect("/");
});
