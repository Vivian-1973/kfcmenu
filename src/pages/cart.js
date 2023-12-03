// pages/cart.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from 'next-themes';
import { FaShoppingCart } from "react-icons/fa";
import { removeFromCart, clearCart, selectCart, increaseQuantity, decreaseQuantity } from '../store';

const Cart = () => {
    const cart = useSelector(selectCart);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const dispatch = useDispatch();
    const { theme, setTheme } = useTheme();

    const handlePayment = async () => {
        setPaymentLoading(true);

        try {
            // Simulate a delay for demonstration purposes (you can remove this in a real implementation)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate a successful payment (you can replace this with actual payment processing logic)
            alert('Payment successful!');

            // Clear the cart
            dispatch(clearCart());
            // Reset the loading state
            setPaymentLoading(false);
        } catch (error) {
            console.error('Error during payment:', error);
            setPaymentLoading(false);
        }
    };

    const handleAdjustQuantity = (itemId, action) => {
        if (action === 'increase') {
            dispatch(increaseQuantity(itemId));
        } else if (action === 'decrease') {
            dispatch(decreaseQuantity(itemId));
        }
    };

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart({ id: itemId }));
    };

    // Calculate the total quantity for each item
    const calculateItemQuantities = () => {
        const itemQuantities = {};

        cart.forEach((item) => {
            if (item.id in itemQuantities) {
                itemQuantities[item.id] += item.quantity;
            } else {
                itemQuantities[item.id] = item.quantity;
            }
        });

        return itemQuantities;
    };

    return (
        <div className="bg-kfcRed text-kfcWhite min-h-screen">
            <Head>
                <title>KFC Shopping Cart</title>
                <meta name="description" content="KFC Shopping Cart" />
                <link rel="icon" href="/kfc-icon.png" />
            </Head>

            {/* Navigation Bar */}
            <nav className="p-4 fixed w-full top-0 z-10">
                <div className="flex items-center justify-between">
                    <img src="/kfc-logo.png" alt="KFC Logo" className="h-10 bg-transparent" />

                    <div className="flex space-x-4">
                        <a href="/" className="text-kfcRed hover:underline">
                            Menu
                        </a>
                        <a href="#" className="text-kfcRed hover:underline">
                            Specials
                        </a>
                        <a href="#" className="text-kfcRed hover:underline">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Cart Display */}
            <div className="pt-16 p-4 md:p-8 lg:p-12">
                <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div key={item.id} className="p-4 rounded-md shadow-md mb-4">
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-base text-gray-600 mb-2">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span>${item.price.toFixed(2)}</span>
                                    {/* Add buttons to adjust quantity or remove item from the cart */}
                                    <button
                                        onClick={() => handleAdjustQuantity(item.id, 'increase')}
                                        className="bg-kfcRed text-kfcWhite py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
                                    >
                                        +
                                    </button>
                                    <span>{calculateItemQuantities()[item.id]}</span>
                                    <button
                                        onClick={() => handleAdjustQuantity(item.id, 'decrease')}
                                        className="bg-kfcRed text-kfcWhite py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="bg-kfcRed text-kfcWhite py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="mt-4">
                            <strong>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
                            <button
                                onClick={handlePayment}
                                disabled={paymentLoading || cart.length === 0}
                                className="bg-kfcRed text-kfcWhite py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none mt-4"
                            >
                                {paymentLoading ? 'Processing...' : 'Pay Now'}
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Theme Toggle Button */}
            <div className="fixed bottom-4 right-4">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Cart;
