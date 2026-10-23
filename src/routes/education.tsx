import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { profile, education, certifications, experience } from "@/data/profile";
import { PageShell, Section, Timeline } from "@/components/portfolio";

const title = `Education — ${profile.name}`;
const desc = `Education and certifications of ${profile.name}: MCA at Uttaranchal University, BCA at BIT Mesra, plus JPMorgan and Deloitte job simulations.`;

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/education" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageShell>
      <Section eyebrow="Education" title="Education & certifications">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><h2 className="reveal mb-6 text-xl font-semibold">Education</h2><Timeline items={education} Icon={GraduationCap} /></div>
          <div><h2 className="reveal mb-6 text-xl font-semibold">Certifications</h2><Timeline items={certifications} Icon={Award} /></div>
        </div>
        <div className="mt-16">
          <h2 className="reveal mb-6 text-xl font-semibold">Experience</h2>
          <Timeline items={experience} Icon={Briefcase} />
        </div>
      </Section>
    </PageShell>
  );
}
