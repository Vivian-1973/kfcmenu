// components/HomePage.js
import React from 'react';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from 'next-themes';

const HomePage = () => {
    const { theme } = useTheme();

    return (
        <div className={`container mx-auto mt-10 text-center ${theme === 'dark' ? 'dark' : 'light'}`}>
            {/* Image Banner */}
            <div className="relative mb-10 p-16">
                <Image
                    className='mt-16'
                    src="/herobanner.jpg" // Add the path to your banner image
                    alt="KFC Banner"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h1 className="text-4xl font-bold mb-8 py-10">KFC Menu</h1>

            {/* Navigation Bar */}
            <nav className="p-4 fixed w-full top-0 z-10">
                <div className="flex items-center justify-between">
                    <img src="/kfc-logo.png" alt="KFC Logo" className="h-11 bg-transparent" />

                    <div className="flex space-x-4">
                        <a className="text-kfcRed hover:underline" href="/" passHref>
                            Home
                        </a>
                        <a href="/contact" className="text-kfcRed hover:underline">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
                <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
                <a href="/login" >
                    Login
                </a>
                </button>
                <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-green-300">
                <a href="/signup" >
                    Signup
                </a>
                </button>
            </div>

            {/* Theme toggle */}
            <div className="fixed bottom-4 right-4">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default HomePage;
