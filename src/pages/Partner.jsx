import React, { useState } from 'react';
import { FaRecycle, FaHandshake, FaGlobeAmericas, FaLeaf, FaIndustry, FaTshirt } from 'react-icons/fa';
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-stone-50 text-stone-800 font-sans">
      {/* 1) Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
        {/* Abstract background pattern could go here */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-emerald-900 tracking-tight">
            Become a Partner
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Join our mission in transforming textile waste into sustainable products.
            Together, let's weave a greener future.
          </p>
          <a 
            href="#partner-form" 
            className="inline-block px-8 py-3 bg-emerald-800 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            كن شريكًا (Become a Partner)
          </a>
        </motion.div>
      </section>

      {/* 2) About the Partnership (Cards) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors">
              <FaRecycle className="text-3xl text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-800">About the Project</h3>
            <p className="text-stone-600 leading-relaxed">
              We collect textile waste and specifically convert it into eco-friendly, durable products, reducing landfill impact.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors">
              <FaGlobeAmericas className="text-3xl text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-800">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed">
              A circular economy where every thread has a second life, driving scalable impact for a sustainable planet.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors">
              <FaHandshake className="text-3xl text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-800">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              Creating value from discarded fabrics and building strong, lasting collaborations with textile industry leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3) Our Sponsors */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-stone-800">شركاؤنا (Our Sponsors)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            {['Oriental Weavers', 'Misr Spinning & Weaving', 'Town Team', "Men's Club"].map((sponsor, idx) => (
              <motion.div 
                key={idx}
                className="prose grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {/* Placeholder Logos */}
                <div className="w-40 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center border border-stone-200">
                  <span className="font-bold text-stone-400">{sponsor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Why Partner With Us */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.div 
          className="bg-emerald-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Upcycle your waste responsibly instead of discarding it.",
                "Make a tangible positive environmental impact.",
                "Enhance your Corporate Social Responsibility (CSR) profile.",
                "Opportunities for co-branded, sustainable product lines."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaLeaf className="text-emerald-300 mt-1 flex-shrink-0" />
                  <p className="text-emerald-50">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
        </motion.div>
      </section>

      {/* 5) Partnership Application Form */}
      <section id="partner-form" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Partnership Application</h2>
            <p className="text-stone-500">Please fill out the form below to start the conversation.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-stone-700">Company Name (اسم الشركة)</label>
                <input 
                  type="text" 
                  name="companyName" 
                  required
                  className="px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  placeholder="e.g. Textile Co."
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-stone-700">Contact Number (رقم التواصل)</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  className="px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  placeholder="+20 123 456 7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email (Optional) */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-stone-700">Email Address (Optional)</label>
              <input 
                type="email" 
                name="email" 
                className="px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                placeholder="contact@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Company Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-stone-700">Type of Company</label>
              <select 
                name="type" 
                className="px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Manufacturing">Manufacturing (صناعة)</option>
                <option value="Retail">Retail (تجارة تجزئة)</option>
                <option value="Textile">Textile (غزل ونسيج)</option>
                <option value="Fashion">Fashion (أزياء)</option>
                <option value="Other">Other (أخرى)</option>
              </select>
            </div>

            {/* Benefit */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-stone-700">How can you benefit the project? (هتفيدنا بإيه)</label>
              <textarea 
                name="benefit" 
                required
                rows="4"
                className="px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white resize-none"
                placeholder="Briefly describe potential collaboration..."
                value={formData.benefit}
                onChange={handleChange}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              إرسال (Submit Application)
            </button>
          </form>
        </div>
      </section>

      {/* 6) Footer CTA */}
      <section className="py-16 bg-stone-900 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-light mb-8 italic">
          "We believe in building a sustainable future—together."
        </h2>
        <a 
          href="#partner-form" 
          className="inline-block px-10 py-3 border border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all uppercase tracking-wide"
        >
          Join Us
        </a>
      </section>
    </div>
  );
}
