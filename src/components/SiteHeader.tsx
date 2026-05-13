import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile" },
  { to: "/expertise", label: "Expertise" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-[color:var(--navy-deep)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-exec flex h-20 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-wide text-foreground">
            Vicks<span className="text-[color:var(--gold)]">.</span>
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.4em] text-muted-foreground group-hover:text-[color:var(--gold)] transition-colors">
            Vickneswaran
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-[color:var(--gold)] transition-colors"
              activeProps={{ className: "text-[color:var(--gold)]" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 border border-[color:var(--gold)]/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy-deep)] transition-all"
        >
          Engage
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-[color:var(--navy-deep)]/95 backdrop-blur">
          <nav className="container-exec flex flex-col py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-[color:var(--gold)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
