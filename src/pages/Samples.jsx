// src/pages/Samples.jsx
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../store/cartSlice";
import { motion } from "framer-motion";

import s1 from "../assets/image/s1.jpg";
import s2 from "../assets/image/s2.jpg";
import s3 from "../assets/image/s3.jpg";
import s4 from "../assets/image/s4.jpg";
import s5 from "../assets/image/s5.jpg";
import s6 from "../assets/image/light.jpg";
import s7 from "../assets/image/pink-wall.jpg";

import box1a from "../assets/image/box1_front.jpg";
import box1b from "../assets/image/box1_back.jpg";
import box2a from "../assets/image/box2_front.jpg";
import box2b from "../assets/image/box2_back.jpg";

import opt2_1 from "../assets/image/15.jpg";
import opt2_2 from "../assets/image/13.jpg";
import opt2_3 from "../assets/image/16.jpg";
import opt2_4 from "../assets/image/7.jpg";
import opt2_5 from "../assets/image/24.jpg";
import opt2_6 from "../assets/image/11.jpg";
import opt2_7 from "../assets/image/8.jpg";
import opt2_8 from "../assets/image/5.jpg";
import opt2_9 from "../assets/image/10.jpg";
import opt2_10 from "../assets/image/2.jpg";
import opt2_11 from "../assets/image/3.jpg";
import opt2_12 from "../assets/image/12.jpg";
import opt2_13 from "../assets/image/14.jpg";
import opt2_14 from "../assets/image/3.jpg";
import opt2_15 from "../assets/image/9.jpg";
import opt2_16 from "../assets/image/25.jpg";
import opt2_17 from "../assets/image/6.jpg";

// OPTION 2 products (image + name + price + slug)
export const option2Products = [
  { img: opt2_1, name: "WHITE_PLAIN", price: "€9.00", slug: "white-plain" },
  { img: opt2_2, name: "POLYCHROMA_PLAIN", price: "€9.00", slug: "polychroma-plain" },
  { img: opt2_3, name: "POLYCHROMA_TERRAZZO", price: "€9.00", slug: "polychroma-terrazzo" },
  { img: opt2_4, name: "FLAMINGO_PLAIN", price: "€9.00", slug: "flamingo-plain" },
  { img: opt2_5, name: "FLAMINGO_TERRAZZO", price: "€9.00", slug: "flamingo-terrazzo" },
  { img: opt2_6, name: "TERRACOTTA_PLAIN", price: "€9.00", slug: "terracotta-plain" },
  { img: opt2_7, name: "TERRACOTTA_TERRAZZO", price: "€9.00", slug: "terracotta-terrazzo" },
  { img: opt2_8, name: "JUNGLE_TERRAZZO", price: "€9.00", slug: "jungle-terrazzo" },
  { img: opt2_9, name: "JUNGLE_PLAIN", price: "€9.00", slug: "jungle-plain" },
  { img: opt2_10, name: "AZUR_PLAIN", price: "€9.00", slug: "azur-plain" },
  { img: opt2_11, name: "AZUR_TERRAZZO", price: "€9.00", slug: "azur-terrazzo" },
  { img: opt2_12, name: "BLUEJEAN_PLAIN", price: "€9.00", slug: "bluejean-plain" },
  { img: opt2_13, name: "STONE_PLAIN", price: "€9.00", slug: "stone-plain" },
  { img: opt2_14, name: "BLUEJEAN_TERRAZZO", price: "€9.00", slug: "bluejean-terrazzo" },
  { img: opt2_15, name: "STONE_TERRAZZO", price: "€9.00", slug: "stone-terrazzo" },
  { img: opt2_16, name: "BLACK_PLAIN", price: "€9.00", slug: "black-plain" },
  { img: opt2_17, name: "BLACK_TERRAZZO", price: "€9.00", slug: "black-terrazzo" },
];

// OPTION 1 boxes
const option1Products = [
  {
    slug: "box-terrazzo",
    img: box1a,
    hoverImg: box1b,
    name: "FULL sample BOX_ TERRAZZO",
    price: "€39.00",
  },
  {
    slug: "box-plain",
    img: box2a,
    hoverImg: box2b,
    name: "FULL samples BOX_ PLAIN",
    price: "€39.00",
  },
];

const images = [s1, s2, s3, s4, s5, s6, s7];

export default function Samples() {
  const loopImages = [...images, ...images];
  const dispatch = useDispatch();

  return (
    <div className="w-full overflow-x-hidden bg-stone-50">
      {/* Hero Section */}
      <motion.section
        className="py-16 md:py-24 px-4 text-center bg-gradient-to-br from-white to-stone-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Receive our samples directly at home
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-stone-600 mb-6 italic"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          to help you bring your ideas to life
        </motion.p>
        <motion.p
          className="text-stone-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          ECOFAB provides direct sales of its artistic cladding material.
          Contact us by email:{" "}
          <a href="mailto:contact@fabbrick.fr" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
            contact@fabbrick.fr
          </a>
        </motion.p>
      </motion.section>

      {/* Animated Slider */}
      <section className="py-12 overflow-hidden bg-white">
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1400] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {loopImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img} alt={`sample-${idx}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OPTION 1 */}
      <motion.section
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <p className="text-lg md:text-xl text-stone-700 mb-4">
            • <span className="font-bold text-emerald-700">OPTION 1</span> – Order our complete boxes with the pattern of your choice
          </p>
          <div className="h-[2px] bg-gradient-to-r from-emerald-600 to-transparent w-full max-w-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {option1Products.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <Link to={`/samples/${item.slug}`} className="block group">
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-lg mb-4 aspect-square"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={item.hoverImg}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold text-lg">View Details →</span>
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-emerald-600">{item.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* OPTION 2 */}
      <motion.section
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-stone-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <p className="text-lg md:text-xl text-stone-700 mb-4">
            • <span className="font-bold text-emerald-700">OPTION 2</span> – Create your own box according to your wishes
          </p>
          <div className="h-[2px] bg-gradient-to-r from-emerald-600 to-transparent w-full max-w-md"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {option2Products.map((item, idx) => (
            <motion.div
              key={item.slug}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <Link to={`/samples/option2/${item.slug}`}>
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-md mb-3 aspect-square bg-stone-200"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </Link>
              <h4 className="text-xs md:text-sm font-semibold text-stone-800 mb-1">{item.name}</h4>
              <p className="text-sm md:text-base font-bold text-emerald-600 mb-3">{item.price}</p>

              <motion.button
                onClick={() => {
                  dispatch(
                    addItem({
                      id: item.slug,
                      name: item.name,
                      price: item.price,
                      img: item.img,
                    })
                  );
                  dispatch(openCart());
                }}
                className="w-full py-2 px-3 bg-emerald-600 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
