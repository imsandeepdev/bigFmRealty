import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { config as Config } from "../../Config/Config";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ContactInfo } from "../../utils/Const/Const";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });


const onSubmit = async (data) => {
  try {
    const response = await fetch(
      `${Config.contactEmail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Property Inquiry",
          name: data.name,
          phone: data.phone,
          message: data.message,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
       toast.success(
            "Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly."
        );
      reset();
    } else {
       toast.error(
    "Unable to submit your inquiry. Please try again later."
  );
    }
  } catch (error) {
    toast.error(
    "Network error. Please check your internet connection."
  );
  }
};

  return (
   <section className="relative py-10 to-white overflow-hidden">

  {/* background glow */}
  <div className="absolute -top-20 left-10 w-72 h-72 bg-emerald-300/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full" />

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

    {/* Header */}
    <div className="text-center mb-6">
      <h2 className="text-4xl font-bold tracking-tight">
        Get In Touch
      </h2>

      <p className="mt-3 text-slate-600">
        Share your requirements and our experts will contact you shortly
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* FORM CARD */}
      <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl p-6 md:p-8 hover:shadow-2xl transition">

        <h3 className="text-xl font-semibold mb-6">
          Send Inquiry
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* NAME */}
          <div>
            <input
              {...register("name")}
              placeholder="Your Full Name"
              className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.name?.message}
            </p>
          </div>

          {/* PHONE */}
          <div>
            <input
              {...register("phone")}
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.phone?.message}
            </p>
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Tell us about your requirement..."
              className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.message?.message}
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>

        </form>
      </div>

      {/* INFO CARD */}
      <div className="flex flex-col justify-center">

        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl p-6 md:p-8">

          <h3 className="text-2xl font-bold">
            Let’s Build Your Dream Home
          </h3>

          <p className="mt-2 text-slate-300 text-sm">
            Premium real estate consultation with instant response
          </p>

          {/* contact blocks */}
          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition">
              <MapPin className="text-emerald-400" size={20} />
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm font-medium">{ContactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition">
              <Phone className="text-emerald-400" size={20} />
              <div>
                <p className="text-xs text-slate-400">Call</p>
                <p className="text-sm font-medium">{ContactInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition">
              <Mail className="text-emerald-400" size={20} />
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-sm font-medium">{ContactInfo.email}</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4">
            <p className="text-sm text-slate-200">
              ✨ Discover premium properties with trusted real estate expertise
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  );
}