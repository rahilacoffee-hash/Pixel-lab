import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";

function Testimonials() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error"

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Wire to EmailJS / Formspree / your own API here
    setTimeout(() => setStatus("sent"), 1500);
  }

  const accent = "#00e5ff";

  const inputClass =
    "w-full bg-[#0b0f1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200";

  return (
    <div
      id="testimonials"
      className="min-h-screen px-4 sm:px-6 pb-24"
      style={{
        background:
          "radial-gradient(ellipse at top, #050e1a 0%, #060910 50%, #04060d 100%)",
        fontFamily: "'Trebuchet MS', sans-serif",
      }}
    >
      {/* Noise overlay */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto pt-28">
        {/* ── Heading ── */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/60 font-semibold mb-3">
            ✦ Let's Talk
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Get In{" "}
            <span
              className="italic"
              style={{ WebkitTextStroke: "2px #00e5ff", color: "transparent" }}
            >
              Touch
            </span>
          </h2>
          <p className="text-white/35 text-sm max-w-md mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to say hi? My inbox
            is always open — I'll get back to you as soon as possible.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Left Info Panel ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info cards */}
            <div className="rounded-2xl border border-white/8 bg-[#0b0f1a] p-6 space-y-5">
              <p className="text-[10px] uppercase tracking-widest text-white/25 font-bold mb-2">
                Contact Info
              </p>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: accent + "15",
                    border: `1px solid ${accent}30`,
                  }}
                >
                  <FiMail className="w-4 h-4" style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest font-bold mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:abrahamfred123@gmail.com"
                    className="text-sm text-white/60 hover:text-cyan-300 transition-colors"
                  >
                    abrahamfred123@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "#25D36615",
                    border: "1px solid #25D36630",
                  }}
                >
                  <TbBrandWhatsapp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest font-bold mb-0.5">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/2347042548724"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/60 hover:text-green-300 transition-colors"
                  >
                    +234 7042 548 724
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: accent + "15",
                    border: `1px solid ${accent}30`,
                  }}
                >
                  <FiMapPin className="w-4 h-4" style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest font-bold mb-0.5">
                    Location
                  </p>
                  <p className="text-sm text-white/60">
                    Utako, Abuja — Nigeria
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-5">
                <p className="text-[10px] uppercase tracking-widest text-white/25 font-bold mb-3">
                  Socials
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/fred"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/fred"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#0A66C2] hover:border-[#0A66C230] transition-all"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com/fred"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-sky-400 hover:border-sky-400/20 transition-all"
                  >
                    <FiTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/fred"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-pink-400 hover:border-pink-400/20 transition-all"
                  >
                    <FiInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="rounded-2xl border p-4 flex items-center gap-3"
              style={{ borderColor: accent + "20", background: accent + "08" }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: accent }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ background: accent }}
                />
              </span>
              <p className="text-xs text-white/50">
                <span className="text-cyan-300 font-semibold">
                  Available for work
                </span>{" "}
                — open to freelance & full-time roles
              </p>
            </div>
          </div>

          {/* ── Right Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/8 bg-[#0b0f1a] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/25 font-bold mb-6">
                Send a Message
              </p>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: accent + "15",
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <FiSend className="w-6 h-6" style={{ color: accent }} />
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    Message Sent!
                  </h3>
                  <p className="text-white/35 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus(null);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-2 text-xs font-semibold transition-colors"
                    style={{ color: accent }}
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/25 font-bold">
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Pixel Lab"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/25 font-bold">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/25 font-bold">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Collaboration / Just saying hi"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-white/25 font-bold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me us your project, timeline, budget — anything helpful..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, #0094a3)`,
                      color: "#0b0f1a",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
