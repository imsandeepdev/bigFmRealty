import React from "react";
import BigFmLogo from "../../assets/icon.png";
import { ContactInfo } from "../../utils/Const/Const";

const Header = () => {
  return (
    <header className="w-full bg-slate-950 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={BigFmLogo}
            alt="BIGFM Realty"
            className="h-20 w-20 object-contain rounded"
          />

          <span className="text-base font-semibold tracking-wide">
            BIGFM Realty
          </span>
        </div>

        {/* RIGHT: CONTACT SECTION */}
        <div className="flex items-center gap-3">

          {/* MOBILE NUMBER */}
          <a
            href={`tel:${ContactInfo.phone}`}
            className="hidden sm:flex text-xs text-slate-300 hover:text-white transition"
          >
            {ContactInfo.phone}
          </a>

          {/* CONTACT BUTTON */}
          <a
            href={`tel:${ContactInfo.phone}`}
            className="bg-emerald-600 hover:bg-emerald-700 transition px-3 py-1 rounded text-xs font-medium"
          >
            Contact Us
          </a>

        </div>

      </div>
    </header>
  );
};

export default Header;