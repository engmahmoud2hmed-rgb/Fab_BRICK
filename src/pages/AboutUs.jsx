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
      <section className="bg-white py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3 block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Circular Economy
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Waste Collection & Sourcing Model
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
          </div>

          {/* Intro & Problem Statement */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-stone-700 text-lg leading-relaxed"
            >
              <p>
                ECOFAB operates on a circular sourcing model that begins directly at the textile production stage. We collect post-industrial textile waste from large garment factories and small-to-medium workshops, transforming a disposal challenge into a sustainable raw material stream.
              </p>
              <p>
                In Egypt alone, thousands of tons of textile waste are generated annually. Most of this is sent to landfills or incineration facilities, coming at a significant financial and environmental cost.
              </p>
            </motion.div>

            {/* Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm text-center"
            >
              <h3 className="text-6xl font-bold text-emerald-500 mb-4">10–15%</h3>
              <p className="text-stone-600 font-medium text-lg">
                of fabric used in garment production becomes waste (cutting leftovers, rejected batches, surplus stock).
              </p>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <motion.h3
              className="text-2xl font-bold text-stone-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Partnering for Impact
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Eliminating Fees", desc: "Removing landfill and transportation costs for factories." },
                { title: "Cost Reduction", desc: "Reducing waste management expenses by up to 20–30%." },
                { title: "Sustainability", desc: "Improving ESG scores and environmental performance." }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg text-stone-900 mb-2">{benefit.title}</h4>
                  <p className="text-stone-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sourcing Network & Conclusion */}
          <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Our Sourcing Network</h3>
                <ul className="space-y-4">
                  {[
                    "Large-scale apparel and textile factories (>100s kg/week)",
                    "Small tailoring workshops (5–20 kg/day)",
                    "Textile warehouses and surplus inventory holders"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-stone-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-stone-300 leading-relaxed">
                  By aggregating waste from producers of all sizes, ECOFAB secures a stable supply chain, enabling the recycling of up to <span className="text-white font-bold">500 tons</span> of textile waste annually in future phases.
                </p>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <p className="text-emerald-100 italic">
                    "This zero-cost raw material strategy allows ECOFAB to maintain high production efficiency and a reduced environmental footprint — proving that sustainability and economic viability can grow together."
                  </p>
                </div>
              </div>
            </div>
          </div>

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
