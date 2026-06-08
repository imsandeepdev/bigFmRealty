import React from "react";
import { X, Download } from "lucide-react";

const PDFModal = ({
  isOpen,
  onClose,
  pdfUrl,
  title = "Project Brochure",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="bg-gradient-to-r from-slate-900 to-emerald-700 text-white px-6 py-4 flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-slate-200">
              {title}
            </p>

            <p className="text-sm text-slate-400">
            Discover Bahraich's largest premium plotted township.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={pdfUrl}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition"
            >
              <Download size={18} />
              Download
            </a>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF */}

        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PDFModal;