import { Post } from "../types";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Top Color Band */}
      <div className="h-16 bg-gradient-to-r from-indigo-400 to-purple-400 relative">
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <img
            className="h-16 w-16 rounded-full border-4 border-white object-cover"
            src={post.avatar || "/default-avatar.jpg"} // Provide a fallback avatar
            alt={post.author}
          />
        </div>
      </div>

      <div className="pt-10 px-4 pb-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{post.description}</p>

        <div className="mt-4 text-sm text-gray-500 space-y-1">
          <p><span className="font-medium">Author:</span> {post.author}</p>
          <p><span className="font-medium">Category:</span> {post.category}</p>
          <p><span className="font-medium">Published:</span> {post.publishedDate}</p>
        </div>
      </div>
    </div>
  );
}
