import Link from "next/link";
import Image from "next/image";

export default function HeroPost({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="relative rounded-xl overflow-hidden">
        {/* Optimized hero image */}
        <div className="relative w-full h-96 md:h-[26rem]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Gradient overlay with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
          <span className="text-sm text-white border-2 border-amber-900 px-2 py-1 rounded-2xl mb-2 w-fit">
            {post.category}
          </span>
          <h2 className="text-2xl font-bold text-white">{post.title}</h2>
        </div>
      </div>
    </Link>
  );
}
