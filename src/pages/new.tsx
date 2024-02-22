import { useNavigate } from "@solidjs/router";
import { addPost } from "~/lib/posts";

export default function PostNew() {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form: any = e.target;
        addPost({
          title: form.title.value,
          caption: form.caption.value,
          content: form.content.value,
        }).then(() => navigate("/"));
      }}
    >
      <input type="text" required name="title" placeholder="Title" />
      <input type="text" required name="caption" placeholder="Caption" />
      <textarea
        required
        minlength="30"
        name="content"
        placeholder="Blog Post here..."
        rows="8"
        cols="40"
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
