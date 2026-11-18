import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

/*
  JOJU VENTURES — LIQUID GLASS NAVBAR
  Green  #102B22  |  Tan (logo)  #BD9B88  |  Cream  #F4ECE6
*/

const links = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/who-we-are" },
  { name: "What We Are", path: "/what-we-are" },
  { name: "Contact", path: "/contact" },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

.jj-nav { font-family: 'Manrope', system-ui, sans-serif; }

/* liquid glass surface */
.jj-liquid {
  position: relative;
  background:
    linear-gradient(135deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.04) 45%, rgba(189,155,136,.10) 100%);
  border: 1px solid rgba(255,255,255,.16);
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  backdrop-filter: blur(22px) saturate(180%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.35),
    inset 0 -1px 0 rgba(255,255,255,.05),
    inset 0 0 24px rgba(189,155,136,.08),
    0 18px 50px -16px rgba(0,0,0,.55);
  transition: background .4s ease, box-shadow .4s ease, border-color .4s ease;
}
.jj-liquid.is-scrolled {
  background:
    linear-gradient(135deg, rgba(255,255,255,.20) 0%, rgba(255,255,255,.06) 45%, rgba(189,155,136,.14) 100%),
    rgba(10,31,24,.45);
  border-color: rgba(189,155,136,.30);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.42),
    inset 0 -1px 0 rgba(255,255,255,.06),
    inset 0 0 30px rgba(189,155,136,.10),
    0 24px 70px -18px rgba(0,0,0,.7);
}
/* specular sheen that sweeps across */
.jj-liquid::before {
  content: "";
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.14) 48%, transparent 66%);
  background-size: 250% 100%;
  background-position: 120% 0;
  animation: jjSheen 7s ease-in-out infinite;
}
@keyframes jjSheen {
  0%, 55% { background-position: 120% 0; }
  100% { background-position: -80% 0; }
}

.jj-link-active {
  background: linear-gradient(135deg, rgba(189,155,136,.38), rgba(189,155,136,.14));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.4), 0 6px 20px -8px rgba(189,155,136,.6);
  border: 1px solid rgba(189,155,136,.45);
  color: #F4ECE6;
}

@keyframes jjMenuIn {
  from { opacity: 0; transform: translateY(-12px) scale(.97); }
  to   { opacity: 1; transform: none; }
}
.jj-menu-in { animation: jjMenuIn .28s cubic-bezier(.2,.7,.2,1) both; }

@media (prefers-reduced-motion: reduce) {
  .jj-liquid::before, .jj-menu-in { animation: none; }
}
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  /* shrink / tint on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="jj-nav fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <style>{styles}</style>

      <div
        className={`jj-liquid mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[28px] px-4 transition-all duration-500 sm:rounded-full sm:px-6 ${
          scrolled ? "is-scrolled py-2" : "py-3"
        }`}
      >
        {/* brand */}
        <Link to="/" className="relative z-10 flex shrink-0 items-center">
          <img
            src="/joju-logo2.png"
            alt="Joju Ventures"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
            }`}
          />
        </Link>

        {/* desktop links */}
        <nav className="relative z-10 hidden items-center gap-1 rounded-full border border-white/10 bg-black/15 p-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `rounded-full border border-transparent px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "jj-link-active"
                    : "text-[#F4ECE6]/70 hover:bg-white/10 hover:text-[#F4ECE6]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* desktop CTA */}
        <Link
          to="/contact"
          className="group relative z-10 hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-[#E6CDBD] via-[#BD9B88] to-[#9C7C69] px-6 py-2.5 text-sm font-bold text-[#102B22] shadow-[0_10px_30px_-10px_rgba(189,155,136,.8),inset_0_1px_0_rgba(255,255,255,.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(189,155,136,.95),inset_0_1px_0_rgba(255,255,255,.6)] md:inline-flex"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">Get in touch</span>
          <ArrowUpRight
            size={17}
            className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-[#F4ECE6] shadow-[inset_0_1px_0_rgba(255,255,255,.3)] transition hover:bg-white/20 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <nav className="jj-liquid jj-menu-in is-scrolled mx-auto mt-3 max-w-6xl rounded-[28px] p-3 md:hidden">
          <div className="relative z-10 flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl border border-transparent px-5 py-3.5 text-base font-semibold transition ${
                    isActive
                      ? "jj-link-active"
                      : "text-[#F4ECE6]/80 hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#E6CDBD] via-[#BD9B88] to-[#9C7C69] px-5 py-3.5 text-base font-bold text-[#102B22] shadow-[inset_0_1px_0_rgba(255,255,255,.55)]"
            >
              Get in touch <ArrowUpRight size={18} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;