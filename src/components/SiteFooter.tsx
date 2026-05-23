import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-[color:var(--navy-deep)]/60">
      <div className="container-exec py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">
            Vicks<span className="text-[color:var(--gold)]">.</span> Vickneswaran
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Board-level transformation specialist. Restructuring, governance, and
            enterprise value creation across global markets.
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            Navigate
          </div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/profile" className="hover:text-foreground">Executive Profile</Link></li>
            <li><Link to="/expertise" className="hover:text-foreground">Core Expertise</Link></li>
            <li><Link to="/career" className="hover:text-foreground">Career Highlights</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            Connect
          </div>
          <div className="mt-5 space-y-3 text-sm text-muted-foreground">
            <a href="mailto:srvickneswaran@gmail.com" className="flex items-center gap-3 hover:text-foreground py-[2px] rounded-none">
              <Mail size={14} />srvickneswaran@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/vicks-vickneswaran-8775621a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground py-[2px] rounded-none">
              <Linkedin size={14} /> LinkedIn Profile
            </a>
            <div className="text-xs uppercase tracking-[0.25em] pt-2">Dubai · UAE</div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-exec py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Vicks Vickneswaran. All rights reserved.</div>
          <div className="uppercase tracking-[0.3em]">Board · Advisory · Transformation</div>
        </div>
      </div>
    </footer>
  );
}
