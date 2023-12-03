// pages/menu.js
import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store';
import ThemeToggle from '../components/ThemeToggle';
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from 'next-themes';

const Menu = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { theme, setTheme } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showOptions, setShowOptions] = useState(null);
  const handleAddToCart = (menuItem) => {
    dispatch(addToCart(menuItem));
  };

  const handleViewOptions = (item) => {
    setSelectedItem(item);
    setShowOptions(showOptions === item.id ? null : item.id); // Toggle the visibility of options
  };

  const handleOptionChange = (optionType, value) => {
    setSelectedItem((prevItem) => ({
      ...prevItem,
      options: {
        ...prevItem.options,
        [optionType]: value,
      },
    }));
  };

  const handleAddToCartWithOptions = () => {
    dispatch(addToCart(selectedItem));
    setShowOptions(null); // Close the options dropdown after adding to cart
  };

  const getOptionInputField = (option, item) => {
    if (option === 'Spicy Level') {
      return (
        <select
          onChange={(e) => handleOptionChange(option, e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Choose</option>
          <option value="Mild">Mild</option>
          <option value="Regular">Regular</option>
          <option value="Spicy">Spicy</option>
        </select>
      );
    }
    // Add more conditionals for other options here
    return (
      <input
        type="text"
        onChange={(e) => handleOptionChange(option, e.target.value)}
        className="p-2 border rounded-md"
      />
    );
  };

  const menuItems = [
    {
      id: 1,
      name: 'Original Recipe Chicken',
      description: 'The classic fried chicken that started it all.',
      price: 9.99,
      image: '/pngimg.com - kfc_food_PNG7.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 2,
      name: 'Spicy Zinger Burger',
      description: 'A spicy and flavorful chicken burger with a kick.',
      price: 8.49,
      image: '/pngimg.com - kfc_food_PNG59.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 3,
      name: 'Crispy Chicken Tenders',
      description: 'Delicious crispy chicken tenders served with your favorite dipping sauce.',
      price: 7.99,
      image: '/pngimg.com - kfc_food_PNG44.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 4,
      name: 'BBQ Pulled Chicken Sandwich',
      description: 'Tender pulled chicken smothered in savory BBQ sauce, served in a soft bun.',
      price: 10.99,
      image: '/chicken-sandwich.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 5,
      name: 'Grilled Chicken Salad',
      description: 'A refreshing salad with grilled chicken, mixed greens, and a tangy vinaigrette.',
      price: 6.99,
      image: '/chicken-salad.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 6,
      name: 'Mighty Bucket for One',
      description: 'A satisfying meal with a variety of chicken pieces, fries, and a drink.',
      price: 12.99,
      image: '/pngimg.com - kfc_food_PNG63.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 7,
      name: 'Twister Wrap',
      description: 'A flavorful chicken wrap with fresh veggies and signature sauce.',
      price: 8.99,
      image: '/twister-wrap.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 8,
      name: 'Chicken Popcorn',
      description: 'Irresistible bite-sized chicken pieces, perfect for snacking.',
      price: 5.49,
      image: '/chickenpopcorn.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 9,
      name: 'Double Down Burger',
      description: 'A bold burger with chicken fillets replacing traditional buns.',
      price: 11.49,
      image: '/doubledown-burger.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    {
      id: 10,
      name: 'Sweet Chili Wings',
      description: 'Tender chicken wings coated in a sweet and spicy chili glaze.',
      price: 9.49,
      image: '/pngimg.com - kfc_food_PNG24.png',
      customizableOptions: ['Spicy Level', 'Serving Size'],
    },
    // Add more menu items as needed
  ];

  return (
    <div className={`bg-kfcRed text-kfcWhite min-h-screen ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <Head>
        <title>KFC Menu</title>
        <meta name="description" content="Explore our delicious menu items at KFC." />
        <link rel="icon" href="/kfc-icon.png" />

      </Head>

      {/* Navigation Bar */}
      <nav className={`p-4 fixed w-full top-0 z-10 ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="flex items-center justify-between">
          <img src="/kfc-logo.png" alt="KFC Logo" className="h-11 bg-transparent" />
          <div className="flex space-x-4">
            <a href="/" className="text-kfcRed hover:underline">
              Menu
            </a>
            <a href="/specials" className="text-kfcRed hover:underline">
              Specials
            </a>
            <a href="/contact" className="text-kfcRed hover:underline">
              Contact
            </a>
            {/* <Link href="/login" className="text-kfcRed hover:underline">
              Login
            </Link>
            <Link href="/signup" className="text-kfcRed hover:underline">
              Signup
            </Link> */}
          </div>
          <div className="flex items-center">
            <Link href="/cart" className="flex items-center">
              <FaShoppingCart />
              <span className="ml-2">{cart.length}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <div className="pt-20 p-4 md:p-8 lg:p-12 relative z-0">
        <h1 className={`text-3xl mt-10 md:text-4xl lg:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-kfcBlack' : 'text-kfcWhite'}`}>Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div key={item.id} className={`p-4 rounded-md shadow-md ${theme === 'light' ? 'light' : 'dark'}`}>
              <img className="w-full h-64 object-cover mb-4 md:h-96 lg:h-120" src={item.image} alt={item.name} />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{item.name}</h2>
              <p className="text-base md:text-lg lg:text-xl">{item.description}</p>
              <p className="text-base md:text-lg lg:text-xl mt-2">Price: ${item.price.toFixed(2)}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => handleViewOptions(item)}
                    type="button"
                    className="bg-kfcRed text-kfcWhite py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
                  >
                    View Options
                  </button>
                  {showOptions === item.id && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.customizableOptions.map((option, index) => (
                          <div key={index} className="px-4 py-2">
                            <label className="block text-sm text-gray-700" htmlFor={`${option}-${index}`}>
                              {option}:
                            </label>
                            {getOptionInputField(option, item)}
                          </div>
                        ))}
                        <button
                          onClick={handleAddToCartWithOptions}
                          className="block w-full text-left px-4 py-2 text-sm text-kfcWhite bg-kfcRed hover:bg-opacity-80 focus:outline-none"
                          role="menuitem"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-kfcRed text-kfcWhite py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Toggle Button ... */}
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Menu;