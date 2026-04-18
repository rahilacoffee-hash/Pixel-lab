import { FiDownload, FiCode } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import logo from "../assets/hacker.png";

function Features() {
  return (
    <section
      id="features"
      className="min-h-screen px-6 py-24 max-w-7xl mx-auto flex flex-col items-center"
    >
      {/* ── Section Label ── */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          About{" "}
          <span
            className="italic"
            style={{ WebkitTextStroke: "2px #00e5ff", color: "transparent" }}
          >
            Me
          </span>
        </h2>
        <p className="text-white/40 text-sm tracking-widest">
          ✦ Transforming ideas into digital experiences ✦
        </p>
      </div>

      {/* ── Main Bio Row ── */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 mb-16">
        {/* Left – Text */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-cyan-400 text-lg font-semibold mb-1">
              Hello, I'm
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">
              PixelLab
            </h3>
          </div>

          <p className="text-white/50 text-sm md:text-base leading-relaxed text-justify">
            A highly motivated company in Computer Science, specializing in
            creating robust and user-centric digital experiences. My background
            in full-stack development — React, Node.js, MongoDB — combined with
            a great passion for UI/UX design, fuels my drive to build intuitive
            and high-performance web interfaces.
          </p>

          {/* Quote */}
          <div className="border-l-2 border-cyan-400/50 pl-4">
            <p className="text-cyan-300/70 text-sm italic">
              "Building clean, scalable products — one commit at a time."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #00e5ff, #0094a3)",
                color: "#0b0f1a",
              }}
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold border border-cyan-400/30 text-cyan-300 bg-white/5 hover:bg-white/10 transition-all duration-200 active:scale-95"
            >
              <FiCode className="w-4 h-4" />
              View Projects
            </a>
          </div>
        </div>

        {/* Right – Profile Photo */}
        <div className="flex-shrink-0">
          <div
            className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl"
            style={{
              borderColor: "#00e5ff30",
              boxShadow: "0 0 40px #00e5ff22, 0 0 80px #00e5ff0a",
            }}
          >
            <img
              src={logo}
              alt="Fred Abdulrahman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Stats Cards ── */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card – Total Projects */}
        <div className="group relative rounded-2xl border border-white/8 bg-[#0b0f1a] p-5 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <FiCode className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Total Projects
              </span>
            </div>
            <span className="text-3xl font-black text-white">3</span>
          </div>
          <p className="text-white/30 text-xs mb-4">
            Web, design, and editing work delivered
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-cyan-400/60 font-semibold">
              ● live
            </span>
            <span className="text-white/20 group-hover:text-cyan-400 transition-colors text-sm">
              ↗
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>

        {/* Card – Certificates */}
        <div className="group relative rounded-2xl border border-white/8 bg-[#0b0f1a] p-5 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <HiOutlineBadgeCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Certificates
              </span>
            </div>
            <span className="text-3xl font-black text-white">4</span>
          </div>
          <p className="text-white/30 text-xs mb-4">
            Professional skills validated
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-cyan-400/60 font-semibold">
              ● live
            </span>
            <span className="text-white/20 group-hover:text-cyan-400 transition-colors text-sm">
              ↗
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>

        {/* Card – Years of Experience */}
        <div className="group relative rounded-2xl border border-white/8 bg-[#0b0f1a] p-5 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <TbWorld className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Years of Experience
              </span>
            </div>
            <span className="text-3xl font-black text-white">1</span>
          </div>
          <p className="text-white/30 text-xs mb-4">
            Continuous learning journey
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-cyan-400/60 font-semibold">
              ● live
            </span>
            <span className="text-white/20 group-hover:text-cyan-400 transition-colors text-sm">
              ↗
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Features;
