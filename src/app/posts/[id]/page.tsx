import { fetchPost } from "../../../lib/api";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return (
    <article className="max-w-3xl mx-auto py-8">
      <img src={post.image} alt={post.title} className="rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-3 mb-6">
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
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
