'use client';
import React, { useState } from 'react';
import { Phone, Headphones, Bike, Search, User, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaTruck, FaLink } from 'react-icons/fa';
import Image from 'next/image';

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ReasonCard = ({ icon: Icon, title, description }) => (
    <motion.div
      className="flex flex-col items-center p-4 text-center transition-transform hover:scale-105 w-full md:w-1/3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 p-3 bg-white rounded-full">
        <Icon className="w-12 h-12 text-[#E52A74]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 h-14 flex items-center justify-center">{title}</h3>
      <p className="text-sm h-24 overflow-hidden">{description}</p>
    </motion.div>
  );

  const ReasonsToShop = () => {
    const reasons = [
      {
        icon: Phone,
        title: "PHONE ORDERS",
        description: "We take orders 24/7 So give a Call: +91 7305222727"
      },
      {
        icon: Headphones,
        title: "CUSTOMER SERVICE",
        description: "24/7 Support via Call | Whatsapp | Email"
      },
      {
        icon: Bike,
        title: "FREE DELIVERY",
        description: "Free delivery is offered within a 10 km radius of the Abi Cakes location; beyond that distance, a delivery fee will apply."
      }
    ];

    return (
      <div className="bg-[#E52A74] text-white p-8">
        <motion.h2
          className="text-2xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          REASONS TO SHOP WITH US
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-around items-start">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
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

      <div className="bg-pink-50 min-h-screen pt-24">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[#E52A74] opacity-80"></div>
          <div className="relative z-10 flex justify-center items-center py-20">
            <motion.h1
              className="text-white text-5xl font-bold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Us
            </motion.h1>
          </div>
        </motion.div>

        <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              className="rounded-lg shadow-lg"
              src="/bbb.jpg"
              alt="Abi Sweets Store"
              width={600} 
              height={400}  
            />

          </motion.div>

          <motion.div
            className="order-2 lg:order-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-[#373281] mb-6">
              Welcome to Abi Sweets and Pastries
            </h2>
            <p className="text-lg text-[#373281] mb-4">
              Indulge your senses in the sweet symphony of Abi Sweets and Pastries,
              where every creation is a labor of love and a celebration of flavors.
              Established with a passion for crafting exquisite confections, our
              journey is marked by a commitment to quality, tradition, and the joy
              of sharing delightful moments with you.
            </p>

            <h3 className="text-2xl font-semibold text-[#373281] mb-4">Our Story</h3>
            <p className="text-lg text-[#373281]">
              Abi Sweets and Pastries was founded with a deep love for traditional
              sweets and a dedication to maintaining the highest standards of taste
              and quality. From our humble beginnings to our current operations, we
              have been driven by the same philosophy — to create a memorable
              experience for every customer who walks through our doors.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="container mx-auto mt-16 text-center bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-bold text-[#373281] mb-6">Why Choose Us?</h3>
          <p className="text-lg text-[#373281] mb-8">
            Our passion for sweets is matched only by our dedication to creating
            moments of joy through our products. With a wide range of offerings, we
            cater to both traditional and modern tastes, ensuring that there&apos;s
            something for everyone.
          </p>
        </motion.div>
      </div>

      <ReasonsToShop />

      <footer className="bg-[#373281] py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">
                <FaLink className="inline-block mr-2" /> QUICK LINKS
              </h3>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Our Products</a></li>
                <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Disclaimer</a></li>
                <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">
                <FaMapMarkerAlt className="inline-block mr-2" /> OUR LOCATIONS
              </h3>
              <ul className="space-y-2 text-white">
                <li>Pallikaranai</li>
                <li>Medavakkam</li>
                <li>Perumbakkam</li>
                <li>Keelkattalai</li>
                <li>Perambur</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-white mb-4">
                FOLLOW US
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-white hover:text-[#E52A74] transition-colors duration-300">
                  <FaFacebookF size={28} />
                </a>
                <a href="#" className="text-white hover:text-[#E52A74] transition-colors duration-300">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-bold text-white mb-4">
                <FaPhoneAlt className="inline-block mr-2" /> CALL & ORDER NOW
              </h3>
              <p className="text-white">
                <a href="tel:+917305222727" className="hover:text-[#E52A74] transition-colors duration-300">+91 7305222727</a>
              </p>
              <h3 className="font-bold text-white mt-4">
                <FaTruck className="inline-block mr-2" /> DELIVERY LOCATION
              </h3>
              <p className="text-white">Delivery is limited to 15km from store.</p>
              <p className="text-[#E52A74]">Check delivery availability</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;