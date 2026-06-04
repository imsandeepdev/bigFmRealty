import React from "react";
import BigFmLogo from "../../assets/icon.png";
import { ContactInfo } from "../../utils/Const/Const";
import { Phone } from "lucide-react";
import FaWhatsapp from "../../assets/whatsapp.png";

const Header = () => {
  const phoneNumber = ContactInfo.phone.replace(/\s+/g, "");

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=Hello%20BIG%20FM%20Realty,%20I%20am%20interested%20in%20your%20projects.`;

  return (
    <header className="w-full bg-slate-950 text-white border-b border-white/10">
      <div className="mx-auto px-6 md:px-10 lg:px-10 h-16 flex items-center justify-between">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-3">
          <img
            src={BigFmLogo}
            alt="BIG FM Realty"
            className="h-20 w-20 object-contain"
          />
          <div>
          <span className="text-base font-semibold tracking-wide"> {ContactInfo?.businessName}</span>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="flex items-center gap-3">

  {/* PHONE NUMBER */}
  <a
    href={`tel:${phoneNumber}`}
    className="
      hidden lg:flex
      items-center
      rounded-full
      bg-white/10
      px-4 py-2
      text-sm
      font-semibold
      text-white
      hover:bg-white/20
      transition
    "
  >
    <Phone size={16} className="mr-2" />
    {ContactInfo.phone}
  </a>

  {/* CALL BUTTON */}
   <a
    href={`tel:${phoneNumber}`}
    className="
      flex items-center gap-2
      rounded-full
      border border-white
      bg-emerald-600
      px-2 py-2
      hover:bg-emerald-700
      transition
      shadow-lg
      font-medium
      text-sm
      lg:hidden
    "
  >
    <Phone size={16} />
  </a> 

  {/* WHATSAPP BUTTON */}
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2
      rounded-full
      border border-white

      bg-green-500
      px-1 py-1
      hover:bg-slate-10
      transition
      shadow-lg
    "
  >
    <img
      src={FaWhatsapp}
      alt="WhatsApp"
      className="h-6 w-6 object-contain"
    />
  </a>

</div>

      </div>
    </header>
  );
};

export default Header;