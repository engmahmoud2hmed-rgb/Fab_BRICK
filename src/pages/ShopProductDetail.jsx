// src/pages/ShopProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../store/cartSlice";
import { motion } from "framer-motion";

import uniImage from '../../IMG2/UNI.jpg';
import shop2 from '../assets/image/shop2.jpg';
import shop3 from '../assets/image/shop3.jpg';
import yellowChair from '../assets/image/yellow-chair.jpg';

const products = [
    {
        id: '1',
        slug: 'classic-wall-covering',
        name: "Unique Pieces",
        price: 120,
        image: uniImage,
        description: "One-of-a-kind artistic wall pieces for distinctive spaces.",
        fullDescription: "Discover our collection of Unique Pieces - each one crafted to be truly one-of-a-kind. These artistic wall coverings bring character and individuality to your space. Made with premium materials and exceptional craftsmanship, every piece tells its own story and creates a distinctive focal point in any room."
    },
    {
        id: '2',
        slug: 'modern-texture-brick',
        name: "Modern Texture Brick",
        price: 95,
        image: shop2,
        description: "Textured brick design for a bold look.",
        fullDescription: "Make a statement with our Modern Texture Brick. The unique textured surface adds depth and character to your walls, creating a bold focal point in any room. Perfect for contemporary and industrial-style interiors."
    },
    {
        id: '3',
        slug: 'minimalist-panel',
        name: "Minimalist Panel",
        price: 150,
        image: shop3,
        description: "Clean and minimalist paneling.",
        fullDescription: "Embrace simplicity with our Minimalist Panel. The clean lines and understated elegance make it perfect for modern minimalist spaces. Create a serene, sophisticated atmosphere with this timeless design."
    },
    {
        id: '4',
        slug: 'accent-yellow-chair',
        name: "Accent Yellow Chair",
        price: 200,
        image: yellowChair,
        description: "A bright accent piece for any room.",
        fullDescription: "Add a pop of color to your space with our Accent Yellow Chair. This vibrant piece serves as both comfortable seating and a stunning focal point. The bold yellow hue energizes any room while the ergonomic design ensures comfort."
    }
];

export default function ShopProductDetail() {
    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    if (!product) return <div className="p-8">Product not found</div>;

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        // Add the item multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
            dispatch(
                addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.image,
                })
            );
        }
        dispatch(openCart());
    };

    return (
        <div className="w-full min-h-screen bg-stone-50 pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Breadcrumb */}
                <motion.div
                    className="mb-8 text-sm text-gray-600"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-black">{product.name}</span>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-white">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                            {product.name}
                        </h1>

                        <div className="text-3xl font-bold text-emerald-600 mb-6">
                            ${product.price}
                        </div>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            {product.fullDescription}
                        </p>

                        {/* Quantity Controls */}
                        <div className="mb-8">
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                Quantity *
                            </label>
                            <div className="inline-flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={handleDecrement}
                                    className="px-4 py-3 hover:bg-gray-100 transition-colors font-semibold"
                                >
                                    −
                                </button>
                                <span className="px-8 py-3 border-x-2 border-gray-300 text-center font-semibold min-w-[80px]">
                                    {quantity}
                                </span>
                                <button
                                    onClick={handleIncrement}
                                    className="px-4 py-3 hover:bg-gray-100 transition-colors font-semibold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <motion.button
                            onClick={handleAddToCart}
                            className="w-full md:w-auto px-12 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors shadow-lg mb-6"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Add to Cart
                        </motion.button>

                        {/* Product Info */}
                        <div className="border-t border-gray-300 pt-6 mt-6">
                            <h2 className="font-bold text-lg mb-3">Product Information</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>High-quality materials and craftsmanship</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Easy installation with detailed instructions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Durable and long-lasting design</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Contact us for custom orders and bulk pricing</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="border-t border-gray-300 pt-6 mt-6">
                            <h2 className="font-bold text-lg mb-3">Questions?</h2>
                            <p className="text-gray-700">
                                Contact us at{' '}
                                <a
                                    href="mailto:contact@fabbrick.fr"
                                    className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                                >
                                    contact@fabbrick.fr
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Export products for use in Shop.jsx
export { products };
