import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1617500603321-bcd6286973b7?auto=format&fit=crop&q=80"
          alt="Ayurvedic ingredients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-950/50 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-gray-200 text-lg">
              Born from a deep respect for ancient Ayurvedic traditions and a
              passion for natural beauty, Kaya Rituals brings time-tested
              skincare secrets to the modern world.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">
            Our Journey
          </h2>
          <p className="text-gray-600">
            Kaya Rituals was born from a deep appreciation for India's rich
            heritage of natural beauty remedies. Our founder, drawing from her
            grandmother's cherished beauty recipes and extensive research in
            Ayurvedic practices, created a brand that bridges ancient wisdom
            with modern skincare needs.
          </p>
          <p className="text-gray-600">
            Today, we continue to handcraft each product in small batches,
            ensuring the highest quality and potency of our natural ingredients.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611070016027-76ad2a0b4e5c?auto=format&fit=crop&q=80"
              alt="Natural ingredients"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-amber-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-600">
              We believe in the power of nature's purest ingredients. Every Kaya
              Rituals product is crafted with intention, combining premium
              natural ingredients with time-tested Ayurvedic principles. Our
              star ingredient, Kumkumadi (Saffron), is ethically sourced and
              carefully processed to preserve its potent properties.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div>
          <h2 className="text-3xl font-serif text-amber-900 mb-6">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Sustainability',
                description:
                  'We are committed to eco-friendly practices in our production and packaging.',
              },
              {
                title: 'Quality',
                description:
                  'Each product is handcrafted in small batches to ensure the highest quality.',
              },
              {
                title: 'Transparency',
                description:
                  'We believe in complete transparency about our ingredients and processes.',
              },
              {
                title: 'Community',
                description:
                  'We work closely with local farmers and artisans to support traditional practices.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-amber-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-amber-900 mb-6">
              Our Key Ingredients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each ingredient is carefully selected for its unique properties
              and benefits, creating powerful synergies in our formulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Saffron (Kumkumadi)',
                description:
                  'Known for its brightening and anti-aging properties.',
                image:
                  // 'https://images.unsplash.com/photo-1615236651909-cd34d2fc6950?auto=format&fit=crop&q=80',
                  // 'https://unsplash.com/photos/white-ceramic-container-4v_fCBw_kqg?auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80',
              },
              {
                name: 'Sacred Lotus',
                description:
                  'Calms and soothes sensitive skin while promoting radiance.',
                image:
                  'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80',
              },
              {
                name: 'Rose',
                description: 'Hydrates and balances the skins natural pH.',
                image:
                  'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80',
              },
            ].map((ingredient) => (
              <div
                key={ingredient.name}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-amber-900 mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-600">{ingredient.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
