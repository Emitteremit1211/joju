
import { Link } from "react-router-dom";
import { ArrowUpRight, Flame } from "lucide-react";

/*
  JOJU VENTURES — MIDNIGHT BLUE LIQUID GLASS FOOTER

  Midnight Blue: #030B18
  Deep Navy:     #020713
  Blue:          #10233D
  Tan:           #BD9B88
  Sand:          #E6CDBD
  Cream:         #F4ECE6
*/

const links = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/who-we-are" },
  { name: "What We Are", path: "/what-we-are" },
  { name: "Contact", path: "/contact" },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap');

.jj-footer {
  font-family: 'Manrope', system-ui, sans-serif;
}

.jj-footer .jj-serif {
  font-family: 'Cormorant Garamond', Georgia, serif;
  letter-spacing: -0.015em;
}

.jj-footer .jj-liquid {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,.12) 0%,
    rgba(16,35,61,.42) 45%,
    rgba(189,155,136,.08) 100%
  );
  border: 1px solid rgba(255,255,255,.14);
  -webkit-backdrop-filter: blur(24px) saturate(170%);
  backdrop-filter: blur(24px) saturate(170%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.25),
    inset 0 -1px 0 rgba(255,255,255,.04),
    inset 0 0 40px rgba(189,155,136,.06),
    0 30px 80px -30px rgba(0,0,0,.7);
}

.jj-footer .jj-liquid::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(255,255,255,.10) 48%,
    transparent 66%
  );
  background-size: 250% 100%;
  background-position: 120% 0;
  animation: jjFootSheen 9s ease-in-out infinite;
}

@keyframes jjFootSheen {
  0%, 55% { background-position: 120% 0; }
  100% { background-position: -80% 0; }
}

@keyframes jjFootFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

.jj-footer .jj-float {
  animation: jjFootFloat 8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .jj-footer .jj-liquid::before,
  .jj-footer .jj-float {
    animation: none;
  }
}
`;

function Footer() {
  return (
    <footer className="jj-footer relative overflow-hidden bg-gradient-to-b from-[#030B18] via-[#061326] to-[#020713] px-3 pb-6 pt-20 text-[#F4ECE6] sm:px-6 sm:pt-28">
      <style>{styles}</style>

      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BD9B88]/60 to-transparent" />

      {/* Ambient glows */}
      <div className="jj-float pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#BD9B88]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-[#173A59]/45 blur-[120px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 h-72 w-72 bg-gradient-to-br from-[#BD9B88]/20 to-transparent"
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 82%)" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 bottom-0 h-80 w-96 bg-gradient-to-tr from-[#BD9B88]/15 to-transparent"
        style={{ clipPath: "polygon(0 0, 70% 100%, 0 100%)" }}
      />

      {/* Giant outlined watermark */}
      <div
        aria-hidden="true"
        className="jj-serif pointer-events-none absolute inset-x-0 bottom-8 select-none text-center text-[22vw] font-semibold italic leading-none text-transparent sm:bottom-2 sm:text-[17vw]"
        style={{ WebkitTextStroke: "1px rgba(189,155,136,0.16)" }}
      >
        JOJU
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Main glass panel */}
        <div className="jj-liquid rounded-[28px] p-6 sm:rounded-[40px] sm:p-12">

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.3fr_.7fr_1fr] lg:gap-16">

            {/* Brand */}
            <div>
              <Link to="/" className="inline-block">
                <img
                  src="/joju-logo.png"
                  alt="Joju Ventures"
                  className="h-14 w-auto object-contain sm:h-16"
                />
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-8 text-[#F4ECE6]/70">
                Reliable energy solutions, built around safety, quality and
                dependable service.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#BD9B88]/30 bg-[#BD9B88]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#BD9B88]">
                <Flame size={14} />
                Your Essentials
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD9B88]">
                Explore
              </h4>

              <ul className="mt-6 space-y-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex w-fit items-center gap-2 py-2 text-base font-medium text-[#F4ECE6]/75 transition-all duration-300 hover:translate-x-1 hover:text-[#F4ECE6]"
                    >
                      <span className="h-px w-0 bg-[#BD9B88] transition-all duration-300 group-hover:w-5" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD9B88]">
                Let's Connect
              </h4>

              <div className="mt-6 rounded-3xl border border-white/10 bg-[#030B18]/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]">
                <p className="jj-serif text-3xl font-semibold leading-tight">
                  Have a question or need our services?
                </p>

                <Link
                  to="/contact"
                  className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-[#E6CDBD] via-[#BD9B88] to-[#9C7C69] px-6 py-3 text-sm font-bold text-[#030B18] shadow-[0_10px_30px_-10px_rgba(189,155,136,.8),inset_0_1px_0_rgba(255,255,255,.55)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">
                    Get in touch
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="jj-liquid mt-4 flex flex-col items-center justify-between gap-2 rounded-full px-6 py-4 text-center text-xs text-[#F4ECE6]/65 sm:flex-row sm:px-8 sm:text-left">
          <span className="relative z-10">
            © {new Date().getFullYear()} Joju Ventures.
          </span>

          <span className="relative z-10 font-semibold uppercase tracking-[0.2em] text-[#BD9B88]">
            Reliable energy. Trusted service.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
