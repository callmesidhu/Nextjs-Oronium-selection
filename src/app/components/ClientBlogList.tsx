'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { blogApi } from '@/lib/api';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';
import SearchBar from './SearchBar';

interface ClientBlogListProps {
  initialPosts: BlogPost[];
}

const ClientBlogList: React.FC<ClientBlogListProps> = ({ initialPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => blogApi.searchPosts(searchQuery),
    enabled: searchQuery.length > 0,
  });

  const displayPosts = searchQuery.length > 0 ? (searchResults || []) : initialPosts;
  const recentPosts = displayPosts.slice(0, 3);

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {searchQuery && displayPosts.length === 0 && !isLoading && (
        <div className="text-center py-8">
          <p className="text-gray-600">No posts found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default ClientBlogList;
