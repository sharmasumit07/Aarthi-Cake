'use client';
import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaTruck, FaLink } from 'react-icons/fa';
import Image from 'next/image';

const categories = [
  "Birthday Cakes", "Bread Varieties", "Cakes", "Continental Snacks", "Cookies",
  "Desserts", "Pastries", "Puffs Varieties", "Rusk", "Snacks", "Sweets"
];

const mockProducts = {
  "Birthday Cakes": [
    { name: "Chocolate Cake", price: 500, image: "/Chocolate Cake.jpg" },
    { name: "Vanilla Cake", price: 450, image: "/Vanilla Cake.jpg" },
    { name: "Strawberry Cake", price: 550, image: "/Strawberry Cake.jpg" },
    { name: "Red Velvet Cake", price: 600, image: "/Red Velvet Cake.jpg" },
    { name: "Black Forest Cake", price: 580, image: "/Black Forest Cake.jpg" },
    { name: "Butterscotch Cake", price: 520, image: "/Butterscotch Cake.jpg" },
  ],
  "Bread Varieties": [
    { name: "Sourdough", price: 500, image: "/Sourdough.jpg" },
    { name: "Whole Wheat Bread", price: 450, image: "/Whole Wheat Bread.jpg" },
    { name: "Rye Bread", price: 550, image: "/RyeBread.jpg" },
    { name: "Baguette", price: 600, image: "/Baguette.jpg" },
    { name: "Ciabatta", price: 580, image: "/Ciabatta.jpg" },
    { name: "Focaccia", price: 520, image: "/Focaccia.jpg" },
  ],
  "Cakes": [
    { name: "Chocolate Cake", price: 500, image: "/Chocolate Cake.jpg" },
    { name: "Vanilla Cake", price: 450, image: "/Vanilla Cake.jpg" },
    { name: "Strawberry Cake", price: 550, image: "/Strawberry Cake.jpg" },
    { name: "Red Velvet Cake", price: 600, image: "/Red Velvet Cake.jpg" },
    { name: "Black Forest Cake", price: 580, image: "/Black Forest Cake.jpg" },
    { name: "Butterscotch Cake", price: 520, image: "/Butterscotch Cake.jpg" },
  ],
  "Continental Snacks": [
    { name: "Bruschetta", price: 300, image: "/Bruschetta.jpg" },
    { name: "Cheese Platter", price: 700, image: "/CheesePlatter.jpg" },
    { name: "Garlic Bread", price: 250, image: "/GarlicBread.jpg" },
    { name: "Spring Rolls", price: 350, image: "/SpringRolls.jpg" },
    { name: "Stuffed Mushrooms", price: 400, image: "/StuffedMushrooms.jpg" },
    { name: "Caprese Skewers", price: 320, image: "/CapreseSkewers.jpg" },
  ],
  "Desserts": [
    { name: "Chocolate Mousse", price: 450, image: "/ChocolateMousse.jpg" },
    { name: "Tiramisu", price: 500, image: "/Tiramisu.jpg" },
    { name: "Fruit Tart", price: 480, image: "/FruitTart.jpg" },
    { name: "Panna Cotta", price: 550, image: "/PannaCotta.jpg" },
    { name: "Macarons", price: 600, image: "/Macarons.jpg" },
    { name: "Cheesecake", price: 550, image: "/Cheesecake.jpg" },
  ],
  "Pastries": [
    { name: "Chocolate Eclair", price: 250, image: "/ChocolateEclair.jpg" },
    { name: "Apple Strudel", price: 300, image: "/AppleStrudel.jpg" },
    { name: "Cream Puff", price: 280, image: "/CreamPuff.jpg" },
    { name: "Custard Danish", price: 320, image: "/CustardDanish.jpg" },
    { name: "Fruit Danish", price: 350, image: "/FruitDanish.jpg" },
    { name: "Almond Croissant", price: 290, image: "/AlmondCroissant.jpg" },
  ],
  "Puffs Varieties": [
    { name: "Cheese Puff", price: 200, image: "/CheesePuff.jpg" },
    { name: "Vegetable Puff", price: 220, image: "/VegetablePuff.jpg" },
    { name: "Chicken Puff", price: 300, image: "/ChickenPuff.jpg" },
    { name: "Mushroom Puff", price: 280, image: "/MushroomPuff.jpg" },
    { name: "Spinach Puff", price: 240, image: "/SpinachPuff.jpg" },
    { name: "Paneer Puff", price: 260, image: "/PaneerPuff.jpg" },
  ],
  "Rusk": [
    { name: "Butter Rusk", price: 150, image: "/ButterRusk.jpg" },
    { name: "Sugar Rusk", price: 160, image: "/SugarRusk.jpg" },
    { name: "Whole Wheat Rusk", price: 170, image: "/WholeWheatRusk.jpg" },
    { name: "Fruit Rusk", price: 180, image: "/FruitRusk.jpg" },
    { name: "Almond Rusk", price: 200, image: "/AlmondRusk.jpg" },
    { name: "Chocolate Rusk", price: 190, image: "/ChocolateRusk.jpg" },
  ],
  "Snacks": [
    { name: "Cheese Puffs", price: 120, image: "/CheesePuffs.jpg" },
    { name: "Veggie Chips", price: 140, image: "/VeggieChips.jpg" },
    { name: "Spicy Peanuts", price: 110, image: "/SpicyPeanuts.jpg" },
    { name: "Masala Papad", price: 130, image: "/MasalaPapad.jpg" },
    { name: "Dhokla", price: 150, image: "/Dhokla.jpg" },
    { name: "Potato Wedges", price: 160, image: "/PotatoWedges.jpg" },
  ],
  "Sweets": [
    { name: "Gulab Jamun", price: 200, image: "/Gulab Jamun.jpg" },
    { name: "Rasgulla", price: 180, image: "/Rasgulla.jpg" },
    { name: "Jalebi", price: 160, image: "/Jalebi.jpg" },
    { name: "Kaju Katli", price: 250, image: "/KajuKatli.jpg" },
    { name: "Barfi", price: 220, image: "/Barfi.jpg" },
    { name: "Ladoo", price: 150, image: "/Ladoo.jpg" },
  ],
  "Cookies": [
    { name: "Chocolate Chip Cookie", price: 150, image: "/ChocolateChipCookie.jpg" },
    { name: "Oatmeal Raisin Cookie", price: 160, image: "/OatmealRaisinCookie.jpg" },
    { name: "Peanut Butter Cookie", price: 170, image: "/PeanutButterCookie.jpg" },
    { name: "Snickerdoodle", price: 180, image: "/Snickerdoodle.jpg" },
    { name: "Double Chocolate Cookie", price: 200, image: "/DoubleChocolateCookie.jpg" },
    { name: "Sugar Cookie", price: 140, image: "/SugarCookie.jpg" },
  ],
};

const ProductCard = ({ name, price, image }) => (
  <motion.div
    className="border rounded-lg overflow-hidden shadow-md bg-white"
    whileHover={{ scale: 1.05 }} // Adding hover effect to scale the card
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={image} alt={name} className="w-full h-48 object-cover" width={600} height={400} />
    <div className="p-4">
      <h3 className="font-semibold text-black">{name}</h3>
      <p className="text-gray-600">Rs. {price.toFixed(2)}</p>
    </div>
  </motion.div>
);

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // const tailwindConfig = {
  //   theme: {
  //     extend: {
  //       colors: {
  //         'navy': {
  //           900: '#5D5994', // Adjust this hex code to match your logo's exact navy blue
  //         },
  //         'pink': {
  //           500: '#ec4899', // Adjust this hex code to match your logo's exact pink
  //           600: '#db2777', // Slightly darker shade for hover states
  //         },
  //       },
  //     },
  //   },
  // };

  return (
    <div className="bg-rose-50 min-h-screen">
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
              <span className="text-xl font-semibold">Ambattur Aarthi Sweets & Bakery</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
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


      <h1 className="text-3xl font-bold text-center text-rose-600 pt-28"style={{ color: '#E52A74' }}>PRODUCTS</h1>
      <div className="flex container mx-auto p-4">
        {/* Categories */}
        <div className="w-1/4 pr-4">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#E52A74' }}>CATEGORIES</h2>
          <ul>
            {categories.map((category) => (
              <motion.li
                key={category}
                className={`cursor-pointer py-2 ${selectedCategory === category ? 'font-bold' : ''}`}
                style={{ color: selectedCategory === category ? '#E52A74' : 'black' }}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, color: "#E52A74" }} // Hover effect for category items
                transition={{ duration: 0.2 }}
              >
                {category}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Filter className="mr-2 text-rose-600" />
              <span className="font-bold text-[#E52A74]">FILTER</span>
            </div>
            <motion.select
              className="border rounded p-2 text-black"
              whileHover={{ scale: 1.02 }} // Scale effect on hover for select
              transition={{ duration: 0.2 }}
            >
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
            </motion.select>
          </div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }} // Initial animation for product grid
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {mockProducts[selectedCategory]?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </motion.div>
        </div>
      </div>




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

              <div>

                <ul className="space-y-2 text-[#373281]">
                  <li>Ambattur</li>
                  <li>K K Road</li>
                  <li>Thirumullaivoyal</li>
                  {/* <li>Keelkattalai</li>
              <li>Perambur</li> */}
                </ul>
              </div>

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
    </div>
  );
};

export default ProductPage;
