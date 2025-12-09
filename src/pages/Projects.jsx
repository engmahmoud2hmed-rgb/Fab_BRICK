// src/pages/Projects.jsx
import { motion } from 'framer-motion';

// Import all images
import light from '../assets/image/light.jpg';
import table from '../assets/image/table.jpg';
import paint from '../assets/image/paint.jpg';
import mirror from '../assets/image/mirror.jpg';
import room from '../assets/image/room.jpg';
import blue from '../assets/image/blue.jpg';
import grey from '../assets/image/grey.png';
import table2 from '../assets/image/table2.jpg';
import piano from '../assets/image/piano.jpg';
import greenBoard from '../assets/image/green-board.jpg';
import ligthWall from '../assets/image/ligth-wall.jpg';
import yellowChair from '../assets/image/yellow-chair.jpg';
import pinkWood from '../assets/image/pink-wood.jpg';
import purpleTable from '../assets/image/purple-table.jpg';
import greenRoof from '../assets/image/green-roof.jpg';
import hall from '../assets/image/hall.jpg';
import hall2 from '../assets/image/hall2.jpg';
import yellowStand from '../assets/image/yellow-stand.jpg';
import greenSample from '../assets/image/green-sample.jpg';
import orangeStand from '../assets/image/orange-stand.jpg';
import pinkWall from '../assets/image/pink-wall.jpg';

const projects = [
  { img: light, title: "Luminescent Texture", category: "Lighting" },
  { img: table, title: "Recycled Table", category: "Furniture" },
  { img: paint, title: "Artistic Wall", category: "Decor" },
  { img: mirror, title: "Reflective Frames", category: "Accessories" },
  { img: room, title: "Modern Interior", category: "Interior" },
  { img: blue, title: "Blue Gradient", category: "Materials" },
  { img: grey, title: "Minimalist Grey", category: "Materials" },
  { img: table2, title: "Sustainable Desk", category: "Furniture" },
  { img: piano, title: "Acoustic Panels", category: "Sound" },
  { img: greenBoard, title: "Eco Board", category: "Office" },
  { img: ligthWall, title: "Feature Wall", category: "Interior" },
  { img: yellowChair, title: "Accent Chair", category: "Furniture" },
  { img: pinkWood, title: "Colored Timber", category: "Materials" },
  { img: purpleTable, title: "Vibrant Surface", category: "Furniture" },
  { img: greenRoof, title: "Garden Roof", category: "Exterior" },
  { img: hall, title: "Exhibition Hall", category: "Commercial" },
  { img: hall2, title: "Spacious Lobby", category: "Commercial" },
  { img: yellowStand, title: "Display Stand", category: "Retail" },
  { img: greenSample, title: "Fabric Sample", category: "Materials" },
  { img: orangeStand, title: "Retail Display", category: "Commercial" },
  { img: pinkWall, title: "Pink Hue Wall", category: "Interior" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 bg-white border-b border-stone-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 font-display">
            Designed for Impact
          </h1>
          <p className="max-w-2xl mx-auto text-stone-500 text-lg md:text-xl leading-relaxed">
            Explore our curated collection of sustainable transformations. Every project tells a story of waste turned into wonder.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mt-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i % 3 * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0, y: 20 }} // Reset allows hover to trigger it? No, framer motion structure:
                  // We want the text to animate IN when we hover.
                  // simpler Approach is CSS or basic variants.
                  // Let's use simple CSS/Tailwind for the text fade in to avoid complex variant propagation issues in simple maps
                  >
                    <h3 className="text-white text-2xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-emerald-200 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.category}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
