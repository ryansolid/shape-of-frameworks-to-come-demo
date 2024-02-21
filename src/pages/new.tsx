export default function PostNew() {
  return (
    <form>
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
