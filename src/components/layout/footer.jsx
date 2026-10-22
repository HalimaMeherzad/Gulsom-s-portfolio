import { Link } from "react-router-dom";
import { ArrowUpRight, Dribbble, Instagram, Linkedin, Mail } from "lucide-react";
import { LeafAccent } from "@/components/ui/decorations";
import { navItems, site } from "@/data/site";

const socialIcons = {
  Behance: ArrowUpRight,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Dribbble: Dribbble,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <LeafAccent className="absolute -right-6 top-6 h-32 rotate-12 text-teal/40" aria-hidden />
      <div className="container relative py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold">
              GULSOM<span className="text-coral">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              {site.role}. Turning ideas into bold visual stories — branding, posters,
              packaging and editorial design.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sunny transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/50">Menu</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-cream/80 transition-colors hover:text-sunny"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/50">Follow</p>
            <ul className="mt-4 space-y-2.5">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label] ?? ArrowUpRight;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-sunny"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* <p className="mt-6 text-xs leading-relaxed text-cream/40">
              Social links point to platform homepages — replace with real profiles in
              <code className="mx-1 rounded bg-cream/10 px-1">src/data/site.js</code>.
            </p> */}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed & built with care — cream, coral & a lot of coffee.</p>
        </div>
      </div>
    </footer>
  );
}
