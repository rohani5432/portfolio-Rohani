import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { PageShell, Section, AboutSidebar } from "@/components/portfolio";

const title = `About — ${profile.name}`;
const desc = `About ${profile.name}, ${profile.role}: background, interests and career goal in software engineering and QA.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <Section eyebrow="About me" title="Developer who enjoys the whole stack">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="reveal glass rounded-2xl p-8 md:col-span-2">
            {profile.about.map((p) => <p key={p} className="mb-4 text-lg leading-relaxed text-muted-foreground last:mb-0">{p}</p>)}
            <h2 className="mt-8 text-lg font-semibold">Career goal</h2>
            <p className="mt-2 text-muted-foreground">{profile.goal}</p>
          </div>
          <AboutSidebar />
        </div>
      </Section>
    </PageShell>
  );
}
