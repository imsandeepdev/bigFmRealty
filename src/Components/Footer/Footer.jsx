import React from "react";
import { ContactInfo } from "../../utils/Const/Const";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const phoneNumber = ContactInfo.phone.replace(/\s+/g, "");
  
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">

        <div className="grid gap-10 md:grid-cols-3">

          {/* COMPANY INFO */}
          <div>
            <h3 className="text-2xl font-bold">
              BIG FM Realty
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Premium residential and commercial real estate developments
              focused on modern living, smart planning and long-term value.
            </p>
          </div>

          <div>
  <h4 className="mb-4 text-lg font-semibold">
    Follow Us
  </h4>

  <div className="flex gap-3">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition"
    >
      <FaInstagram />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition"
    >
      <FaYoutube />
    </a>
  </div>
</div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contact Us
            </h4>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>📞 {ContactInfo?.phone}</li>
              <li>📍 {ContactInfo?.address}</li>
            </ul>

              <button
                onClick={() => window.location.href = `tel:${phoneNumber}`}
                className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition"
              >
                Enquire Now
              </button>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-slate-800 pt-5 text-center text-sm text-slate-500">
          © 2026 BIG FM Realty. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;