import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { PageShell, Section, btnPrimary } from "@/components/portfolio";

const title = `Resume — ${profile.name}`;
const desc = `View and download the CV of ${profile.name}, ${profile.role}.`;

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <PageShell>
      <Section eyebrow="Resume" title="My CV">
        <div className="reveal glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-muted-foreground">View my resume below, or download a copy.</p>
            <a href={profile.resumeUrl} download="Rohani-Kumari-Resume.pdf" className={btnPrimary}>
              <Download className="h-4 w-4" /> Download My CV
            </a>
          </div>
          <iframe
            src={profile.resumeUrl}
            title={`${profile.name} — CV`}
            className="mt-6 h-[70vh] w-full rounded-xl border bg-secondary"
          />
        </div>
      </Section>
    </PageShell>
  );
}
