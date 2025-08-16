import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Business
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Unlocking Business
              <br />
              <span className="text-gray-600">Efficiency with SaaS Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover how modern SaaS platforms are revolutionizing business operations 
              and driving unprecedented growth across industries.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/blog/unlocking-business-efficiency"
                className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Read More
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span>By Jennifer Taylor • 5 min read</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Modern office workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
