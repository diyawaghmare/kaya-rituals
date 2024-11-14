import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-amber-900 mb-4">
              Kaya Rituals
            </h3>
            <p className="text-gray-600">
              Crafting pure, natural skincare with the golden touch of saffron.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-amber-900 mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-amber-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-900">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-amber-900 mb-4">
              Newsletter
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border-gray-200 focus:ring-amber-500 focus:border-amber-500 flex-1"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-900 text-white rounded-r-md hover:bg-amber-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Kaya Rituals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
