import React, { useState } from "react";
import { profileData } from "../data/profile";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate asynchronous submission handling safely
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      // Reset feedback after 7 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    }, 800);
  };

  const handleMailtoDirect = () => {
    const subjectParam = encodeURIComponent(formData.subject || "Project / Opportunity Inquiry");
    const bodyParam = encodeURIComponent(
      `Hello Mayank,\n\n${formData.message || ""}\n\nFrom: ${formData.name || "A visitor"} (${formData.email || ""})`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subjectParam}&body=${bodyParam}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            Reach Out
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--text-main)" }}
          >
            Let's Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I'm always interested in discussing technology, projects, internships, and new opportunities.
          </p>
        </div>

        {/* Layout Inspired by Reference Layout (Two Columns: Info Card & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Information */}
          <div
            className="lg:col-span-5 liquid-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--text-main)" }}>
                Start a Conversation
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Whether you have an internship opening, a freelance project, or simply want to chat about AI and full-stack software development, my inbox is always open.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-4 rounded-2xl border backdrop-blur-xl flex items-center gap-3.5 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 group"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 block font-medium">Email Me</span>
                    <span className="text-sm font-semibold truncate block group-hover:text-cyan-400 transition-colors" style={{ color: "var(--text-main)" }}>
                      {profileData.email}
                    </span>
                  </div>
                </a>

                <div
                  className="p-4 rounded-2xl border backdrop-blur-xl flex items-center gap-3.5"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Location</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--text-main)" }}>
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3">
                  Connect on Social Platforms
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-xl border backdrop-blur-xl transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-main)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-xl border backdrop-blur-xl transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-main)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label="Direct Email"
                    className="p-3 rounded-xl border backdrop-blur-xl transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-main)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t text-xs text-slate-500" style={{ borderColor: "var(--border-subtle)" }}>
              <span>Typical response time: within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="lg:col-span-7 liquid-card p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text-main)" }}>
              Send a Message
            </h3>

            {submitSuccess && (
              <div className="p-4 rounded-xl mb-6 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 backdrop-blur-md animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-emerald-300">Message sent successfully!</p>
                  <p className="text-emerald-400/90 mt-0.5">
                    Thank you for reaching out. I have received your note and will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-main)" }}>
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none backdrop-blur-md transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: errors.name ? "#F43F5E" : "var(--border-subtle)",
                      color: "var(--text-main)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)"
                    }}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-main)" }}>
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none backdrop-blur-md transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: errors.email ? "#F43F5E" : "var(--border-subtle)",
                      color: "var(--text-main)",
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)"
                    }}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-main)" }}>
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none backdrop-blur-md transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: errors.subject ? "#F43F5E" : "var(--border-subtle)",
                    color: "var(--text-main)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)"
                  }}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-main)" }}>
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none backdrop-blur-md transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: errors.message ? "#F43F5E" : "var(--border-subtle)",
                    color: "var(--text-main)",
                    boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)"
                  }}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Form Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white liquid-btn-glow shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleMailtoDirect}
                  className="text-xs text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Or open in your email client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
