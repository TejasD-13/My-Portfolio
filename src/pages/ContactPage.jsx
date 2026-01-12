import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Contact
        </h2>
        <div className="w-12 h-1 bg-[#ffdb70] rounded-full"></div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT (image-like text structure) */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white leading-tight">
            Let’s build <br />
            <span className="text-[#ffdb70]">something extraordinary.</span>
          </h3>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Whether you have a project idea, an internship opportunity,
            or just want to chat about technology — I’m always open to
            meaningful conversations.
          </p>

          {/* Info Cards */}
          <div className="space-y-4 pt-4">
            <div className="
              flex items-center gap-4
              bg-[#1e1e1f]
              border border-[#2f2f2f]
              rounded-xl
              px-5 py-4
            ">
              <div className="
                w-10 h-10
                rounded-lg
                bg-[#ffdb70]/10
                flex items-center justify-center
                text-[#ffdb70]
              ">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="text-white text-sm">
                  tejasdivekar9057@gmail.com
                </p>
              </div>
            </div>

            <div className="
              flex items-center gap-4
              bg-[#1e1e1f]
              border border-[#2f2f2f]
              rounded-xl
              px-5 py-4
            ">
              <div className="
                w-10 h-10
                rounded-lg
                bg-[#ffdb70]/10
                flex items-center justify-center
                text-[#ffdb70]
              ">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400">LOCATION</p>
                <p className="text-white text-sm">
                  India • Remote Friendly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM (same as your theme) */}
        <div className="
          bg-[#1e1e1f]
          border border-[#2f2f2f]
          rounded-2xl
          p-8
        ">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="
                w-full bg-[#111]
                border border-[#333]
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:border-[#ffdb70]
              "
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full bg-[#111]
                border border-[#333]
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:border-[#ffdb70]
              "
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="
                w-full bg-[#111]
                border border-[#333]
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:border-[#ffdb70]
                resize-none
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#ffdb70]
                text-black
                font-semibold
                py-3
                rounded-xl
                hover:shadow-[0_0_35px_rgba(255,219,112,0.6)]
                transition-all
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
