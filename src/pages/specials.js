// pages/specials.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from 'next-themes';
import { FaShoppingCart } from 'react-icons/fa';

const Specials = () => {
  const cart = useSelector((state) => state.cart);
  const { theme } = useTheme();

  return (
    <div className={`bg-kfcRed text-kfcWhite min-h-screen ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Head>
        <title>KFC Specials</title>
        <meta name="description" content="Special offers from KFC" />
        <link rel="icon" href="/kfc-icon.png" />
      </Head>

      {/* Navigation Bar */}
      <nav className={`p-4 fixed w-full top-0 z-10 ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="flex items-center justify-between">
          <img src="/kfc-logo.png" alt="KFC Logo" className="h-11 bg-transparent" />
          <div className="flex space-x-4">
            <a href="/menu" className="text-kfcRed hover:underline">
              Menu
            </a>
            <a href="/specials" className="text-kfcRed hover:underline">
              Specials
            </a>
            <a href="/contact" className="text-kfcRed hover:underline">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <Link href="/cart" className="flex items-center">
              <FaShoppingCart />
              <span className="ml-2">{cart.length}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Specials Content */}
      <div className="pt-16 p-4 md:p-8 lg:p-12">
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Special Offers</h1>
        <p className="text-lg mb-6">
          Discover exclusive offers and savor delicious savings on your favorite KFC items.
        </p>
        <ul className="list-disc pl-8 text-lg">
          <li className="mb-2">Combo Meals: Unbeatable deals on our combo meals.</li>
          <li className="mb-2">Family Buckets: Share joy with our family-sized buckets.</li>
          <li className="mb-2">Seasonal Specials: Indulge in limited-time seasonal delights.</li>
        </ul>
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Specials;
