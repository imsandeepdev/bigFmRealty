import {
  ArrowRight,
  Building2,
  CheckCircle,
  Home,
  MapPin,
  Phone,
  Mail,
  Star,
  TrendingUp,
} from "lucide-react";
import { projects } from "../../utils/Const/Const";
import ContactSection from "../../Components/ContanctSection/ContactSection";
import { useState } from "react";
import ContactModal from "../../Components/ContactModal/ContactModal";
import { motion } from "framer-motion";
import AboutSection from "../../Components/AboutUs/aboutUs";
import Banner from "../../assets/banner.png";
import FeaturedProjects from "../../Components/FeaturedProject/FeaturedProject";
import WhyChooseSection from "../../Components/WhyChoose/WhyChooseSection";
import Footer from "../../Components/Footer/Footer";


export default function HomePage() {

  const [openModal, setOpenModal] = useState(false);

 return (
  <div className="w-full min-h-screen bg-white text-slate-900 overflow-x-hidden">

    {/* HERO */}
 <section className="relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">

  {/* Background Image */}
  <motion.img
    src={Banner}
    className="absolute inset-0 h-full w-full object-cover scale-110"
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5 }}
  />

  <div className="absolute inset-0 bg-black/25" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center">
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">

      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-white"
        >

          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs tracking-wide backdrop-blur-md">
           Strategic Locations. Lasting Value.
          </span>

          {/* HEADLINE (clean + focused) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl font-bold text-white !text-white"
          >
            Discover Your
            <span className="block text-emerald-400">
              Dream Property
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 max-w-xl text-base text-slate-200"
          >
            Trusted development, smart planning and modern living for future-ready investment spaces.
          </motion.p>

          {/* SMALL CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-3"
          >

            <button
              onClick={() => setOpenModal(true)}
              className="px-5 py-2 text-sm rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
            >
              Explore
            </button>

            <button
              onClick={() => setOpenModal(true)}
              className="px-5 py-2 text-sm rounded-lg border border-white/60 hover:bg-white hover:text-black transition font-medium"
            >
              Contact
            </button>

          </motion.div>

        </motion.div>

        {/* RIGHT FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{
            scale: 1.06,
            rotateY: -8,
            rotateX: 6,
          }}
          className="w-full max-w-xs bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl p-5 shadow-2xl cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          onClick={() => (window.location.href = "/projects/big-unimaxx-city")}
        >

          <p className="text-emerald-300 text-xs font-semibold">
            Featured Project
          </p>

          <h3 className="mt-2 text-xl font-bold">
            BIG UNIMAXX City
          </h3>

          <p className="mt-3 text-xs text-slate-200 leading-5">
            A premium township with modern infrastructure, green zones and high-value investment potential.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[11px] text-slate-300">
              Bahraich • UP
            </span>

            <button className="text-emerald-400 text-xs font-semibold hover:underline">
              View →
            </button>
          </div>

        </motion.div>

      </div>

    </div>
  </div>

</section>

    {/* ABOUT */}
    <AboutSection/>
    

    {/* PROJECTS */}
    <FeaturedProjects
    projects={projects}
    setOpenModal={() => setOpenModal(true) }
    />
    <WhyChooseSection/>
    {/* CONTACT */}
    <ContactSection />

    {/* FOOTER */}
    <Footer />

    {openModal && (
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    )}

  </div>
);
}