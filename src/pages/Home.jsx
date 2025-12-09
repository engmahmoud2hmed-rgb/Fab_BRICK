import img5 from '../assets/image/REVETEMENT SMALL.jpg';
import wallImage from '../../IMG2/WALL.jpg';
import interiorImage from '../../IMG2/INT.jpg';
import uniqueImage from '../../IMG2/UNI.jpg';
import { motion } from 'framer-motion';


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
      content: 'Explore our premium wall coverings made from recycled textiles.',
      image: wallImage
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      content: 'Custom interior design solutions tailored to your space.',
      image: interiorImage
    },
    {
      id: 'unique-pieces',
      title: 'Unique Pieces',
      content: 'Discover one-of-a-kind art pieces and furniture.',
      image: uniqueImage
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:pl-[90px] py-12 md:py-0">
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold leading-none mb-4 md:mb-2 tracking-tight"
          >
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent drop-shadow-lg">
              ECOFAB
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-5"
          >
            <div className="italic text-base md:text-lg text-[#978b7a] mb-1">From Textile to Design.</div>
            <div className="text-[#978b7a] text-sm md:text-[16px] max-w-full md:max-w-[450px]">
              "A unique material, combining innovation and craftsmanship, to enhance your spaces."
            </div>
          </motion.div>

          <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-8 w-full md:w-[340px]">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.id)}
                className="rounded-full border border-[#ded8cf] bg-white text-[#b0aba1] py-2.5 md:py-3 text-base md:text-lg font-bold shadow-sm hover:bg-[#eceae6] transition duration-300"
              >
                {section.title.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[50vh] md:h-auto"
        >
          <img src={img5} alt="wall" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Content Sections */}
      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center bg-[#f7f5f2] border-t border-[#ded8cf] p-6 md:p-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#beb1a3] mb-4 md:mb-6 text-center">{section.title}</h2>
          <p className="text-base sm:text-lg md:text-[20px] text-[#978b7a] max-w-full md:max-w-[700px] text-center px-4">
            {section.content}
          </p>
          <motion.div
            className="mt-6 md:mt-10 w-full max-w-full md:max-w-[800px] h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg mx-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.section>
      ))}

    </div>
  );
}