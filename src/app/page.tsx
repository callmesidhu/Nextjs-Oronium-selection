"use client";
import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/api";
import HeroPost from "../components/HeroPost";
import FeaturedList from "../components/FeaturedList";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import { Post } from "../types/types";

export default function HomePageWrapper() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPosts().then((data: Post[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  const [hero, ...others] = posts;

  const filteredPosts = others.filter((post) => {
    const q = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.author.name.toLowerCase().includes(q) ||
      post.readTime.toLowerCase().includes(q)
    );
  });

  return (
    <div className="py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <HeroPost post={hero} />
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-4">Other featured posts</h2>
          <FeaturedList posts={others.slice(0, 5)} />
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recent Posts</h2>
          <div className="flex items-center">
            <SearchBar query={query} setQuery={setQuery} />
            <button
              onClick={() => setQuery("")}
              className="px-3 py-1 rounded-xl border-2 border-gray-200"
            >
              All Posts
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="col-span-3 text-gray-500">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
