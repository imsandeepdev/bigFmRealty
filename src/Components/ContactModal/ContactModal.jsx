import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { config as Config } from "../../Config/Config";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
});

export default function ContactModal({ isOpen, onClose }) {
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
            _subject: "New Property Lead",
            _template: "table",
            name: data.name,
            phone: data.phone,
            description: data.description,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        reset();
        onClose();

        toast.success(
          "Thank you! Our team will contact you shortly."
        );
      } else {
        toast.error("Unable to submit inquiry.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold">
            Contact Us
          </h3>

          <button
            onClick={onClose}
            className="text-2xl text-slate-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-300 p-3"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.name?.message}
            </p>
          </div>

          <div>
            <input
              {...register("phone")}
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-slate-300 p-3"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.phone?.message}
            </p>
          </div>

          <div>
            <textarea
              rows={4}
              {...register("description")}
              placeholder="Tell us your requirement"
              className="w-full rounded-xl border border-slate-300 p-3"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.description?.message}
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>

      </div>
    </div>
  );
}