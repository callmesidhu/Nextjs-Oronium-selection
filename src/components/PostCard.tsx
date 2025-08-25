import Link from "next/link";
import Image from "next/image";
import { Post } from "../types/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className=" overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
