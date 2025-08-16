import axios from 'axios';
import { BlogPost } from '@/types/blog';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Helper function to validate URLs
const isValidUrl = (string: string): boolean => {
  if (!string) return false;
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
};

// Helper function to validate and clean blog post data
const validateBlogPost = (post: any): BlogPost => {
  const defaultImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop';
  const defaultAvatar = 'https://images.unsplash.com/photo-1494790108755-2616b9dce0cc?w=100&h=100&fit=crop';

  return {
    id: post.id?.toString() || Math.random().toString(),
    title: post.title || 'Untitled Post',
    content: post.content || '<p>No content available.</p>',
    excerpt: post.excerpt || 'No excerpt available.',
    image: post.image && isValidUrl(post.image) ? post.image : defaultImage,
    author: {
      name: post.author?.name || 'Anonymous',
      avatar: post.author?.avatar && isValidUrl(post.author.avatar) ? post.author.avatar : defaultAvatar,
    },
    publishedAt: post.publishedAt || new Date().toISOString(),
    readTime: post.readTime || '5 min read',
    category: post.category || 'General',
    slug: post.slug || post.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || 'untitled',
  };
};

export const blogApi = {
  getAllPosts: async (): Promise<BlogPost[]> => {
    if (!API_URL) {
      throw new Error('API_URL is not configured');
    }

    const response = await axios.get(`${API_URL}/posts`);
    
    // Validate and clean each post
    if (Array.isArray(response.data)) {
      return response.data.map(validateBlogPost);
    } else {
      throw new Error('Invalid API response format');
    }
  },
  
  getPostBySlug: async (slug: string): Promise<BlogPost> => {
    if (!API_URL) {
      throw new Error('API_URL is not configured');
    }

    const response = await axios.get(`${API_URL}/posts`);
    const post = response.data.find((p: any) => p.slug === slug);
    if (!post) throw new Error('Post not found');
    return validateBlogPost(post);
  },
  
  searchPosts: async (query: string): Promise<BlogPost[]> => {
    if (!API_URL) {
      throw new Error('API_URL is not configured');
    }

    const response = await axios.get(`${API_URL}/posts`);
    const filteredPosts = response.data.filter((post: any) => 
      post.title?.toLowerCase().includes(query.toLowerCase()) ||
      post.content?.toLowerCase().includes(query.toLowerCase()) ||
      post.category?.toLowerCase().includes(query.toLowerCase())
    );
    return filteredPosts.map(validateBlogPost);
  }
};
