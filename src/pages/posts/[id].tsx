const POST = {
  id: 1,
  title: "First Blog Post",
  caption: "This is where it all starts",
  content:
    "A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text. A lot of text.",
  timestamp: Date.now(),
};

export default function PostView() {
  return (
    <article>
      <h3>{POST.title}</h3>
      <small>{new Date(POST.timestamp).toLocaleDateString()}</small>
      <div>{POST.content}</div>
    </article>
  );
}
