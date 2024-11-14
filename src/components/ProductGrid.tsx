import React, { useState } from 'react';
import { Product } from '../types';
import ProductDialog from './ProductDialog';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="aspect-square rounded-md overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-amber-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {/* <p className="text-amber-700">₹{product.price}</p> */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-amber-700">
                  ₹{product.price}
                </span>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-amber-900 text-white rounded-md hover:bg-amber-800 transition-colors duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
