import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24 mb-20">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1615236651909-d4a9d646c779?auto=format&fit=crop&q=80"
          alt="Saffron threads"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl font-serif mb-6">
                Ancient Wisdom for Modern Beauty
              </h1>
              <p className="text-xl mb-8">
                Discover the power of Kumkumadi in our handcrafted natural
                skincare and haircare products
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-md transition-colors"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-amber-900 mb-6">
              The Magic of Kumkumadi
            </h2>
            <p className="text-gray-600 mb-6">
              Known as "Liquid Gold" in Ayurveda, Kumkumadi (Saffron) has been
              treasured for centuries for its remarkable beauty-enhancing
              properties. Each Kaya Rituals product is infused with this
              precious ingredient, carefully sourced from the valleys of
              Kashmir. Our signature Kumkumadi collection harnesses the
              transformative power of pure saffron, blended with precious herbs
              and oils to create a luxurious skincare ritual that brightens,
              rejuvenates, and nourishes your skin.
            </p>
            <Link
              to="/about"
              className="text-amber-700 hover:text-amber-800 font-medium inline-flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1612083169523-a0579d49b189?auto=format&fit=crop&q=80"
              alt="Saffron close-up"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-serif text-amber-900 text-center mb-16">
            The Kaya Rituals Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: '100% Natural',
                description:
                  'Every product is crafted using pure, natural ingredients sourced directly from nature.',
              },
              {
                title: 'Ayurvedic Wisdom',
                description:
                  'Our formulations are based on ancient Ayurvedic principles passed down through generations.',
              },
              {
                title: 'Handcrafted Care',
                description:
                  'Each product is handmade in small batches to ensure quality and effectiveness.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm  text-center"
              >
                <h3 className="text-xl font-medium text-amber-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
