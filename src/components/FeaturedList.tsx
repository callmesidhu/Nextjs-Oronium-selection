import Link from "next/link";
import Image from "next/image";
import { Post } from "../types/types";

export default function FeaturedList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div className="flex items-center gap-3 cursor-pointer mb-3">
            <div className="relative min-w-20 h-16">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-xl"
                sizes="80px"
              />
            </div>
            <p className="text-sm font-semibold">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
