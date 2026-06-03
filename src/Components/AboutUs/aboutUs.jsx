import React from "react";

const AboutSection = () => {
  return (
   <section className="py-12 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">

    {/* HEADER */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-slate-900">
        About BIG FM Realty
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Modern townships • Smart planning • Long-term value
      </p>
    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl shadow-md overflow-hidden">

      {/* LEFT TEXT */}
      <div className="p-6">

        <p className="text-sm leading-6 text-slate-600">
          BIG FM Realty is an emerging real estate development initiative focused on creating integrated townships and modern urban spaces in strategic locations across India. The brand delivers thoughtfully planned residential, commercial, and mixed-use developments with contemporary infrastructure and sustainable design principles.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          With strong focus on quality construction, smart planning, and long-term value creation, BIG FM Realty is positioning itself as a trusted name in the evolving real estate landscape.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="h-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
          alt="Luxury Real Estate"
          className="h-full w-full object-cover"
        />
      </div>

    </div>

  </div>
</section>
  );
};

export default AboutSection;