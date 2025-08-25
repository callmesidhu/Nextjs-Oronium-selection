import Link from "next/link";

export default function FeaturedList({ posts }: { posts: any[] }) {
  return (
    <div className="">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-16 object-cover rounded-xl mb-3"
            />
            <p className="text-sm font-semibold">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
