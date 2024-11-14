import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
            <h1 className="text-5xl font-serif text-white mb-6">Contact Us</h1>
            <p className="text-gray-200 text-lg">
              Have questions about our products or want to place an order? We'd
              love to hear from you.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-2xl font-serif text-amber-900 mb-6">
              Send us a message
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-12">
            <div className="bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-amber-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-700 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-amber-900">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 81590 25253</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-700 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-amber-900">
                      Email
                    </h3>
                    <p className="text-gray-600">reena.waghmare@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-700 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-amber-900">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Amsri Central Court
                      <br />
                      Secunderabad, Telangana 500025
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-amber-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
