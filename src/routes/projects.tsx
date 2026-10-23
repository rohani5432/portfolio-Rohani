import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";
import { profile, projects } from "@/data/profile";
import { PageShell, Section, ProjectLink } from "@/components/portfolio";

const title = `Projects — ${profile.name}`;
const desc = `Software projects by ${profile.name}: TestPilot AI QA Suite, Claim Policy Check and EventSphere, with source code on GitHub.`;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <Section eyebrow="Projects" title="Selected work">
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
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm text-gradient font-medium">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs">{t}</span>)}
                </div>
                <div className="mt-6 flex gap-3">
                  {p.demo && <ProjectLink href={p.demo} label="Live Demo" icon={<ExternalLink className="h-4 w-4" />} />}
                  <ProjectLink href={p.repo} label="View on GitHub" icon={<Github className="h-4 w-4" />} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
