import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface ProductDialogProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDialog({ product, onClose }: ProductDialogProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="p-6">
            <div className="aspect-square w-full rounded-lg overflow-hidden mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-serif text-amber-900 mb-2">{product.name}</h3>
            <p className="text-lg font-medium text-amber-700 mb-4">₹{product.price}</p>
            
            <div className="prose prose-amber max-w-none">
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-amber-900">Key Benefits</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-amber-900">How to Use</h4>
                  <p className="text-gray-600">{product.usage}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-amber-900">Ingredients</h4>
                  <p className="text-gray-600">{product.ingredients}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}