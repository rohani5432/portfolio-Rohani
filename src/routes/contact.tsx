import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { PageShell, Section, btnPrimary } from "@/components/portfolio";

const title = `Contact — ${profile.name}`;
const desc = `Get in touch with ${profile.name} by email, LinkedIn or GitHub.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const input = "w-full rounded-xl border bg-input/20 px-4 py-3 outline-none transition placeholder:text-muted-foreground focus:border-primary";

function ContactPage() {
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
  return (
    <PageShell>
      <Section eyebrow="Contact" title="Let's build something together">
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
    </PageShell>
  );
}
