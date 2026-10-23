import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { PageShell, Socials, btnPrimary, btnGhost } from "@/components/portfolio";

const title = `${profile.name} — ${profile.role}`;
const desc = `${profile.name} is an ${profile.role} based in ${profile.location}. ${profile.headline}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pt-32 pb-20 md:pt-40">
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
              <Link to="/projects" className={btnPrimary}>View My Work <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className={btnGhost}>Contact Me</Link>
              <a href={profile.resumeUrl} download="Rohani-Kumari-Resume.pdf" className={btnGhost}><Download className="h-4 w-4" /> Download CV</a>
            </div>
            <Socials className="reveal mt-8" />
          </div>
          <div className="reveal relative mx-auto w-full max-w-md">
            <div aria-hidden className="absolute inset-6 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
            <img src={profile.photoUrl} alt={`${profile.name} — ${profile.role}`} width={1240} height={1240} fetchPriority="high"
              className="animate-float relative aspect-square w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
