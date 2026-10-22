import React from "react";
import { ArrowRight, CheckCircle2, Dribbble, Instagram, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/field";
import { Blob, LeafAccent } from "@/components/ui/decorations";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const socialIcons = {
  Behance: ArrowRight,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Dribbble: Dribbble,
};

const projectTypes = [
  "Brand Identity",
  "Logo Design",
  "Social Media Design",
  "Packaging Design",
  "Poster Design",
  "Editorial Design",
  "Something else",
];

const budgets = ["Not sure yet", "< $500", "$500 – $1,000", "$1,000 – $3,000", "$3,000+"];

const initialState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell me your name.";
  else if (values.name.trim().length < 2) errors.name = "That name looks a little short.";
  if (!values.email.trim()) errors.email = "An email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "That email doesn't look right.";
  if (!values.projectType) errors.projectType = "Pick the kind of project.";
  if (!values.message.trim()) errors.message = "Tell me a bit about the idea.";
  else if (values.message.trim().length < 20)
    errors.message = "A few more words would help (min 20 characters).";
  return errors;
}

export default function Contact() {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | submitting | sent

  const setField = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };

  const blurField = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, projectType: true, budget: true, message: true });
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    /*
     * DEMO SUBMISSION — there is no backend in this project, so nothing is
     * emailed. To enable real delivery, connect this handler to a form
     * endpoint (e.g. Formspree, Basin) or your own API route.
     */
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 1200);
  };

  const errorId = (field) => `${field}-error`;

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* <Blob className="pointer-events-none absolute -right-20 top-16 h-64 w-64 text-teal/25" aria-hidden /> */}
      {/* <LeafAccent className="pointer-events-none absolute right-10 top-40 hidden h-28 rotate-12 text-sunny md:block" aria-hidden /> */}

      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="text-coral">LET'S </span>
            CONNECT
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
            Let&apos;s Create Something{" "}
            <span className="text-coral">Meaningful.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Have a project in mind or just want to say hi? I&apos;d love to hear from
            you — tell me about the idea and where you&apos;d like it to go.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-3xl bg-white/70 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral text-cream">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">Email</span>
                <span className="font-semibold">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-3xl bg-white/70 p-5 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-cream">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">Location</span>
                <span className="font-semibold">{site.location}</span>
              </span>
            </div>
          </div>

          <div className="mt-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/45">Follow me</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label] ?? ArrowRight;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white/60 px-4 py-2 text-sm font-semibold transition-all hover:border-coral hover:text-coral-deep"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* <p className="mt-3 text-xs text-ink/45">
              Social links currently point to platform homepages — update them in{" "}
              <code className="rounded bg-ink/5 px-1 py-0.5">src/data/site.js</code>.
            </p> */}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="contact-form" className="relative scroll-mt-28 rounded-5xl bg-white/80 p-7 shadow-lift backdrop-blur md:p-10">
            {status === "sent" ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-16 w-16 text-teal" aria-hidden />
                <h2 className="mt-6 font-display text-3xl font-extrabold">Message ready!</h2>
                <p className="mt-3 max-w-sm text-ink-soft">
                  Thanks, {values.name.split(" ")[0] || "friend"} — your inquiry is
                  composed. This portfolio has no email backend yet, so the message was
                  <strong className="text-ink"> not actually sent</strong>. Reach me
                  directly at{" "}
                  <a href={`mailto:${site.email}`} className="font-bold text-coral-deep underline underline-offset-4">
                    {site.email}
                  </a>{" "}
                  or connect the form to a service like Formspree.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => {
                    setValues(initialState);
                    setErrors({});
                    setTouched({});
                    setStatus("idle");
                  }}
                >
                  Write another message
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" error={touched.name ? errors.name : undefined} htmlFor="name">
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Aria Rahimi"
                      value={values.name}
                      onChange={setField("name")}
                      onBlur={blurField("name")}
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={touched.name && errors.name ? errorId("name") : undefined}
                    />
                  </Field>
                  <Field label="Your Email" error={touched.email ? errors.email : undefined} htmlFor="email">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@studio.com"
                      value={values.email}
                      onChange={setField("email")}
                      onBlur={blurField("email")}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={touched.email && errors.email ? errorId("email") : undefined}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Project Type" error={touched.projectType ? errors.projectType : undefined} htmlFor="projectType">
                    <Select
                      id="projectType"
                      name="projectType"
                      value={values.projectType}
                      onChange={setField("projectType")}
                      onBlur={blurField("projectType")}
                      aria-invalid={Boolean(touched.projectType && errors.projectType)}
                      aria-describedby={touched.projectType && errors.projectType ? errorId("projectType") : undefined}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Budget (optional)" htmlFor="budget">
                    <Select
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={setField("budget")}
                    >
                      <option value="">Prefer not to say</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>

                <Field label="Project Details" error={touched.message ? errors.message : undefined} htmlFor="message">
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your brand, your audience and the feeling you're after…"
                    value={values.message}
                    onChange={setField("message")}
                    onBlur={blurField("message")}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={touched.message && errors.message ? errorId("message") : undefined}
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                {/* <p className="text-center text-xs text-ink/45" role="note">
                  Demo form — messages are validated but not delivered. Wire it to a
                  backend or Formspree to go live.
                </p> */}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      <p
        id={`${htmlFor}-error`}
        className={cn(
          "mt-1.5 text-xs font-semibold text-coral-deep",
          !error && "hidden",
        )}
        aria-live="polite"
      >
        {error}
      </p>
    </div>
  );
}
