"use client";
import React, { useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 
import { motion } from 'framer-motion';


<section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Unleash Irresistible Bliss With Our Delectable Cookies!
          </h2>
          <hr className="border-red-600 border-t-2 w-1/4 mx-auto md:mx-0 mb-4" />
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Crafted with the finest ingredients, our cookies are a perfect blend of buttery goodness,
            premium chocolate, and wholesome nuts. Perfect for sharing with loved ones or savoring
            on your own, our cookies are a delightful treat that promises to sweeten any moment.
          </p>
          <button className="bg-white text-red-600 border border-red-600 px-8 py-3 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/bakery.jpeg" // Replace this with your image path
            alt="Basket of cookies"
            width={900} // Increased width
            height={600} // Increased height
            className="rounded-lg shadow-lg object-cover w-full" // Ensure the image fits the container
          />
        </div>
      </div>
    </section>

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

const birthdayCakes = [
    { id: 1, name: 'Strawberry Cake', price: 325.00, weight: '600 gm', image: '/straw.jpg' },
    { id: 2, name: 'Black Forest', price: 325.00, weight: '600gm', image: '/forest.jpg' },
    { id: 3, name: 'Black Currant', price: 325.00, weight: '600gm', image: '/current.jpg' },
  ];



  // const testimonials = [
  //   {
  //     name: 'Varun',
  //     text: 'The photo print on the cake was very clear and as shown in the picture. It was very fresh and delicious. Everybody loved it!',
  //   },
  //   {
  //     name: 'Anandhi',
  //     text: 'I have ordered Birthday cake for my baby girl with a customized theme. The cake is very good and the taste is chanceless very good. I showed a picture as per the theme. They provided the cake beautifully as per the picture.. thank you so much Abi bakery - Medavakkam',
  //   },
  //   // Add more testimonials as needed
  // ];
  

const BakeryHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <>
            <div className="min-h-screen bg-white">
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

                <main className="container mx-auto px-4 py-8">
                    <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src="/bakery.jpeg"
                      alt="Bakery showcase"
                      style={{ width: '100%', height: '1300px' }} // Adjust the height as needed
                      className="object-cover"
                      height={'1300px'}
                    />

                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                            <h1 className="text-4xl font-bold mb-4">Abi Sweets And Pastries</h1>
                            <p className="text-xl mb-8">Let The Uniqueness Of Our Specialty Speak For Itself - Where Taste Meets Perfection.</p>
                            <div className="flex space-x-4">
                                <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                                    Delivery
                                </button>
                                <button className="bg-white text-red-500 px-6 py-2 rounded-full hover:bg-gray-100">
                                    Pickup
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter the delivery location"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600">
                                    Use my current location
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen bg-white">
                        {/* Header section (unchanged) */}
                        <header className="bg-white shadow-sm">
                            {/* ... (previous header code remains the same) ... */}
                        </header>

                        <main className="container mx-auto px-4 py-8">
                            {/* Hero section (unchanged) */}
                            <div className="relative h-96 rounded-lg overflow-hidden">
                                {/* ... (previous hero section code remains the same) ... */}
                            </div>

                            {/* Location input section (unchanged) */}
                            <div className="mt-8">
                                {/* ... (previous location input code remains the same) ... */}
                            </div>

                            {/* Products section */}
                            <section className="mt-16">
                                <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
                                    Our Products
                                    <div className="w-24 h-1 bg-red-500 mx-auto mt-2"></div>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {products.map((product) => (
                                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" width={600} height={400} />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </main>
                    </div>

                </main>
            </div>


            <div className="min-h-screen bg-white">
      {/* Header section (unchanged) */}
      <header className="bg-white shadow-sm">
        {/* ... (previous header code remains the same) ... */}
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero section (unchanged) */}
        <div className="relative h-96 rounded-lg overflow-hidden">
          {/* ... (previous hero section code remains the same) ... */}
        </div>

        {/* Location input section (unchanged) */}
        <div className="mt-8">
          {/* ... (previous location input code remains the same) ... */}
        </div>

        {/* Products section (unchanged) */}
        <section className="mt-16">
          {/* ... (previous products section code remains the same) ... */}
        </section>

        {/* Customized Cakes section with reduced image size */}
        <section className="mt-16 bg-gray-100 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 p-8">
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                Customized Cakes For Your Loved One&apos;s
              </h2>
              <p className="text-gray-700 mb-6">
                At Abi Sweets and Pastries we take pride in offering customized cakes tailored to
                make your loved one&apos;s celebration truly unforgettable. Our expert bakers blend
                creativity with quality ingredients to craft cakes that not only look stunning but
                also delight the taste buds. Whether it&apos;s a birthday, anniversary, or any milestone
                event, our personalized cakes add a sweet touch to your cherished moments.
                Choose from a wide range of flavors, designs, and sizes, and let us bring your
                vision to life. Make your special occasions even sweeter with our personalized
                touch at Abi Sweets and Pastries.
              </p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
                View Collection
              </button>
            </div>
            <div className="md:w-2/5 p-4">
              <Image
                src="/democake.jpg"
                alt="Customized cake with flowers"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>
    </div>



    <div className="min-h-screen bg-white">
      {/* Previous sections remain unchanged */}

      {/* Customized Cakes section */}
      <section className="mt-16 bg-gray-100 rounded-lg overflow-hidden">
        {/* ... (customized cakes section content remains unchanged) ... */}
      </section>

      {/* Birthday Cakes Showcase */}
      <section className="mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-2">
            Birthday Bliss With Cakes
            <div className="w-48 h-1 bg-red-500 mx-auto mt-2"></div>
          </h2>
          <p className="text-center text-gray-600 mb-6">Birthdays are meant for sweetness that lasts forever.</p>

          <div className="grid grid-cols-12 gap-4">
            {/* Featured Birthday Cake */}
            <div className="col-span-6 relative group">
              <Image src="/api/placeholder/600/400" alt="Featured Birthday Cake" className="w-full h-full object-cover rounded-lg shadow-lg" width={600} height={400} />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-1">Birthday Cakes</h3>
                <p className="mb-2 text-sm">For your Special One</p>
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Other Birthday Cakes */}
            {birthdayCakes.map((cake) => (
              <div key={cake.id} className="col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={cake.image} alt={cake.name} className="w-full h-32 object-cover" width={600} height={400} />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{cake.name}</h3>
                  <p className="text-xs text-gray-600">Rs. {cake.price.toFixed(2)} ({cake.weight})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (rest of the component remains unchanged) */}
    </div>


    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Unleash Irresistible Bliss With Our Delectable Cookies!
          </h2>
          <hr className="border-red-600 border-t-2 w-1/4 mx-auto md:mx-0 mb-4" />
          <p className="text-gray-600 mb-6">
            Crafted with the finest ingredients, our cookies are a perfect blend of buttery goodness,
            premium chocolate, and wholesome nuts. Perfect for sharing with loved ones or savoring
            on your own, our cookies are a delightful treat that promises to sweeten any moment.
          </p>
          <button className="bg-white text-red-600 border border-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/bakery.jpeg" // Replace this with your image path
            alt="Basket of cookies"
            width={900} // Adjust the width and height to make it smaller
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>



    <footer className="bg-pink-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-black mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#">Our Products</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h3 className="font-bold text-black mb-4">OUR LOCATIONS</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Ambattur</li>
              <li>K K Road</li>
              <li>Thirumullaivoyal</li>
              {/* <li>Keelkattalai</li>
              <li>Perambur</li> */}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-black mb-4">FOLLOW US</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-black hover:text-gray-600">
                <FaFacebook size={28} />
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          {/* Call & Order */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-black mb-4">CALL & ORDER NOW</h3>
            <p className="text-gray-700">
              <a href="tel:+917305222727" className="hover:text-black">+91 7305222727</a>
            </p>
            <h3 className="font-bold text-black mt-4">DELIVERY LOCATION</h3>
            <p className="text-gray-700">Delivery is limited to 15km from store.</p>
            <p className="text-gray-500">Check delivery availability</p>
          </div>
        </div>
      </div>
    </footer>




        </>
    );
};

export default BakeryHomepage;