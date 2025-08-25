import Link from "next/link";

export default function FeaturedList({ posts }: { posts: any[] }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 object-cover rounded"
            />
            <p className="text-sm font-medium">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
