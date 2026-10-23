import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, ExternalLink, Menu, X, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { profile, skills, projects, experience, education, certifications } from "@/data/profile";

const title = `${profile.name} — ${profile.role} Portfolio`;
const desc = `${profile.name} is a ${profile.role} specializing in PHP, Laravel, MySQL and JavaScript. See projects, experience and contact details.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["contact", "Contact"],
] as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-sm font-semibold uppercase tracking-[0.25em] text-gradient">{eyebrow}</p>
        <h2 className="reveal mt-3 text-3xl font-semibold md:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

const btnPrimary = "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 hover:shadow-[0_0_40px_-8px_var(--glow-violet)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const btnGhost = "inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold transition hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "glass border-x-0 border-t-0" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-bold">
          {profile.name.split(" ")[0]}<span className="text-gradient">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="text-sm text-muted-foreground transition hover:text-foreground">{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground md:inline-flex">Hire me</a>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-5 md:hidden">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-secondary">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Socials({ className = "" }: { className?: string }) {
  const links = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ];
  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}
          className="grid h-11 w-11 place-items-center rounded-full glass transition hover:-translate-y-1 hover:border-primary/60 hover:text-primary">
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-20 md:pt-40">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--glow-blue)]" /> Open to opportunities
          </p>
          <h1 className="reveal mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="reveal mt-4 font-display text-xl text-muted-foreground md:text-2xl">{profile.role}</p>
          <p className="reveal mt-6 text-2xl font-medium md:text-3xl">{profile.headline}</p>
          <p className="reveal mt-4 max-w-xl text-muted-foreground">{profile.intro}</p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <a href="#projects" className={btnPrimary}>View My Work <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className={btnGhost}>Contact Me</a>
          </div>
          <Socials className="reveal mt-8" />
        </div>
        <div className="reveal relative mx-auto w-full max-w-md">
          <div aria-hidden className="absolute inset-6 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
          <img src={heroVisual} alt="Abstract glass sculpture in violet and blue" width={1024} height={1024} fetchPriority="high"
            className="animate-float relative aspect-square w-full rounded-[2rem] object-cover" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About me" title="Developer who enjoys the whole stack">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="reveal glass rounded-2xl p-8 md:col-span-2">
          {profile.about.map((p) => <p key={p} className="mb-4 text-lg leading-relaxed text-muted-foreground last:mb-0">{p}</p>)}
          <h3 className="mt-8 text-lg font-semibold">Career goal</h3>
          <p className="mt-2 text-muted-foreground">{profile.goal}</p>
        </div>
        <div className="reveal glass rounded-2xl p-8">
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" />{profile.location}</li>
            <li className="flex items-center gap-3"><GraduationCap className="h-4 w-4 text-primary" />MCA, Uttaranchal University</li>
            <li className="flex items-center gap-3"><Briefcase className="h-4 w-4 text-primary" />2 internships</li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold">Interests</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.interests.map((i, n) => <span key={n} className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">{i}</span>)}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="reveal glass card-hover rounded-2xl p-6">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand"><Code2 className="h-5 w-5 text-primary-foreground" /></div>
            <h3 className="font-semibold">{s.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((i) => <span key={i} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} className="reveal glass card-hover group flex flex-col overflow-hidden rounded-2xl">
            <div className="relative aspect-video overflow-hidden bg-secondary">
              {p.image ? (
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              ) : (
                <div className="grid h-full place-items-center bg-gradient-brand opacity-80 transition duration-500 group-hover:scale-105">
                  <span className="font-display text-5xl font-bold text-primary-foreground/90">0{i + 1}</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gradient font-medium">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs">{t}</span>)}
              </div>
              <div className="mt-6 flex gap-3">
                <ProjectLink href={p.demo} label="Live Demo" icon={<ExternalLink className="h-4 w-4" />} />
                <ProjectLink href={p.repo || profile.github} label="GitHub" icon={<Github className="h-4 w-4" />} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  if (!href) return <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground opacity-60" title="Link coming soon">{icon}{label}</span>;
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:border-primary hover:text-primary">{icon}{label}</a>;
}

function Timeline({ items, Icon }: { items: { title: string; org: string; period: string; points?: string[]; note?: string }[]; Icon: typeof Briefcase }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-8">
      {items.map((it) => (
        <li key={it.title + it.org} className="reveal relative">
          <span className="absolute -left-[49px] grid h-9 w-9 place-items-center rounded-full bg-gradient-brand"><Icon className="h-4 w-4 text-primary-foreground" /></span>
          <div className="glass card-hover rounded-2xl p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-semibold">{it.title}</h4>
              <span className="text-xs text-muted-foreground">{it.period}</span>
            </div>
            <p className="text-sm text-gradient font-medium">{it.org}</p>
            {it.note && <p className="mt-3 text-sm text-muted-foreground">{it.note}</p>}
            {it.points && <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-foreground">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Education & experience">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="reveal mb-6 text-xl font-semibold">Experience</h3>
          <Timeline items={experience} Icon={Briefcase} />
        </div>
        <div className="space-y-12">
          <div><h3 className="reveal mb-6 text-xl font-semibold">Education</h3><Timeline items={education} Icon={GraduationCap} /></div>
          <div><h3 className="reveal mb-6 text-xl font-semibold">Certifications</h3><Timeline items={certifications} Icon={Award} /></div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [error, setError] = useState("");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim().slice(0, 100);
    const email = String(f.get("email") || "").trim().slice(0, 255);
    const message = String(f.get("message") || "").trim().slice(0, 2000);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) return setError("Please fill in all fields with a valid email.");
    setError("");
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
  }
  const input = "w-full rounded-xl border bg-input/20 px-4 py-3 outline-none transition placeholder:text-muted-foreground focus:border-primary";
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal glass rounded-2xl p-8">
          <p className="text-muted-foreground">Have an opportunity or a project in mind? I'd love to hear from you.</p>
          <ul className="mt-8 space-y-5">
            <li><a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5 text-primary" />{profile.email}</a></li>
            <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />{profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Linkedin className="h-5 w-5 text-primary" />rohani-kumari</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Github className="h-5 w-5 text-primary" />rohani5432</a></li>
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="reveal glass space-y-4 rounded-2xl p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">Name<input name="name" maxLength={100} required className={`${input} mt-2`} placeholder="Your name" /></label>
            <label className="block text-sm">Email<input name="email" type="email" maxLength={255} required className={`${input} mt-2`} placeholder="you@example.com" /></label>
          </div>
          <label className="block text-sm">Message<textarea name="message" rows={5} maxLength={2000} required className={`${input} mt-2 resize-none`} placeholder="Tell me about your project…" /></label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <button type="submit" className={btnPrimary}>Send message <ArrowRight className="h-4 w-4" /></button>
          <p className="text-xs text-muted-foreground">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main">
        <Hero /><About /><Skills /><Projects /><Experience /><Contact />
      </main>
      <footer className="border-t px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-display font-semibold">{profile.name}</p>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
          <Socials />
        </div>
      </footer>
    </>
  );
}
