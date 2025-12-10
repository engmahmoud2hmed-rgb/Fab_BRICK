import React, { useState } from 'react';
import { FaRecycle, FaHandshake, FaGlobeAmericas, FaLeaf, FaAward, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Partner() {
  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    type: 'Manufacturing',
    benefit: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sponsors = [
    { name: 'Oriental Weavers', color: 'from-blue-500 to-blue-600' },
    { name: 'Misr Spinning & Weaving', color: 'from-emerald-500 to-emerald-600' },
    { name: 'Town Team', color: 'from-purple-500 to-purple-600' },
    { name: "Men's Club", color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="w-full bg-stone-50 text-stone-800 font-sans">
      {/* 1) Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Become a Partner
          </motion.h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join our mission in transforming textile waste into sustainable products.
            Together, let's weave a greener future.
          </p>
          <motion.a
            href="#partner-form"
            className="inline-block px-10 py-4 bg-white text-emerald-900 font-bold text-lg rounded-full hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.a>
        </motion.div>
      </section>

      {/* 2) Our Sponsors - PROMINENT SECTION */}
      <section className="py-24 bg-gradient-to-br from-white to-stone-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <FaAward className="text-4xl text-emerald-600" />
              <h2 className="text-5xl font-bold text-stone-900">Our Sponsors</h2>
              <FaAward className="text-4xl text-emerald-600" />
            </div>
            <p className="text-xl text-stone-600 mt-4 max-w-2xl mx-auto">
              Proud to collaborate with industry leaders who share our vision for sustainability
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Sponsor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-stone-100 h-48">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6">
                    {/* Star Icon */}
                    <motion.div
                      className="mb-4"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <FaStar className="text-5xl text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                    </motion.div>

                    {/* Sponsor Name */}
                    <h3 className="font-bold text-lg text-center text-stone-800 group-hover:text-emerald-900 transition-colors">
                      {sponsor.name}
                    </h3>

                    {/* Decorative Line */}
                    <div className="w-16 h-1 bg-emerald-500 mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-transparent opacity-20 rounded-bl-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl font-semibold text-stone-700 mb-4">
              Want to join these industry leaders?
            </p>
            <a
              href="#partner-form"
              className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-200 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* 3) About the Partnership (Cards) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-stone-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Partner With Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-stone-100 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <FaRecycle className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-800">About the Project</h3>
            <p className="text-stone-600 leading-relaxed">
              We collect textile waste and convert it into eco-friendly, durable products, reducing landfill impact and creating value from discarded materials.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-stone-100 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <FaGlobeAmericas className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-800">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed">
              A circular economy where every thread has a second life, driving scalable impact for a sustainable planet and future generations.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-stone-100 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <FaHandshake className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-800">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              Creating value from discarded fabrics and building strong, lasting collaborations with textile industry leaders worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4) Benefits Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-10 text-center">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Upcycle your waste responsibly instead of discarding it",
                "Make a tangible positive environmental impact",
                "Enhance your Corporate Social Responsibility (CSR) profile",
                "Opportunities for co-branded, sustainable product lines",
                "Join a network of sustainability-focused industry leaders",
                "Receive recognition as an environmental pioneer"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 bg-emerald-800 bg-opacity-50 p-4 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaLeaf className="text-emerald-300 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-emerald-50 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-700 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-700 rounded-full opacity-30 blur-3xl"></div>
        </motion.div>
      </section>

      {/* 5) Partnership Application Form */}
      <section id="partner-form" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-3">Partnership Application</h2>
            <p className="text-lg text-stone-600">Fill out the form below to start the conversation</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-stone-50 p-10 rounded-3xl border-2 border-stone-200 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-stone-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all"
                  placeholder="e.g. Textile Co."
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-stone-700">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all"
                  placeholder="+20 123 456 7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-stone-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all"
                placeholder="contact@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Company Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-stone-700">Type of Company</label>
              <select
                name="type"
                className="px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Textile">Textile</option>
                <option value="Fashion">Fashion</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Benefit */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-stone-700">How can you benefit the project?</label>
              <textarea
                name="benefit"
                required
                rows="5"
                className="px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white resize-none transition-all"
                placeholder="Briefly describe potential collaboration opportunities..."
                value={formData.benefit}
                onChange={handleChange}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-xl text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* 6) Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-center text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-10 italic max-w-3xl mx-auto px-4">
            "We believe in building a sustainable future—together."
          </h2>
          <motion.a
            href="#partner-form"
            className="inline-block px-12 py-4 border-2 border-emerald-500 text-emerald-400 font-bold rounded-full hover:bg-emerald-500 hover:text-white transition-all uppercase tracking-wide text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us Today
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
      </section>
    </div>
  );
}
