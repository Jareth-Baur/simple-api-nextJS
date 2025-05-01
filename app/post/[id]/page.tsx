export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch("http://localhost:3000/api/posts"); // Update this URL as needed
  const { data } = await response.json();

  const post = data.find((item: any) => item.id === id);

  if (!post) {
    return <div className="text-red-500 text-xl font-semibold">Post not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Author:</span> {post.author}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Category:</span> {post.category}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Published Date:</span> {post.publishedDate}
      </p>
    </div>
  );
}
