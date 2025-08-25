import Link from "next/link";

export default function HeroPost({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="relative rounded-xl overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
          <span className="text-sm bg-white text-black px-2 py-1 rounded mb-2 w-fit">
            {post.category}
          </span>
          <h2 className="text-2xl font-bold text-white">{post.title}</h2>
        </div>
      </div>
    </Link>
  );
}
