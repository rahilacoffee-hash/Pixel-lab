import { useState } from "react";
import { FiGithub, FiExternalLink, FiArrowLeft, FiCode, FiLayers, FiZap } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { TbBrandReact, TbBrandNodejs, TbBrandMongodb, TbBrandTailwind } from "react-icons/tb";
import { SiExpress, SiJsonwebtokens, SiCloudinary, SiStripe, SiVite } from "react-icons/si";

// ── Swap this with useParams / props when wiring to React Router ──
const PROJECT = {
  id: 1,
  title: "Rahila Coffee",
  subtitle: "E-Commerce Platform",
  category: "Full-Stack MERN",
  badge: "LIVE NOW!",
  url: "rahilacoffee.vercel.app",
  github: "github.com/fred/rahila-coffee",
  year: "2025",
  role: "Full-Stack Developer",
  duration: "4 Months",
  description:
    "Rahila Coffee is a full-featured coffee e-commerce web application built as a final-year project. It supports customer browsing, cart management, secure checkout with Stripe, and a complete admin dashboard for product and order management. Authentication is handled via JWT with persistent sessions, and product images are stored via Cloudinary.",
  highlights: [
    "JWT authentication with refresh token persistence",
    "Stripe payment integration with webhook support",
    "Cloudinary image upload for product management",
    "Admin dashboard with sales analytics",
    "Mobile-responsive UI across all pages",
    "MongoDB Atlas cloud database with Mongoose ODM",
  ],
  stack: [
    { name: "React", icon: TbBrandReact, color: "#61DAFB" },
    { name: "Node.js", icon: TbBrandNodejs, color: "#68A063" },
    { name: "MongoDB", icon: TbBrandMongodb, color: "#47A248" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "Tailwind", icon: TbBrandTailwind, color: "#38BDF8" },
    { name: "JWT", icon: SiJsonwebtokens, color: "#FB015B" },
    { name: "Stripe", icon: SiStripe, color: "#635BFF" },
    { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
    { name: "Vite", icon: SiVite, color: "#A855F7" },
  ],
  pages: [
    "Home / Landing",
    "Product Listing",
    "Product Detail",
    "Cart & Checkout",
    "Order Confirmation",
    "Login / Register",
    "Admin Dashboard",
    "Admin Products",
    "Admin Orders",
  ],
};

function MockBrowser({ accent = "#00e5ff" }) {
  return (
    <div className="w-full rounded-xl bg-[#0a0e1a] border border-white/10 shadow-2xl overflow-hidden">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-white/8">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div
          className="ml-4 flex-1 h-6 rounded-md bg-white/5 border border-white/8 flex items-center px-3 gap-2"
        >
          <div className="w-2 h-2 rounded-full" style={{ background: accent + "99" }} />
          <span className="text-[10px] font-mono text-white/30">{PROJECT.url}</span>
        </div>
        <div className="flex gap-1.5 ml-3">
          <div className="h-5 w-12 rounded-sm bg-white/5 border border-white/8 flex items-center justify-center gap-1">
            <span className="text-[8px] text-white/20">App.jsx</span>
          </div>
          <div className="h-5 w-12 rounded-sm bg-white/5 flex items-center justify-center">
            <span className="text-[8px] text-white/10">Hero.jsx</span>
          </div>
        </div>
      </div>
      {/* Fake code preview */}
      <div className="p-5 space-y-2 font-mono min-h-[180px]">
        <div className="flex gap-2 items-center">
          <span className="text-[11px]" style={{ color: accent }}>{"<section"}</span>
          <span className="text-[11px] text-purple-400">className</span>
          <span className="text-[11px] text-white/30">{"="}</span>
          <span className="text-[11px] text-amber-300">{'"hero-section"'}</span>
          <span className="text-[11px]" style={{ color: accent }}>{">"}</span>
        </div>
        <div className="pl-5 space-y-1.5">
          <div className="flex gap-2">
            <span className="text-[11px]" style={{ color: accent }}>{"<h1>"}</span>
            <div className="h-2.5 rounded bg-white/20 w-32 self-center" />
            <span className="text-[11px]" style={{ color: accent }}>{"</h1>"}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[11px]" style={{ color: accent }}>{"<p>"}</span>
            <div className="h-2.5 rounded bg-white/10 w-48 self-center" />
            <span className="text-[11px]" style={{ color: accent }}>{"</p>"}</span>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-[11px]" style={{ color: accent }}>{"<button"}</span>
            <div className="h-5 w-20 rounded" style={{ background: accent + "22", border: `1px solid ${accent}44` }} />
            <span className="text-[11px]" style={{ color: accent }}>{"/>"}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-1">
          <span className="text-[11px]" style={{ color: accent }}>{"</section>"}</span>
        </div>
        {/* Tooltip */}
        <div
          className="mt-3 inline-flex items-start gap-2 px-3 py-2 rounded-lg border text-[10px]"
          style={{ background: "#0d1117", borderColor: accent + "30" }}
        >
          <span className="font-bold" style={{ color: accent }}>MERN</span>
          <span className="text-white/40">MongoDB · Express · React · Node</span>
        </div>
      </div>
    </div>
  );
}

function StackBadge({ name, icon: Icon, color }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8 bg-white/3 hover:border-white/20 transition-colors duration-200"
    >
      <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
      <span className="text-[11px] font-semibold text-white/60">{name}</span>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3 rounded-xl border border-white/8 bg-[#0b0f1a]">
      <div className="flex items-center gap-2 text-white/30 mb-1">
        <Icon className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-[9px] uppercase tracking-widest font-bold">{label}</span>
      </div>
      <span className="text-white font-bold text-sm">{value}</span>
    </div>
  );
}

function ProjectDetail() {
  const [activeSection, setActiveSection] = useState("overview");
  const accent = "#00e5ff";

  return (
    <div
      className="min-h-screen px-4 sm:px-6 pb-24"
      style={{
        background: "radial-gradient(ellipse at top, #050e1a 0%, #060910 50%, #04060d 100%)",
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

        {/* ── Back link ── */}
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-cyan-400 transition-colors mb-10 group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </a>

        {/* ── Hero Row ── */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">

          {/* Left */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <span
                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border"
                style={{ color: accent, borderColor: accent + "40", background: accent + "10" }}
              >
                {PROJECT.badge}
              </span>
              <span className="text-[10px] text-white/20 font-mono">{PROJECT.category}</span>
            </div>

            <div>
              <h1
                className="text-4xl md:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {PROJECT.title}
              </h1>
              <p className="text-cyan-400 font-semibold text-lg mt-1">{PROJECT.subtitle}</p>
            </div>

            <p className="text-white/45 text-sm leading-relaxed max-w-xl">
              {PROJECT.description}
            </p>

            {/* Meta cards */}
            <div className="grid grid-cols-3 gap-3">
              <StatCard icon={FiCode} label="Role" value={PROJECT.role} />
              <StatCard icon={FiZap} label="Duration" value={PROJECT.duration} />
              <StatCard icon={FiLayers} label="Year" value={PROJECT.year} />
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://${PROJECT.url}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:brightness-110 active:scale-95"
                style={{ background: `linear-gradient(135deg, ${accent}, #0094a3)`, color: "#0b0f1a" }}
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={`https://${PROJECT.github}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold border border-white/10 text-white/60 bg-white/5 hover:bg-white/10 hover:text-white transition-all active:scale-95"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right – Browser mock */}
          <div className="lg:w-[480px] flex-shrink-0">
            <MockBrowser accent={accent} />
          </div>
        </div>

        {/* ── Section Nav ── */}
        <div className="flex items-center gap-1 border-b border-white/8 mb-10">
          {["overview", "stack", "pages"].map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-5 py-3 text-sm font-bold capitalize transition-all duration-200 border-b-2 -mb-px ${
                activeSection === sec
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-white/30 hover:text-white/60"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* ── Overview ── */}
        {activeSection === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECT.highlights.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/8 bg-[#0b0f1a] hover:border-cyan-400/20 transition-colors"
              >
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5"
                  style={{ background: accent + "20", color: accent }}
                >
                  {i + 1}
                </span>
                <p className="text-white/55 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── Stack ── */}
        {activeSection === "stack" && (
          <div className="space-y-6">
            <p className="text-white/25 text-xs uppercase tracking-widest font-semibold">
              Technologies used in this project
            </p>
            <div className="flex flex-wrap gap-3">
              {PROJECT.stack.map((tech) => (
                <StackBadge key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
              ))}
            </div>
          </div>
        )}

        {/* ── Pages ── */}
        {activeSection === "pages" && (
          <div className="space-y-6">
            <p className="text-white/25 text-xs uppercase tracking-widest font-semibold">
              Pages & routes built
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {PROJECT.pages.map((page, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-[#0b0f1a] hover:border-cyan-400/20 transition-colors group"
                >
                  <span className="text-[10px] font-mono text-white/20 w-5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors">{page}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectDetail;