// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import insta1 from '../assets/image/green-sample.jpg';
import insta2 from '../assets/image/yellow-chair.jpg';
import insta3 from '../assets/image/s5.jpg';
import insta4 from '../assets/image/insta4.jpg';
import insta5 from '../assets/image/hall2.jpg';
import insta6 from '../assets/image/green-board.jpg';
import insta7 from '../assets/image/paint.jpg';
import insta8 from '../assets/image/table.jpg';
import insta9 from '../assets/image/pink-wall.jpg';

const instaImages = [
  insta1, insta2, insta3,
  insta4, insta5, insta6,
  insta7, insta8, insta9,
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      {/* Left Half – CONTACT FORM */}
      <motion.section
        className="flex-1 bg-gradient-to-br from-stone-900 to-black text-white px-8 md:px-20 lg:px-28 py-16 md:py-20 flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.18em] mb-3">
            CONTACT
          </h1>
          <div className="w-16 h-1 bg-emerald-500 mx-auto md:mx-0 mb-12" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl text-[15px] mx-auto md:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* First / Last */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
            <motion.div
              className="flex-1 mb-6 md:mb-0"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block mb-2 italic text-emerald-300">Firstname *</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-emerald-500 text-white outline-none pb-2 transition-colors duration-300"
                required
              />
            </motion.div>
            <motion.div
              className="flex-1"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block mb-2 italic text-emerald-300">Lastname *</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-emerald-500 text-white outline-none pb-2 transition-colors duration-300"
                required
              />
            </motion.div>
          </div>

          {/* Email */}
          <motion.div
            className="mb-8"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block mb-2 italic text-emerald-300">E-mail *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/30 focus:border-emerald-500 text-white outline-none pb-2 transition-colors duration-300"
              required
            />
          </motion.div>

          {/* Subject */}
          <motion.div
            className="mb-8"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block mb-2 italic text-emerald-300">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/30 focus:border-emerald-500 text-white outline-none pb-2 transition-colors duration-300"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div
            className="mb-10"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block mb-2 italic text-emerald-300">Your message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b-2 border-white/30 focus:border-emerald-500 text-white outline-none pb-2 resize-none transition-colors duration-300"
              required
            />
          </motion.div>

          {/* Send Button */}
          <div className="flex flex-col items-center mt-6 gap-4">
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </motion.button>
            {status === "success" && (
              <motion.p
                className="text-emerald-400 text-sm font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </div>
        </motion.form>
      </motion.section>

      {/* Right Half – INSTAGRAM GALLERY */}
      <motion.section
        className="flex-1 bg-gradient-to-br from-stone-50 to-white px-8 md:px-16 lg:px-24 py-16 md:py-20 flex flex-col"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.18em] mb-3 text-stone-900">
            INSTAGRAM
          </h1>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-10" />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {instaImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="w-full aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (idx * 0.05), duration: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Instagram post ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white font-semibold text-sm">View on Instagram</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Follow Us on Instagram
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}
