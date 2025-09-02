


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [

    {
      image: "image-1.jpg",
      title: "Vosa Tech Signs MOU with EDII-TN to Launch Private School Hackathon Across Six Districts",
      description: "We are excited to announce that Vosa Tech, Tirunelveli, has officially signed an MOU with EDII-TN to collaboratively organize a Private School Hackathon across six districts-Madurai, Thoothukudi, Tirunelveli, Virudhunagar, Kanyakumari, and Tenkasi! This initiative aims to empower school students with hands-on experience in innovation, problem-solving, and technology, fostering the next generation of tech leaders. A special thanks to Dr. Ambalavanan IAAS for signing this MOU and supporting this transformative journey. We are proud to be part of this mission to inspire young minds and drive digital innovation! Stay tuned for more updates. Let's build the future together!",
      details: "Vosa Tech Signs MOU."
    },

  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-16 sm:px-6 lg:px-8 max-w-8xl mx-auto"
    >
      <section className="relative bg-white p-0 rounded-3xl shadow-2xl overflow-hidden">
        {/* Video */}
        <video
          className="w-full h-[600px] object-cover rounded-3xl" // height increased
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hackathon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mirror Glass Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-end justify-center rounded-3xl">
          <h1 className="mb-6 text-white text-2xl sm:text-4xl font-extrabold tracking-wide drop-shadow-lg backdrop-blur-md px-6 py-3 rounded-xl">
            🎉 SINDHANAI SIRPI HACKATHON INAUGURATION CEREMONY 🎊

          </h1>
        </div>
      </section>


      {/* Featured Gallery Section */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-800 mb-4 drop-shadow">
          Featured Gallery
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-10">
          A sneak peek into the best moments of our Hackathon. Check out the creativity and teamwork in action!
        </p>

        <div className="space-y-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-8 items-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-500`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleImageClick(item)}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-full">
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-brown-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
