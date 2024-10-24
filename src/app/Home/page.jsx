'use client';
import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaTruck, FaLink } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const BakeryHomepage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const products = [
        { id: 1, name: 'Birthday Cakes', image: '/birthdaycake.jpg' },
        { id: 2, name: 'Bread Varieties', image: '/breadvariety.jpg' },
        { id: 3, name: 'Cakes', image: '/cakepastry.jpg' },
        { id: 4, name: 'Continental Snacks', image: '/snacks.jpg' },
        { id: 5, name: 'Cookies', image: '/cookies.jpg' },
        { id: 6, name: 'Donuts', image: '/dono.jpg' },
        { id: 7, name: 'Dry Cakes', image: '/dry.jpg' },
        { id: 8, name: 'Pastries', image: '/pastery2.jpg' },
        { id: 9, name: 'Puffs', image: '/puff.jpg' },
        { id: 10, name: 'Rusks', image: '/rusk.jpg' },
        { id: 11, name: 'Savories', image: '/bevrages.jpg' },
        { id: 12, name: 'Sweets', image: '/sweets.jpg' },
    ];

    // const [birthdayCakes, setBirthdayCakes] = useState([]);

    useEffect(() => {
        fetchCakes();
    }, []);

    const fetchCakes = async () => {
        const cakesData = await fetch('/api/cakes').then(res => res.json());
        setBirthdayCakes(cakesData);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const floatingAnimation = {
        y: [-10, 10],
        transition: {
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                className="relative h-96 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                >
                <div className="absolute inset-0 bg-pink-500 bg-opacity-60 z-90"></div>
                
                <motion.img
                    src="/bakery.jpeg"
                    alt="Bakery showcase"
                    className="w-full h-full object-cover opacity-90 z-10 relative"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                />

                <motion.div
                    className="absolute inset-0 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.div
                    className="h-full flex flex-col items-center justify-center text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    >
                    <motion.h1
                        className="text-4xl font-bold mb-4 text-[#373281]"
                        variants={itemVariants}
                        animate={{ ...floatingAnimation, scale: [1, 1.02, 1] }}
                    >
                        Aarthi Sweets And Pastries
                    </motion.h1>

                    <motion.p
                        className="text-xl mb-8 text-center max-w-2xl text-[#f1f1f1]"
                        variants={itemVariants}
                    >
                        Let The Uniqueness Of Our Specialty Speak For Itself - Where Taste Meets Perfection.
                    </motion.p>

                    <motion.div className="flex space-x-4" variants={itemVariants}>
                        <motion.button
                        className="bg-[#E52A74] text-white px-6 py-2 rounded-full hover:bg-[#E52A74]/80 transition duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(229, 42, 116, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        >
                        Delivery
                        </motion.button>

                        <motion.button
                        className="bg-white text-[#E52A74] px-6 py-2 rounded-full hover:bg-[#E52A74]/10 transition duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        >
                        Pickup
                        </motion.button>
                    </motion.div>
                    </motion.div>
                </motion.div>
                </motion.div>


                <section className="mt-16">
                    <motion.h2
                        className="text-3xl font-bold text-center text-[#373281] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Products
                        <div className="w-24 h-1 bg-[#E52A74] mx-auto mt-2"></div>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                    width={600}
                                    height={400}
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-[#373281]">{product.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="bg-white py-12 mt-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-[#373281] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Unleash Irresistible Bliss With Our Delectable Cookies!
                        <div className="w-24 h-1 bg-[#E52A74] mx-auto mt-2"></div>
                    </motion.h2>

                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="md:w-1/2 text-center md:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-gray-600 mb-6">
                                Crafted with the finest ingredients, our cookies are a perfect blend of buttery goodness,
                                premium chocolate, and wholesome nuts. Perfect for sharing with loved ones or savoring
                                on your own, our cookies are a delightful treat that promises to sweeten any moment.
                            </p>
                            <motion.button
                                className="bg-white text-[#E52A74] border border-[#E52A74] px-6 py-2 rounded-full hover:bg-[#E52A74] hover:text-white transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                SHOP NOW
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2 mt-8 md:mt-0"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/bakery.jpeg"
                                alt="Basket of cookies"
                                width={900}
                                height={600}
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>
                </section>


                <footer className="bg-[#E52A74]/10 py-12 mt-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                            {/* Quick Links Section */}
                            <div>
                                <h3 className="font-bold text-[#373281] mb-4">
                                    <FaLink className="inline-block mr-2" /> QUICK LINKS
                                </h3>
                                <ul className="space-y-2 text-[#373281]">
                                    <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Our Products</a></li>
                                    <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Disclaimer</a></li>
                                    <li><a href="#" className="hover:text-[#E52A74] transition-colors duration-300">Terms & Conditions</a></li>
                                </ul>
                            </div>

                            {/* Our Locations Section */}
                            <div>
                                <h3 className="font-bold text-[#373281] mb-4">
                                    <FaMapMarkerAlt className="inline-block mr-2" /> OUR LOCATIONS
                                </h3>

                                <p className="space-y-2 text-[#373281]" >No. 27, South Park Street,<br /> Secretariat Colony, <br /> Venkatapuram, Ambattur, <br />

                                    Chennai - 600053.</p>

                            </div>

                            {/* Social Media Section */}
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-[#373281] mb-4">
                                    FOLLOW US
                                </h3>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    <a href="#" className="text-[#373281] hover:text-[#E52A74] transition-colors duration-300">
                                        <FaFacebookF size={28} />
                                    </a>
                                    <a href="#" className="text-[#373281] hover:text-[#E52A74] transition-colors duration-300">
                                        <FaInstagram size={28} />
                                    </a>
                                </div>
                            </div>

                            {/* Contact & Delivery Section */}
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-[#373281] mb-4">
                                    <FaPhoneAlt className="inline-block mr-2" /> CALL & ORDER NOW
                                </h3>
                                <p className="text-[#373281]">
                                    <a href="tel:+917305222727" className="hover:text-[#E52A74] transition-colors duration-300">+91 94441 92925 <br />
                                        +91 93607 92743</a>
                                </p>
                                <h3 className="font-bold text-[#373281] mt-4">
                                    <FaTruck className="inline-block mr-2" /> DELIVERY LOCATION
                                </h3>
                                <p className="text-[#373281]">Delivery is limited to 15km from store.</p>
                            </div>

                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default BakeryHomepage;