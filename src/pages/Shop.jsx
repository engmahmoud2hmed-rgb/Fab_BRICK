import uniImage from '../../IMG2/UNI.jpg';
import shop2 from '../assets/image/shop2.jpg';
import shop3 from '../assets/image/shop3.jpg';
import yellowChair from '../assets/image/yellow-chair.jpg';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: '1',
    slug: 'classic-wall-covering',
    name: "Unique Pieces",
    price: 120,
    image: uniImage,
    description: "One-of-a-kind artistic wall pieces for distinctive spaces."
  },
  {
    id: '2',
    slug: 'modern-texture-brick',
    name: "Modern Texture Brick",
    price: 95,
    image: shop2,
    description: "Textured brick design for a bold look."
  },
  {
    id: '3',
    slug: 'minimalist-panel',
    name: "Minimalist Panel",
    price: 150,
    image: shop3,
    description: "Clean and minimalist paneling."
  },
  {
    id: '4',
    slug: 'accent-yellow-chair',
    name: "Accent Yellow Chair",
    price: 200,
    image: yellowChair,
    description: "A bright accent piece for any room."
  }
];

export default function Shop() {
  const dispatch = useDispatch();

  const handleAddToCart = (product, e) => {
    e.preventDefault(); // Prevent navigation when clicking Add to Cart
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full flex flex-col items-center pt-20 pb-16">
      {/* top text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <p className="text-[22px] font-semibold mb-2">
          <span className="font-extrabold">Wall covering:</span>{' '}
          <span className="font-normal">sales are made by order only.</span>
        </p>
        <p className="text-[16px] text-gray-600">
          Please contact us at{' '}
          <a
            href="mailto:contact@fabbrick.fr"
            className="underline text-gray-800"
          >
            contact@fabbrick.fr
          </a>
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="mt-16 mb-10 text-center px-4 w-full">
        <div className="w-full flex justify-center px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-[1120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <Link to={`/shop/${product.slug}`} className="block flex-grow flex flex-col">
                  <div className="w-full h-[260px] md:h-[280px] overflow-hidden bg-gray-100">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
                    <span className="text-xl font-semibold mt-2">${product.price}</span>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    onClick={(e) => handleAddToCart(product, e)}
                    className="relative w-full px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-bold rounded-lg overflow-hidden group transition-all duration-300"
                  >
                    {/* Animated background gradient on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    {/* Button text */}
                    <span className="relative flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="group-hover:tracking-wider transition-all duration-300">
                        Add to Cart
                      </span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
