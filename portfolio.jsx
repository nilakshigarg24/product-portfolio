// portfolio.jsx
// Loaded as plain text by index.html and transpiled live by Babel Standalone.
// No build step, no npm install — just edit and refresh.

const { useState, useEffect } = React;

function NavBar({ dark, setDark }) {
  return (
    <nav className="flex items-center justify-between max-w-4xl mx-auto px-6 py-6">
      <span className="font-semibold text-lg">Nilakshi</span>
      <div className="hidden sm:flex gap-8 text-sm text-gray-600 dark:text-gray-300">
        <a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a>
        <a href="#experience" className="hover:text-gray-900 dark:hover:text-white">Experience</a>
        <a href="#work" className="hover:text-gray-900 dark:hover:text-white">Work</a>
        <a href="#connect" className="hover:text-gray-900 dark:hover:text-white">Connect</a>
      </div>
      <button
        onClick={() => setDark(!dark)}
        className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center"
        aria-label="Toggle dark mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 grid sm:grid-cols-[1fr_auto] gap-10 items-center">
      <div>
        <p className="text-2xl mb-2">I'm Nilakshi 👋</p>
        <p className="uppercase tracking-wide text-sm text-gray-500 mb-6">
          AI Product Manager · B2B SaaS · 0→1 AI Products
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Turning customer needs into AI-powered products that ship.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
          AI-focused Associate Product Manager with 2+ years shipping 0-to-1 products
          in B2B SaaS — from RAG-based assistants to intelligence-driven search features
          that drive measurable efficiency gains and cut support load.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="Nilakshi_Resume.pdf"
            className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-5 py-3 rounded-full font-medium"
          >
            Download resume ↗
          </a>
          <a
            href="https://linkedin.com/in/profile"
            className="border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-full font-medium"
          >
            LinkedIn
          </a>
          <a
            href="#connect"
            className="border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-full font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
      <img
        src="photo.jpg"
        alt="Nilakshi"
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto"
      />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <p className="uppercase tracking-wide text-sm text-gray-500 mb-3">About</p>
      <h2 className="text-3xl font-bold mb-6">A bit about me</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
        I'm an AI-focused Associate Product Manager with 2+ years of experience shipping
        0-to-1 products in B2B SaaS. I've worked across the full arc from AI-powered RAG-based
        assistants to intelligence-driven search features, always translating customer needs
        into data-backed product decisions and communicating impact clearly to stakeholders.
      </p>

      <div className="mt-8">
        <p className="text-sm text-gray-500 mb-3">Skills</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "RAG", "LLM Fine-Tuning", "Prompt Engineering", "SQL", "Figma",
            "Wireframing", "Mixpanel", "QuickSight", "Agile Scrum", "JIRA",
            "Postman", "RESTful APIs", "Excel"
          ].map((skill) => (
            <span
              key={skill}
              className="text-sm border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "Product Strategy", "User Research", "Competitive Analysis",
            "New Product Launch", "Analytical Thinking", "Collaboration"
          ].map((skill) => (
            <span
              key={skill}
              className="text-sm bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const roles = [
    {
      company: "Diaspark",
      title: "Associate Product Manager",
      period: "Sep 2026 — Present",
      location: "Indore",
      bullets: [
        "Assisted in driving the 0-to-1 AI product lifecycle for Luxare Repair, managing 5+ modules independently and contributing to a 20% improvement in client operational efficiency.",
        "Spearheaded deployment of an AI-powered Search Job and Knowledge Base assistant using Fine-Tuning and RAG, reducing support queries by 25%.",
        "Managed and prioritized the AI product backlog based on customer needs, defining and tracking success metrics to accelerate development cycles by 30%.",
      ],
    },
    {
      company: "LeadSquared",
      title: "Associate Product Manager",
      period: "May 2024 — Sep 2025",
      location: "Bangalore",
      bullets: [
        "Spearheaded product discovery for the ticketing platform via 30+ user interviews and competitor analysis, shaping a roadmap that reduced feature delivery time by 25%.",
        "Delivered 5+ product initiatives end-to-end with 90% on-time releases, aligning product goals with engineering using Trello, ProductBoard, and Jira.",
        "Drove a 30% increase in user engagement using Pendo and Clarity to identify drop-off points and introduce data-driven UX improvements.",
        "Accelerated feature delivery by 20% by streamlining sprint rituals and proactively unblocking cross-team dependencies.",
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <p className="uppercase tracking-wide text-sm text-gray-500 mb-3">Experience</p>
      <h2 className="text-3xl font-bold mb-8">Where I've worked</h2>
      <div className="space-y-10">
        {roles.map((r) => (
          <div key={r.company}>
            <div className="flex justify-between flex-wrap gap-2 mb-3">
              <p className="font-semibold">{r.title} · {r.company}</p>
              <span className="text-sm text-gray-400">{r.period} · {r.location}</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-600 dark:text-gray-300 text-sm">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      name: "AI Search Job & Knowledge Base Assistant",
      desc: "Deployed a RAG- and fine-tuning-based assistant for Luxare Repair, cutting support queries by 25% while improving self-serve resolution for customers.",
    },
    {
      name: "Luxare Repair — 0-to-1 AI Product Lifecycle",
      desc: "Drove the 0-to-1 lifecycle across 5+ modules for a B2B repair management platform, contributing to a 20% lift in client operational efficiency.",
    },
    {
      name: "LeadSquared Ticketing Platform Discovery",
      desc: "Led product discovery through 30+ user interviews and competitive analysis, producing a roadmap that cut feature delivery time by 25%.",
    },
    {
      name: "R.Gen — AI Lifestyle Companion (IIM Kashipur)",
      desc: "Authored a PRD and prototype for an AI decision-making platform integrating with Zomato, Swiggy, and BookMyShow to recommend meals, travel, and entertainment, backed by market research and user interviews.",
    },
  ];

  return (
    <section id="work" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <p className="uppercase tracking-wide text-sm text-gray-500 mb-3">Work</p>
      <h2 className="text-3xl font-bold mb-8">Selected work</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <p className="font-semibold mb-2">{p.name}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const schools = [
    { name: "Indian Institute of Management Kashipur", degree: "Master of Business Administration", period: "2022 — 2024" },
    { name: "Panjab University Chandigarh", degree: "B.Sc (Hons.) Physics", period: "2018 — 2021" },
  ];
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <p className="uppercase tracking-wide text-sm text-gray-500 mb-3">Education</p>
      <h2 className="text-3xl font-bold mb-8">Academic background</h2>
      <div className="space-y-4">
        {schools.map((s) => (
          <div key={s.name} className="flex justify-between flex-wrap gap-2">
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{s.degree}</p>
            </div>
            <span className="text-sm text-gray-400">{s.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800 text-center">
      <p className="uppercase tracking-wide text-sm text-gray-500 mb-3">Connect</p>
      <h2 className="text-3xl font-bold mb-4">Let's talk</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Best way to reach me is email or LinkedIn.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="mailto:nilakshigarg24@gmail.com"
          className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-6 py-3 rounded-full font-medium inline-block"
        >
          Email me
        </a>
        <a
          href="https://linkedin.com/in/profile"
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-medium inline-block"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen transition-colors">
        <NavBar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Education />
        <Connect />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
