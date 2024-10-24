'use client';
import Image from "next/image";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingCart, Clock, MapPin, Truck, Store } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaTruck, FaLink } from 'react-icons/fa';

const ContactUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-rose-50">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-16 h-16">
                            <Image
                                src="/bakery_logo.png"
                                alt="Aarthi Cake Magic Logo"
                                className="w-full h-full object-contain rounded-full" 
                                width={600} 
                                height={400}
                            />
                        </div>

                        <div className={`font-serif ${isScrolled ? 'text-[#373281]' : 'text-[#373281]'} transition-colors duration-300`}>
                            <span className="text-xl font-semibold">Aarthi Cake Magic</span>
                        </div>
                    </motion.div>

                    <nav className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Products', 'Contact', 'Stores'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={item}
                                className={`${isScrolled ? 'text-[#373281]' : 'text-[#373281]'} hover:text-[#E52A74] transition-colors duration-300`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Search className={`w-6 h-6 ${isScrolled ? 'text-[#373281]' : 'text-[#373281]'}`} />
                        <User className={`w-6 h-6 ${isScrolled ? 'text-[#373281]' : 'text-[#373281]'}`} />
                        <div className="relative">
                            <ShoppingCart className={`w-6 h-6 ${isScrolled ? 'text-[#373281]' : 'text-[#373281]'}`} />
                            <span className="absolute -top-2 -right-2 bg-[#E52A74] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                0
                            </span>
                        </div>
                    </motion.div>
                </div>
            </header>

      <main className="container mx-auto px-4 py-24">
        <motion.div
          className="relative h-96 rounded-lg overflow-hidden mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/contact-banner.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-rose-900 bg-opacity-60 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl mb-8">We&apos;d love to hear from you!</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
              <Store className="w-6 h-6 mr-2 text-red-600" /> Aarti Sweets And Pastries
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              No. 4/853, Ground Floor Perumbakkam Main Road, Medavakkam, Chennai, Tamil Nadu 600100
            </p>

            <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-red-600" /> Store Hours
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Monday-Sunday: 8:30 am - 10:00 pm
            </p>

            <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-red-600" /> Our Locations
            </h3>
            <ul className="text-lg text-gray-700 mb-4">
              <li>Pallikaranai</li>
              <li>Perumbakkam</li>
              <li>Medavakkam</li>
              <li>Keelkattalai</li>
              <li>Perambur</li>
            </ul>

            <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center">
              <Truck className="w-6 h-6 mr-2 text-red-600" /> Home Delivery
            </h3>
            <p className="text-lg text-gray-700">
              Note: Home delivery is available only within Chennai.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Your Name (Required)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your Email (Required)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  className="bg-rose-500 text-white font-bold py-2 px-6 rounded-full hover:bg-rose-600 focus:outline-none focus:shadow-outline"
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEND TO US
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      
      <footer className="bg-rose-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Quick Links Section */}
            <div>
              <h3 className="font-bold text-rose-800 mb-4">
                <FaLink className="inline-block mr-2" /> QUICK LINKS
              </h3>
              <ul className="space-y-2 text-rose-900">
                <li><a href="#" className="hover:text-rose-600 transition-colors duration-300">Our Products</a></li>
                <li><a href="#" className="hover:text-rose-600 transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-rose-600 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-rose-600 transition-colors duration-300">Disclaimer</a></li>
                <li><a href="#" className="hover:text-rose-600 transition-colors duration-300">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Our Locations Section */}
            <div>
              <h3 className="font-bold text-rose-800 mb-4">
                <FaMapMarkerAlt className="inline-block mr-2" /> OUR LOCATIONS
              </h3>
              <ul className="space-y-2 text-rose-900">
                <li>Pallikaranai</li>
                <li>Medavakkam</li>
                <li>Perumbakkam</li>
                <li>Keelkattalai</li>
                <li>Perambur</li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-rose-800 mb-4">
                FOLLOW US
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-rose-800 hover:text-rose-600 transition-colors duration-300">
                  <FaFacebookF size={28} />
                </a>
                <a href="#" className="text-rose-800 hover:text-rose-600 transition-colors duration-300">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>

            {/* Contact & Delivery Section */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-rose-800 mb-4">
                <FaPhoneAlt className="inline-block mr-2" /> CALL & ORDER NOW
              </h3>
              <p className="text-rose-900">
                <a href="tel:+917305222727" className="hover:text-rose-600 transition-colors duration-300">+91 7305222727</a>
              </p>
              <h3 className="font-bold text-rose-800 mt-4">
                <FaTruck className="inline-block mr-2" /> DELIVERY LOCATION
              </h3>
              <p className="text-rose-900">Delivery is limited to 15km from store.</p>
              <p className="text-rose-700">Check delivery availability</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
