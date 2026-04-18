import { useState } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import {
  TbBrandReact, TbBrandNodejs, TbBrandMongodb,
  TbBrandTailwind, TbBrandGit, TbBrandFigma, TbBrandVscode,
} from "react-icons/tb";
import {
  SiExpress, SiJsonwebtokens, SiCloudinary,
  SiStripe, SiVite, SiPostman, SiMui,
} from "react-icons/si";

// ── Data ──────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1, category: "Project",
    title: "Rahila Coffee – E-Commerce Platform",
    tags: ["React", "Node.js", "MongoDB"],
    url: "rahilacoffee.vercel.app", badge: "LIVE NOW!",
    color: "from-[#0a2a3a] to-[#0d1f2d]", accent: "#00e5ff",
  },
  {
    id: 2, category: "Project",
    title: "Thinkboard – Notes & Task Manager",
    tags: ["MERN", "JWT Auth", "Atlas"],
    url: "thinkboard.vercel.app", badge: null,
    color: "from-[#0d1f2d] to-[#0a1520]", accent: "#00e5ff",
  },
  {
    id: 3, category: "Project",
    title: "Portfolio Website – Personal Brand",
    tags: ["React", "Tailwind", "Vite"],
    url: "fredportfolio.vercel.app", badge: "LIVE NOW!",
    color: "from-[#0a1a2e] to-[#0d1f2d]", accent: "#00e5ff",
  },
  {
    id: 4, category: "Design",
    title: "Brand Identity – Kohi Coffee",
    tags: ["Figma", "Logo", "Typography"],
    url: "behance.net/fred", badge: null,
    color: "from-[#0d1f2d] to-[#0a1520]", accent: "#00e5ff",
  },
  {
    id: 5, category: "Design",
    title: "UI Kit – Dark Dashboard System",
    tags: ["Figma", "MUI", "Components"],
    url: "figma.com/fred", badge: null,
    color: "from-[#0a2a3a] to-[#0d1f2d]", accent: "#00e5ff",
  },
  {
    id: 6, category: "Editing",
    title: "Promo Reel – Tech Showcase 2025",
    tags: ["Premiere Pro", "Motion", "4K"],
    url: "youtube.com/@fred", badge: null,
    color: "from-[#0a1a2e] to-[#0d1f2d]", accent: "#00e5ff",
  },
];

const CERTIFICATES = [
  {
    id: 1,
    title: "React – The Complete Guide",
    issuer: "CTTI",
    issuerColor: "#A435F0",
    date: "Jan 2025",
    category: "Frontend",
    url: "https://udemy.com/certificate/",
    skills: ["React", "Hooks", "Redux"],
  },
  {
    id: 2,
    title: "Node.js & Express – Backend Development",
    issuer: "CTTI",
    issuerColor: "#0056D2",
    date: "Mar 2025",
    category: "Backend",
    url: "https://coursera.org/certificate/",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    id: 3,
    title: "MongoDB",
    issuer: "CTTI",
    issuerColor: "#47A248",
    date: "Apr 2025",
    category: "Database",
    url: "https://university.mongodb.com/",
    skills: ["MongoDB", "Atlas", "Aggregation"],
  },
 
  {
    id: 5,
    title: "Full-Stack Web Development",
    issuer: "CTTI",
    issuerColor: "#00D1B2",
    date: "Nov 2024",
    category: "Full-Stack",
    url: "https://freecodecamp.org/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const STACK_GROUPS = [
  {
    group: "Frontend",
    items: [
      { name: "React",       icon: TbBrandReact,   color: "#61DAFB", level: 90 },
      { name: "Tailwind CSS",icon: TbBrandTailwind, color: "#38BDF8", level: 85 },
      { name: "MUI",         icon: SiMui,           color: "#007FFF", level: 75 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: TbBrandNodejs, color: "#68A063", level: 85 },
      { name: "Express", icon: SiExpress,     color: "#ffffff",  level: 80 },
      { name: "JWT",     icon: SiJsonwebtokens, color: "#FB015B", level: 75 },
      { name: "Stripe",  icon: SiStripe,      color: "#635BFF", level: 70 },
    ],
  },
  {
    group: "Database & Cloud",
    items: [
      { name: "MongoDB",    icon: TbBrandMongodb, color: "#47A248", level: 85 },
      { name: "Cloudinary", icon: SiCloudinary,   color: "#3448C5", level: 75 },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", icon: TbBrandVscode,color: "#007ACC", level: 90 },
      { name: "Postman", icon: SiPostman,    color: "#FF6C37", level: 80 },
    ],
  },
];

// ── Shared ────────────────────────────────────────────────────────────────────

const accent = "#00e5ff";
const cardBase = "group relative rounded-2xl overflow-hidden border border-white/8 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-950/40 cursor-pointer bg-[#0b0f1a]";
const tagClass = "text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/40";
const tabBase = "px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200";
const tabActive = "text-[#0b0f1a] shadow-lg shadow-cyan-400/20";
const tabInactive = "text-white/40 bg-white/5 hover:bg-white/10 hover:text-white/70";
const tabActiveStyle = { background: `linear-gradient(135deg, ${accent}, #0094a3)` };

// ── MockScreen ────────────────────────────────────────────────────────────────

function MockScreen() {
  return (
    <div className="w-44 h-28 rounded-lg bg-[#0a0e1a]/80 backdrop-blur border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/8 bg-[#0d1117]">
        <div className="w-2 h-2 rounded-full bg-red-500/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <div className="w-2 h-2 rounded-full bg-green-500/80" />
        <div className="ml-2 flex gap-1.5">
          <div className="h-3 w-10 rounded-sm bg-white/15 border border-white/10" />
          <div className="h-3 w-8 rounded-sm bg-white/5" />
        </div>
      </div>
      <div className="p-2 space-y-1.5 font-mono">
        <div className="flex gap-1.5 items-center">
          <span className="text-[7px] text-cyan-400">{"<div"}</span>
          <div className="h-1 rounded bg-white/20 w-12" />
          <span className="text-[7px] text-cyan-400">{">"}</span>
        </div>
        <div className="pl-3"><div className="h-1 rounded bg-white/10 w-16" /></div>
        <div className="pl-3"><div className="h-1 rounded bg-white/15 w-10" /></div>
        <div className="flex gap-1.5 items-center">
          <span className="text-[7px] text-cyan-400">{"</div>"}</span>
        </div>
      </div>
    </div>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <div className={cardBase}>
      <div className={`h-44 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center, ${project.accent}33, transparent 70%)` }}
        />
        <MockScreen />
        {project.badge && (
          <span
            className="absolute top-3 right-3 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border"
            style={{ color: project.accent, borderColor: project.accent + "50", background: project.accent + "15" }}
          >
            {project.badge}
          </span>
        )}
      </div>
      <div className="p-5 border-t border-white/5">
        <h3 className="text-white/90 font-bold text-base leading-snug mb-3 group-hover:text-cyan-300 transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={tagClass}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-[10px] font-mono text-white/20">{project.url}</span>
          <span
            className="text-[11px] font-semibold tracking-wide opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200"
            style={{ color: project.accent }}
          >
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
}

// ── CertCard ──────────────────────────────────────────────────────────────────

function CertCard({ cert }) {
  return (
    <div className={cardBase + " flex flex-col"}>
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: cert.issuerColor + "20", border: `1px solid ${cert.issuerColor}40` }}
          >
            <HiOutlineBadgeCheck className="w-5 h-5" style={{ color: cert.issuerColor }} />
          </div>
          <span
            className="text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border"
            style={{ color: accent, borderColor: accent + "30", background: accent + "10" }}
          >
            {cert.category}
          </span>
        </div>
        <h3 className="text-white/90 font-bold text-sm leading-snug mb-1 group-hover:text-cyan-300 transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="text-[11px] font-semibold mb-3" style={{ color: cert.issuerColor }}>
          {cert.issuer}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span key={skill} className={tagClass}>{skill}</span>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-[10px] text-white/20 font-mono">{cert.date}</span>
        <a
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200"
          style={{ color: accent }}
        >
          <FiExternalLink className="w-3 h-3" />
          Verify →
        </a>
      </div>
    </div>
  );
}

// ── StackGroup ────────────────────────────────────────────────────────────────

function StackGroup({ group, items }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0b0f1a] p-5">
      <p className="text-[10px] uppercase tracking-widest text-white/25 font-bold mb-4">{group}</p>
      <div className="space-y-3">
        {items.map(({ name, icon: Icon, color, level }) => (
          <div key={name} className="group/item">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                <span className="text-sm text-white/60 font-medium group-hover/item:text-white transition-colors">
                  {name}
                </span>
              </div>
              <span className="text-[10px] font-bold" style={{ color: accent + "99" }}>{level}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${level}%`, background: `linear-gradient(90deg, ${accent}80, ${accent})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

function Features() {
  const [section, setSection] = useState("Projects");
  const [projectTab, setProjectTab] = useState("Project");

  const filteredProjects = PROJECTS.filter((p) => p.category === projectTab);

  function sectionNavClass(name) {
    return `flex flex-col items-center gap-2 py-4 rounded-xl border transition-all duration-200 ${
      section === name
        ? "border-cyan-400/40 bg-cyan-400/10 text-white"
        : "border-white/8 bg-white/3 text-white/40 hover:bg-white/6 hover:text-white/70"
    }`;
  }

  return (
    <section
    id="pricing"
     className="py-24 px-6 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/60 font-semibold mb-3">
          ✦ My Work
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
        >
          Portfolio{" "}
          <span className="italic" style={{ WebkitTextStroke: "2px #00e5ff", color: "transparent" }}>
            Showcase
          </span>
        </h2>
        <p className="text-white/35 text-sm max-w-lg mx-auto leading-relaxed">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* ── Section Nav ── */}
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
        <button onClick={() => setSection("Projects")} className={sectionNavClass("Projects")}>
          <FiCode className="w-5 h-5" style={section === "Projects" ? { color: accent } : {}} />
          <span className="text-xs font-bold uppercase tracking-wide">Projects</span>
        </button>
        <button onClick={() => setSection("Certificates")} className={sectionNavClass("Certificates")}>
          <HiOutlineBadgeCheck className="w-5 h-5" style={section === "Certificates" ? { color: accent } : {}} />
          <span className="text-xs font-bold uppercase tracking-wide">Certificates</span>
        </button>
        <button onClick={() => setSection("Tech Stack")} className={sectionNavClass("Tech Stack")}>
          <TbWorld className="w-5 h-5" style={section === "Tech Stack" ? { color: accent } : {}} />
          <span className="text-xs font-bold uppercase tracking-wide">Tech Stack</span>
        </button>
      </div>

      {/* ══ PROJECTS ══ */}
      {section === "Projects" && (
        <>
          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setProjectTab("Project")}
              className={`${tabBase} ${projectTab === "Project" ? tabActive : tabInactive}`}
              style={projectTab === "Project" ? tabActiveStyle : {}}
            >
              Project
            </button>
            <button
              onClick={() => setProjectTab("Design")}
              className={`${tabBase} ${projectTab === "Design" ? tabActive : tabInactive}`}
              style={projectTab === "Design" ? tabActiveStyle : {}}
            >
              Design
            </button>
            <button
              onClick={() => setProjectTab("Editing")}
              className={`${tabBase} ${projectTab === "Editing" ? tabActive : tabInactive}`}
              style={projectTab === "Editing" ? tabActiveStyle : {}}
            >
              Editing
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center py-20 text-white/20 text-sm italic">Nothing here yet — coming soon.</p>
          )}
        </>
      )}

      {/* ══ CERTIFICATES ══ */}
      {section === "Certificates" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      )}

      {/* ══ TECH STACK ══ */}
      {section === "Tech Stack" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STACK_GROUPS.map((g) => (
            <StackGroup key={g.group} group={g.group} items={g.items} />
          ))}
        </div>
      )}

    </section>
  );
}

export default Features;