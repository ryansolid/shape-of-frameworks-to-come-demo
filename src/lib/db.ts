import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

export const storage = createStorage({
  driver: fsLiteDriver({
    base: "./data"
  })
});

// initialize data
storage.setItem("posts:data", [
  {
    id: 1,
    title: "First Blog Post",
    caption: "This is where it all starts",
    content: "And so, it begins.",
    timestamp: Date.now(),
  },
  {
    id: 2,
    title: "Second Blog Post",
    caption: "This is where it all continues",
    content: "It continues.",
    timestamp: Date.now(),
  },
])
storage.setItem("posts:counter", 3);