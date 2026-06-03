import React from "react";
import { MapPin } from "lucide-react";

const FeaturedProjects = ({ projects, setOpenModal }) => {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Projects
          </h2>
          <div className="flex justify-center mb-2">
            <div className="h-0.5 w-80 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
        </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">

  {projects.map((item) => (
    <div
      key={item.title}
      className="
        group relative flex flex-col
        rounded-3xl overflow-hidden
        bg-white/10 border border-black/10
        backdrop-blur-xl
        transition-all duration-500
        hover:scale-[1.04]
        hover:rotate-[1deg]
        hover:shadow-[0_20px_80px_rgba(0,255,150,0.2)]
        h-full
      "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">

        {/* TITLE */}
        <h3 className="text-base font-bold text-slate-900">
          {item.title}
        </h3>

        {/* LOCATION (MAX 2 LINES) */}
        <div className="mt-1 flex items-start gap-2 text-slate-500 text-xs line-clamp-2">
          <MapPin size={14} className="mt-0.5" />
          <span className="line-clamp-2">
            {item.location}
          </span>
        </div>

        {/* FEATURES (SMALL) */}
        {item.features && (
          <ul className="mt-2 space-y-1 text-xs text-slate-600">
            {item.features.slice(0, 2).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-500"></span>
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* PUSH BUTTON TO BOTTOM */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => setOpenModal(true)}
            className="text-xs font-semibold text-emerald-600 hover:underline"
          >
            More Details →
          </button>
        </div>

      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default FeaturedProjects;