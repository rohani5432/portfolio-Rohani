import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Mail, Menu, X, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { profile } from "@/data/profile";

export const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 hover:shadow-[0_0_40px_-8px_var(--glow-violet)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
export const btnGhost =
  "inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold transition hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function useReveal() {
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

export function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="px-5 pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-sm font-semibold uppercase tracking-[0.25em] text-gradient">{eyebrow}</p>
        <h1 className="reveal mt-3 text-3xl font-semibold md:text-5xl">{title}</h1>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Socials({ className = "" }: { className?: string }) {
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
        <Link to="/" className="font-display text-lg font-bold" onClick={() => setOpen(false)}>
          {profile.name.split(" ")[0]}<span className="text-gradient">.</span>
        </Link>
        <ul className="hidden gap-6 lg:flex">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} activeOptions={{ exact: true }}
                activeProps={{ className: "text-sm font-medium text-foreground" }}
                inactiveProps={{ className: "text-sm text-muted-foreground transition hover:text-foreground" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground lg:inline-flex">Hire me</Link>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-5 lg:hidden">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} activeOptions={{ exact: true }} onClick={() => setOpen(false)}
                activeProps={{ className: "block rounded-lg px-3 py-3 font-medium bg-secondary" }}
                inactiveProps={{ className: "block rounded-lg px-3 py-3 hover:bg-secondary" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

export function ProjectLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  if (!href) return <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground opacity-60" title="Link coming soon">{icon}{label}</span>;
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:border-primary hover:text-primary">{icon}{label}</a>;
}

export function Timeline({ items, Icon }: { items: { title: string; org: string; period: string; points?: string[]; note?: string }[]; Icon: typeof Briefcase }) {
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

export function AboutSidebar() {
  return (
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
  );
}
