import Link from "next/link";

export default function PostCard({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="rounded-xl overflow-hidden border hover:shadow-lg transition">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
            <span>{post.author.name}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
