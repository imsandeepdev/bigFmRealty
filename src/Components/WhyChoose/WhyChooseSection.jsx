import React from "react";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const cards = [
    {
      title: "Vision",
      desc: "Creating next-generation integrated townships with modern infrastructure and sustainable living spaces across India.",
    },
    {
      title: "Development",
      desc: "Focused on premium residential, commercial, and mixed-use developments with strong planning and execution.",
    },
    {
      title: "Value",
      desc: "Delivering long-term investment growth, trust, and high-value opportunities for homeowners and investors.",
    },
  ];

  const images = [
    "https://www.bigfmrealty.in/fmrealty-unimaxx-city/assets/images/gallery/g2.webp",
    "https://www.bigfmrealty.in/fmrealty-unimaxx-city/assets/images/banner.webp",
    "https://www.bigfmrealty.in/fmrealty-unimaxx-city/assets/images/gallery/g3.webp",
    "https://www.bigfmrealty.in/fmrealty-unimaxx-city/assets/images/plans/location-map.webp",
    "https://www.bigfmrealty.in/fmrealty-unimaxx-city/assets/images/gallery/g1.webp",
  ];

  return (
    <section className="py-14 bg-white">
        

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* HEADER */}
        <div className="mb-10 flex flex-col items-center text-center">

        <h2 className="text-4xl font-bold text-slate-900">
            Why Choose BigFm Realty
        </h2>
         <div className="flex justify-center mb-2">
            <div className="h-0.5 w-80 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
        </div>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
            A trusted real estate partner delivering premium developments with long-term value and confidence.
        </p>

        </div>

        {/* AUTO SCROLL IMAGES */}
        <div className="overflow-hidden relative mb-12">
          <div className="flex w-max gap-5 animate-scroll">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="min-w-[260px] h-52 rounded-2xl overflow-hidden shadow-md flex-shrink-0"
              >
                <img
                  src={img}
                  alt="real estate"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3D CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 8 : -8 }}
              transition={{ duration: 0.5 }}
              className="
                bg-white/80 backdrop-blur-xl
                border border-slate-100
                rounded-2xl p-5
                shadow-md hover:shadow-xl
                transform-gpu
                transition-all duration-500
              "
            >
              <div className="h-2 w-10 bg-emerald-500 rounded-full mb-4"></div>

              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

      {/* SCROLL ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
};

export default WhyChooseSection;