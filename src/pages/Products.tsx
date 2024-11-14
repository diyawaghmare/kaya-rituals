import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('soaps');

  const categories = {
    skincare: ['soaps', 'face', 'more'],
    haircare: ['all'],
  };

  const filteredProducts = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1617500603321-bcd6286973b7?auto=format&fit=crop&q=80"
          alt="Ayurvedic ingredients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-950/50 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif text-white mb-6">
              Our Products
            </h1>
            <p className="text-gray-200 text-lg">
              Discover our collection of handcrafted Ayurvedic skincare,
              featuring the precious Kumkumadi (Saffron) in every formula.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-12 sm:px-6 lg:px-8">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-amber-50 p-1 my-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-amber-700'
                    : 'text-amber-900 hover:bg-white/[0.12] hover:text-amber-700'
                )
              }
            >
              Skincare
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-amber-700'
                    : 'text-amber-900 hover:bg-white/[0.12] hover:text-amber-700'
                )
              }
            >
              Haircare
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="mb-8">
                <div className="flex space-x-4 border-b border-amber-200">
                  {categories.skincare.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={classNames(
                        'px-4 py-2 text-sm font-medium',
                        selectedCategory === category
                          ? 'border-b-2 border-amber-700 text-amber-700'
                          : 'text-gray-500 hover:text-amber-700'
                      )}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <ProductGrid products={filteredProducts(selectedCategory)} />
            </Tab.Panel>

            <Tab.Panel>
              <ProductGrid products={filteredProducts('haircare')} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
