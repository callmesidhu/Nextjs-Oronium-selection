import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogApi } from '@/lib/api';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await blogApi.getPostBySlug(params.slug);
    
    return {
      title: `${post.title} | Beyond UI`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
    };
  } catch {
    return {
      title: 'Post Not Found | Beyond UI',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await blogApi.getPostBySlug(params.slug);

    return (
      <article className="min-h-screen bg-white">
        <div className="container py-8">
          {/* Back button */}
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          {/* Article header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{post.author.name}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured image */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article content */}
          <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
