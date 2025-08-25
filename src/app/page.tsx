import { fetchPosts } from "../lib/api";
import HeroPost from "../components/HeroPost";
import FeaturedList from "../components/FeaturedList";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";

export default async function HomePage() {
  const posts = await fetchPosts();

  const [hero, ...others] = posts;

  return (
    <div className="py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Hero Post */}
        <div className="md:col-span-2">
          <HeroPost post={hero} />
        </div>

        {/* Featured Sidebar */}
        <div>
          <h2 className="font-semibold mb-4">Other featured posts</h2>
          <FeaturedList posts={others.slice(0, 5)} />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <SearchBar />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {others.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
