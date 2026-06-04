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
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection, AboutSection, FeaturedProjects,WhyChooseSection,ContactSection,Footer,ContactModal } from "../../Components";

export default function HomePage() {
  const [openModal, setOpenModal] = useState(false);

 return (
  <div className="w-full min-h-screen bg-white text-slate-900 overflow-x-hidden">
    {/* HERO */}
    <HeroSection/>

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