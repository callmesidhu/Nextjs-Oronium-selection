import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import SafeDate from './SafeDate';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

// Helper function to validate and provide fallback URLs
const getValidImageUrl = (url: string | undefined): string => {
  if (!url) {
    return 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop';
  }
  
  // Check if URL is valid
  try {
    new URL(url);
    return url;
  } catch {
    // Return fallback image if URL is invalid
    return 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop';
  }
};

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  // Validate image URLs before using them
  const validImageUrl = getValidImageUrl(post.image);
  const validAuthorAvatar = getValidImageUrl(post.author?.avatar);

  if (featured) {
    return (
      <article className="group cursor-pointer">
        <Link href={`/blog/${post.slug}`}>
          <div className="space-y-4">
            <div className="aspect-[16/10] relative rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={validImageUrl}
                alt={post.title || 'Blog post image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                  {post.category || 'General'}
                </span>
                <span>•</span>
                <span>{post.readTime || '5 min read'}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 relative rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={validAuthorAvatar}
                    alt={post.author?.name || 'Author'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{post.author?.name || 'Anonymous'}</p>
                  <p className="text-gray-500">
                    <SafeDate dateString={post.publishedAt} format="long" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <Link href={`/blog/${post.slug}`}>
        <div className="space-y-4">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={validImageUrl}
              alt={post.title || 'Blog post image'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                {post.category || 'General'}
              </span>
              <span>•</span>
              <span>{post.readTime || '5 min read'}</span>
            </div>
            
            <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight line-clamp-2">
              {post.title}
            </h3>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 relative rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={validAuthorAvatar}
                  alt={post.author?.name || 'Author'}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">{post.author?.name || 'Anonymous'}</span>
              <span className="text-sm text-gray-400">•</span>
              <SafeDate 
                dateString={post.publishedAt} 
                format="custom" 
                className="text-sm text-gray-500"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
