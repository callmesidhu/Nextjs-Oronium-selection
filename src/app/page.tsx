import { Metadata } from 'next';
import { blogApi } from '@/lib/api';
import Hero from './components/Hero';
import ClientBlogList from './components/ClientBlogList';
import FeaturedPosts from './components/FeaturedPosts';


export const metadata: Metadata = {
  title: 'Beyond UI - Unlocking Business Efficiency',
  description: 'Discover how modern SaaS platforms are revolutionizing business operations.',
};

export default async function HomePage() {
  // Server-side data fetching
  const posts = await blogApi.getAllPosts();
  const recentPosts = posts.slice(0, 3);
  const featuredPosts = posts.slice(3, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              All Posts
            </button>
          </div>
          
          <ClientBlogList initialPosts={posts} />
        </div>
      </section>

      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
}
