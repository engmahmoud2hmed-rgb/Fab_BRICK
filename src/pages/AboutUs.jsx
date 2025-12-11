// src/pages/AboutUs.jsx
import { motion } from 'framer-motion';
import aboutImg from '../assets/image/AboutUS.jpg';
import mahmoudImg from '../../IMG2/MAHMOUD.jpg';
import nadaImg from '../../IMG2/NADA .jpg';
import hossamImg from '../../IMG2/HOSSAM.jpg';
import hannenImg from '../../IMG2/HANNEN.jpg';
import nourImg from '../../IMG2/NOUR.jpg';
import ahmedImg from '../../IMG2/AHMED .jpg';

const team = [
  { img: mahmoudImg, name: "Mahmoud", title: "CEO" },
  { img: nadaImg, name: "Nada", title: "COO" },
  { img: hossamImg, name: "Hossam", title: "CFO" },
  { img: hannenImg, name: "Haneen", title: "CMO" },
  { img: nourImg, name: "Nour", title: "CTO" },
  { img: ahmedImg, name: "Ahmed", title: "BDM" },
];

const milestones = [
  { label: "First prototype", value: "09/2025" },
  { label: "Company creation", value: "02/2025" },
  { label: "Founder", value: "ECOFAB TEAM" },
  { label: "Patents", value: "Depi & EYOUTH" },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20 font-sans">

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 bg-white border-b border-stone-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 font-display">
            A New Life for Textiles
          </h1>
          <p className="max-w-2xl mx-auto text-stone-500 text-lg md:text-xl leading-relaxed">
            Reinventing construction materials through the art of upcycling.
          </p>
        </motion.div>
      </section>

      {/* Milestones Ribbon */}
      <div className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">{item.label}</p>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400">{item.value}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content & Big Image */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Innovative craftsmanship</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  ECOFAB is a unique material designed to elevate spaces. Each brick is handcrafted with meticulous attention to detail, resulting in a rare and timeless product.
                </p>
                <p>
                  Born from carefully repurposed fabrics, it is reimagined into a noble material that is both soft to the touch and visually striking. This material stands out for its rich texture, vibrant colors, and its ability to tell a unique story.
                </p>
                <p className="italic text-stone-800 font-medium">
                  "Every project that incorporates it becomes a work of art, shaped by craftsmanship that values authenticity and the elegance of the hand’s gesture."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Large Image with Hover Effect */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={aboutImg}
              alt="ECOFAB Aesthetics"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story Paragraphs */}
      <section className="bg-emerald-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-8">From Idea to Reality</h2>
            <p className="text-stone-700 text-lg leading-loose">
              The story of ECOFAB is that of Clarisse Merlet, founder and architect driven by a passion for innovation. By reinventing textile upcycling, she gave birth to ECOFAB—a unique material that transforms fabrics into artistic and elegant bricks. With her background in architecture, Clarisse has skillfully combined creativity, craftsmanship, and a deep respect for materials.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-stone-700 text-lg leading-loose">
              From this inspiring idea, ECOFAB has grown into a creative studio based in Paris’s 19th arrondissement. With a large production workshop and a close-knit team, the studio continues to push the boundaries of innovation in art and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-stone-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet the Team
          </motion.h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md aspect-[3/4]">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay on hover - shows name and title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-emerald-300 text-lg font-semibold uppercase tracking-wider">{member.title}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800">{member.name}</h3>
              <p className="text-emerald-600 text-sm font-medium uppercase tracking-wide">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
