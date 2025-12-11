import heroVideo from '../../IMG2/get.mp4';
import wallImage from '../../IMG2/WALL.jpg';
import interiorImage from '../../IMG2/INT.jpg';
import uniqueImage from '../../IMG2/UNI.jpg';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLeaf, FaPaintBrush, FaGem, FaThLarge } from 'react-icons/fa';

export default function Home() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    {
      id: 'wall-covering',
      title: 'Wall Covering',
      content: 'Explore our premium wall coverings made from recycled textiles. Sustainable, beautiful, and built to last.',
      image: wallImage,
      icon: FaThLarge,
      color: 'emerald',
      buttonText: 'Explore Collection'
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      content: 'Custom interior design solutions tailored to your space. Transform your environment with eco-friendly elegance.',
      image: interiorImage,
      icon: FaPaintBrush,
      color: 'red',
      buttonText: 'Get Started '
    },
    {
      id: 'unique-pieces',
      title: 'Unique Pieces',
      content: 'Discover one-of-a-kind art pieces and furniture. Each creation tells a story of sustainability and craftsmanship.',
      image: uniqueImage,
      icon: FaGem,
      color: 'purple',
      buttonText: 'Explore Collection'
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-stone-50">
      {/* Hero Section with Full Video Cover */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Video Background - Full Cover */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 md:px-12 text-center">
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-20 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-extrabold leading-none mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
              ECOFAB
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-10 max-w-3xl"
          >
            <div className="italic text-2xl md:text-3xl text-emerald-200 mb-4 font-semibold">
              From Textile to Design.
            </div>
            <div className="text-white text-lg md:text-xl leading-relaxed">
              "A unique material, combining innovation and craftsmanship, to enhance your spaces with sustainable elegance."
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-4xl justify-center">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white py-4 px-8 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden hover:bg-white/20"
                >
                  {/* Content */}
                  <div className="relative flex items-center justify-center gap-3">
                    <Icon className="text-2xl text-emerald-300 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">
                      {section.title.toUpperCase()}
                    </span>
                    <FaArrowDown className="text-emerald-300 group-hover:text-white transform group-hover:translate-y-1 transition-all" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 flex flex-col items-center gap-2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="text-2xl text-emerald-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      {sections.map((section, idx) => {
        const Icon = section.icon;
        const isEven = idx % 2 === 0;

        return (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={`min-h-screen flex items-center justify-center py-20 px-6 md:px-12 ${isEven ? 'bg-white' : 'bg-stone-50'
              }`}
          >
            <div className="max-w-7xl w-full">
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}>
                {/* Image */}
                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative group">
                    <motion.div
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                      {/* Overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${section.color}-600/0 to-${section.color}-900/0 group-hover:from-${section.color}-600/20 group-hover:to-${section.color}-900/40 transition-all duration-500`} />
                    </motion.div>

                    {/* Decorative element */}
                    <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-${section.color}-200 rounded-full opacity-30 blur-2xl -z-10`} />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${section.color}-400 to-${section.color}-600 rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-3xl text-white" />
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                    {section.title}
                  </h2>

                  <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
                    {section.content}
                  </p>

                  {/* CTA Button - Special handling for Interior Design red button */}
                  {section.id === 'interior-design' ? (
                    <motion.button
                      className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/#/contact'}
                    >
                      {section.buttonText}
                    </motion.button>
                  ) : (
                    <motion.button
                      className={`px-8 py-4 bg-gradient-to-r from-${section.color}-600 to-${section.color}-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/#/shop'}
                    >
                      {section.buttonText}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white text-center relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover sustainable design solutions that make a difference
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="px-10 py-4 bg-white text-emerald-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/#/samples'}
            >
              View Samples
            </motion.button>
            <motion.button
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-emerald-900 transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/#/contact'}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}