import { fetchPost } from "../../../lib/api";
import Image from "next/image";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return (
    <article className="max-w-3xl mx-auto py-8">
      <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-3 mb-6">
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{post.author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(post.publishedAt).toDateString()} • {post.readTime}
          </p>
        </div>
      </div>

      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
