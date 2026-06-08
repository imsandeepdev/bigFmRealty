import React, { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            About BIG FM Realty
          </h2>

          <div className="flex justify-center my-2">
            <div className="h-0.5 w-80 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
          </div>

          <p className="text-sm text-slate-600">
            Building Communities • Creating Value • Shaping the Future
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl shadow-md overflow-hidden">
          {/* Left */}
          <div className="p-6">
            <p className="text-sm leading-7 text-slate-600">
              <span className="font-semibold text-slate-800">
                BIG FM Realty
              </span>{" "}
              is a dynamic and forward-thinking real estate development
              company dedicated to transforming urban living through
              thoughtfully planned residential and commercial developments.
              Our mission is to create modern, sustainable, and value-driven
              communities that enhance lifestyles while delivering long-term
              investment opportunities.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              As an emerging name in the Indian real estate sector, we focus
              on quality, transparency, innovation, and customer satisfaction.
              Every project is carefully designed with superior
              infrastructure, strategic connectivity, and future-ready
              planning.
            </p>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                showMore ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-7 text-slate-600">
                Our flagship project,
                <span className="font-semibold text-emerald-700">
                  {" "}
                  BIG Unimaxx City
                </span>
                , is the largest plotted township in Bahraich, Uttar Pradesh.
                Strategically located on the Lucknow–Bahraich Highway, this
                72-acre development offers premium residential plots of
                1,800 sq. ft. and 3,200 sq. ft.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The township is envisioned as a modern integrated community
                featuring wide roads, green landscapes, essential amenities,
                and excellent connectivity to major destinations, making it
                an ideal place for families and investors alike.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                At BIG FM Realty, we believe that real estate is more than
                just land and buildings—it is about creating opportunities,
                building thriving communities, and shaping a better future.
                Through our commitment to excellence and sustainable
                development, we strive to become one of India's most trusted
                real estate brands.
              </p>

              <div className="mt-5 border-l-4 border-emerald-600 pl-4">
                <h4 className="font-semibold text-slate-900">
                  BIG FM Realty
                </h4>
                <p className="text-sm font-medium text-emerald-700">
                  Building Communities, Creating Value, Shaping the Future.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              {showMore ? "Read Less ↑" : "Read More →"}
            </button>
          </div>

          {/* Right Image */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
              alt="BIG FM Realty"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;