import { createFileRoute } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { profile, skills } from "@/data/profile";
import { PageShell, Section } from "@/components/portfolio";

const title = `Skills — ${profile.name}`;
const desc = `Technical skills of ${profile.name}: Python, QA testing, PHP, Laravel, JavaScript, MySQL and more.`;

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <PageShell>
      <Section eyebrow="Skills" title="Tools I work with">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="reveal glass card-hover rounded-2xl p-6">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand"><Code2 className="h-5 w-5 text-primary-foreground" /></div>
              <h2 className="font-semibold">{s.group}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => <span key={i} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
