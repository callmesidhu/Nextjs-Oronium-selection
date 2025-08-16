import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Other featured posts</h2>
          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            All Posts
          </button>
        </div>
        
        <div className="space-y-6">
          {posts.slice(0, 5).map((post, index) => (
            <div key={post.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-sm transition-shadow">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 leading-tight mb-1 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
