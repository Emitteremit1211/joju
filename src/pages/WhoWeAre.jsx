
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Eye,
  Flame,
  HeartHandshake,
  Home as HomeIcon,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Truck,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
  DESIGN TOKENS — JOJU VENTURES
  midnight #030B18 · abyss #020713 · blue #10233D
  deep blue #0D1D35 · navy #061326 · accent #173A59
  tan #BD9B88 · sand #E6CDBD · cream #F4ECE6
  Fonts: Cormorant Garamond (display) + Manrope (body)
*/

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We understand the importance of dependable gas supply and strive to deliver service our customers can count on.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Safety",
    description:
      "We believe safety should remain central to every aspect of gas supply and customer service.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Customer Commitment",
    description:
      "We put our customers first by focusing on their needs and building lasting business relationships.",
  },
  {
    number: "04",
    icon: Target,
    title: "Excellence",
    description:
      "We aim to maintain high standards in our operations, service delivery and business relationships.",
  },
];

const glance = [
  { word: "Gas supply", text: "Dependable solutions for everyday and business needs." },
  { word: "Distribution", text: "Making gas access convenient and reliable." },
  { word: "Support", text: "A service-first approach, from the first conversation." },
];

const beliefs = [
  "Dependable energy is essential to everyday life",
  "Safety belongs at the centre of gas supply",
  "Customers deserve a service-first approach",
  "Lasting relationships are built on consistent quality",
];

const approach = [
  {
    n: "I",
    icon: Phone,
    title: "We listen",
    text: "Every relationship starts with understanding what you need, whether for a home, a kitchen or a business.",
  },
  {
    n: "II",
    icon: Truck,
    title: "We supply",
    text: "We focus on making gas access convenient, reliable and safe for the people and businesses we serve.",
  },
  {
    n: "III",
    icon: HeartHandshake,
    title: "We support",
    text: "Our team stays focused on your satisfaction, with service that does not end once supply is arranged.",
  },
  {
    n: "IV",
    icon: BadgeCheck,
    title: "We keep our standards high",
    text: "We aim to maintain high standards in our operations, service delivery and business relationships.",
  },
];

const serve = [
  {
    icon: HomeIcon,
    title: "Households",
    text: "Dependable gas for the everyday needs of your home.",
  },
  {
    icon: Store,
    title: "Restaurants & eateries",
    text: "Reliable supply to keep your kitchen running, service after service.",
  },
  {
    icon: Building2,
    title: "Businesses",
    text: "Gas solutions that support your operations without the stress.",
  },
  {
    icon: Users,
    title: "Communities",
    text: "Service built around the people and neighbourhoods we serve.",
  },
];

const expect = [
  "Dependable gas solutions for homes and businesses",
  "A strong emphasis on safety and quality",
  "A team that puts your needs at the centre",
  "Clear, friendly communication from the first conversation",
];

const faqs = [
  {
    question: "What kind of business is Joju Ventures?",
    answer:
      "Joju Ventures is a gas business focused on serving the energy needs of individuals, households and businesses, including gas supply, gas distribution and customer support.",
  },
  {
    question: "What guides the way you work?",
    answer:
      "Reliability, safety, customer commitment and excellence. These four values shape how we serve our customers and build relationships.",
  },
  {
    question: "Who can you support?",
    answer:
      "We are focused on supporting both homes and businesses, including households, restaurants and eateries, and the communities we serve.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Head to our contact page and send us a message. Our team will get back to you about your energy needs.",
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap');

.joju { font-family: 'Manrope', system-ui, sans-serif; -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; }
.joju .serif { font-family: 'Cormorant Garamond', Georgia, serif; letter-spacing: -0.01em; }
.joju .wrap { max-width: 1140px; margin: 0 auto; padding: 0 20px; }
@media (min-width: 640px) { .joju .wrap { padding: 0 28px; } }
.joju .pad { padding: 104px 0; }
@media (max-width: 1023px) { .joju .pad { padding: 80px 0; } }
@media (max-width: 640px) { .joju .pad { padding: 60px 0; } }
.joju img { max-width: 100%; }
.joju section[id] { scroll-margin-top: 72px; }

/* ---------- midnight blue backgrounds ---------- */
.joju .night {
  background:
    radial-gradient(900px 520px at 80% 20%, rgba(189,155,136,.16), transparent 62%),
    radial-gradient(700px 420px at 0% 100%, rgba(31,91,150,.38), transparent 60%),
    linear-gradient(180deg, #020713 0%, #030B18 100%);
}
.joju .night-2 {
  background:
    radial-gradient(800px 460px at 15% 10%, rgba(189,155,136,.11), transparent 60%),
    linear-gradient(180deg, #030B18 0%, #020713 100%);
}
.joju .frozen {
  background:
    radial-gradient(700px 420px at 90% 0%, rgba(189,155,136,.13), transparent 60%),
    radial-gradient(600px 400px at 0% 100%, rgba(31,91,150,.32), transparent 60%),
    linear-gradient(180deg, #0D1D35 0%, #061326 100%);
}
.joju .frozen-2 {
  background:
    radial-gradient(700px 420px at 5% 10%, rgba(189,155,136,.11), transparent 60%),
    radial-gradient(600px 400px at 100% 100%, rgba(31,91,150,.30), transparent 60%),
    linear-gradient(180deg, #061326 0%, #030B18 100%);
}

/* ---------- text ---------- */
.joju .tan-text {
  background: linear-gradient(110deg, #F4ECE6 0%, #E6CDBD 42%, #BD9B88 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.joju .eyebrow {
  display: inline-flex; align-items: center; gap: 14px;
  font-size: 11px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase;
  color: #BD9B88;
}
.joju .eyebrow::before { content: ""; width: 32px; height: 1px; background: linear-gradient(90deg, transparent, #BD9B88); }
.joju .lede { font-size: 15px; line-height: 1.85; color: rgba(244,236,230,.66); font-weight: 400; }
@media (min-width: 640px) { .joju .lede { font-size: 16px; } }

/* ---------- liquid glass ---------- */
.joju .glass, .joju .glass-strong, .joju .glass-light, .joju .glass-dark {
  --mx: 50%; --my: 0%;
  border: 1px solid rgba(255,255,255,.07);
  isolation: isolate;
}
.joju .glass:not(.absolute):not(.fixed),
.joju .glass-strong:not(.absolute):not(.fixed),
.joju .glass-light:not(.absolute):not(.fixed),
.joju .glass-dark:not(.absolute):not(.fixed) { position: relative; }

.joju .glass {
  background: linear-gradient(135deg, rgba(255,255,255,.11) 0%, rgba(255,255,255,.025) 42%, rgba(255,255,255,.05) 100%);
  -webkit-backdrop-filter: blur(22px) saturate(170%) brightness(1.06);
  backdrop-filter: blur(22px) saturate(170%) brightness(1.06);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.24), inset 0 -1px 0 rgba(255,255,255,.04), inset 0 0 22px rgba(255,255,255,.025), 0 22px 48px -28px rgba(0,0,0,.75);
}
.joju .glass-strong {
  background: linear-gradient(135deg, rgba(255,255,255,.15) 0%, rgba(255,255,255,.035) 40%, rgba(255,255,255,.07) 100%);
  -webkit-backdrop-filter: blur(34px) saturate(180%) brightness(1.08);
  backdrop-filter: blur(34px) saturate(180%) brightness(1.08);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.32), inset 0 -1px 0 rgba(255,255,255,.05), inset 0 0 40px rgba(255,255,255,.03), 0 50px 100px -35px rgba(0,0,0,.8), 0 0 90px -30px rgba(189,155,136,.28);
}
.joju .glass-light {
  background: linear-gradient(135deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,.025) 45%, rgba(255,255,255,.05) 100%);
  -webkit-backdrop-filter: blur(24px) saturate(165%) brightness(1.05);
  backdrop-filter: blur(24px) saturate(165%) brightness(1.05);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.22), inset 0 0 28px rgba(255,255,255,.025), 0 30px 60px -35px rgba(0,0,0,.65);
}
.joju .glass-dark {
  background: linear-gradient(145deg, rgba(8,24,45,.82), rgba(3,11,24,.78));
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  backdrop-filter: blur(28px) saturate(160%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.13), inset 0 0 30px rgba(255,255,255,.02), 0 30px 60px -35px rgba(0,0,0,.75);
}
.joju .glass::before, .joju .glass-strong::before, .joju .glass-light::before, .joju .glass-dark::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px; pointer-events: none;
  background: linear-gradient(135deg, rgba(244,236,230,.55) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 68%, rgba(189,155,136,.55) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  z-index: 2;
}
.joju .glass::after, .joju .glass-strong::after, .joju .glass-light::after, .joju .glass-dark::after {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: radial-gradient(420px circle at var(--mx) var(--my), rgba(230,205,189,.12), transparent 55%);
  opacity: 0; transition: opacity .35s ease; z-index: 1;
}
@media (hover: hover) {
  .joju .glass:hover::after, .joju .glass-strong:hover::after,
  .joju .glass-light:hover::after, .joju .glass-dark:hover::after { opacity: 1; }
}

/* ---------- ambient glow orbs ---------- */
.joju .orb { position: absolute; border-radius: 9999px; pointer-events: none; filter: blur(70px); will-change: transform; animation: jjDrift 18s ease-in-out infinite; }
.joju .orb-a { background: radial-gradient(circle at 30% 30%, rgba(189,155,136,.5), rgba(189,155,136,0) 70%); }
.joju .orb-b { background: radial-gradient(circle at 60% 40%, rgba(39,112,180,.55), rgba(31,91,150,0) 70%); }
.joju .orb-c { background: radial-gradient(circle at 50% 50%, rgba(230,205,189,.32), rgba(230,205,189,0) 70%); }
@keyframes jjDrift {
  0%,100% { transform: translate3d(0,0,0) scale(1); }
  33% { transform: translate3d(30px,-24px,0) scale(1.08); }
  66% { transform: translate3d(-24px,20px,0) scale(.95); }
}
@media (max-width: 640px) { .joju .orb { filter: blur(50px); opacity: .8; } }

/* ---------- tan card ---------- */
.joju .tan-card {
  background:
    radial-gradient(120% 90% at 85% 0%, rgba(255,255,255,.35), transparent 55%),
    linear-gradient(140deg, #D6B8A6 0%, #BD9B88 55%, #8C6B58 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.5), inset 0 -24px 48px rgba(90,60,45,.18), 0 40px 90px -40px rgba(189,155,136,.5);
}
.joju .brass-line { background: linear-gradient(90deg, transparent, rgba(189,155,136,.6), transparent); height: 1px; }
.joju .lift { transition: transform .45s cubic-bezier(.2,.7,.2,1); }
@media (hover: hover) { .joju .lift:hover { transform: translateY(-6px); } }

/* values: glass that melts to tan on hover */
.joju .val { transition: transform .5s cubic-bezier(.2,.7,.2,1), background .5s ease, border-color .5s ease, box-shadow .5s ease; }
@media (hover: hover) {
  .joju .val:hover {
    transform: translateY(-8px);
    background: linear-gradient(140deg, rgba(230,205,189,.96), rgba(189,155,136,.94) 60%, rgba(156,122,102,.94));
    border-color: rgba(230,205,189,.8);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.55), 0 30px 80px -24px rgba(189,155,136,.6);
  }
}

/* ---------- motion ---------- */
@keyframes jjRise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
.joju .rise { opacity: 0; animation: jjRise .9s cubic-bezier(.2,.7,.2,1) forwards; }
.joju .rise-2 { animation-delay: .12s; }
.joju .rise-3 { animation-delay: .24s; }
@keyframes jjFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.joju .float { animation: jjFloat 7s ease-in-out infinite; }
@keyframes jjFlicker {
  0%,100% { transform: scale(1) rotate(-1deg); filter: drop-shadow(0 0 28px rgba(189,155,136,.55)); }
  25% { transform: scale(1.05) rotate(1deg); filter: drop-shadow(0 0 46px rgba(189,155,136,.8)); }
  50% { transform: scale(.98) rotate(-.5deg); filter: drop-shadow(0 0 34px rgba(189,155,136,.6)); }
  75% { transform: scale(1.04) rotate(1.2deg); filter: drop-shadow(0 0 52px rgba(189,155,136,.85)); }
}
.joju .flicker { animation: jjFlicker 3.2s ease-in-out infinite; }
@keyframes jjSpin { to { transform: rotate(360deg); } }
@keyframes jjSpinRev { to { transform: rotate(-360deg); } }
.joju .spin { animation: jjSpin 40s linear infinite; }
.joju .spin-rev { animation: jjSpinRev 60s linear infinite; }
@keyframes jjPulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.15); } }
.joju .pulse { animation: jjPulse 2.6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .joju .rise, .joju .float, .joju .flicker, .joju .spin, .joju .spin-rev, .joju .pulse, .joju .orb { animation: none; opacity: 1; }
}

/* ---------- scroll reveal ---------- */
.joju [data-reveal] {
  opacity: 0; transform: translate3d(0, 24px, 0);
  transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--reveal-delay, 0ms);
}
.joju [data-reveal="right"] { transform: translate3d(22px, 0, 0); }
.joju [data-reveal="left"] { transform: translate3d(-22px, 0, 0); }
.joju [data-reveal].is-visible { opacity: 1; transform: translate3d(0, 0, 0); }
@media (max-width: 640px) {
  .joju [data-reveal="left"], .joju [data-reveal="right"] { transform: translate3d(0, 24px, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .joju [data-reveal] { opacity: 1; transform: none; transition: none; }
}

/* ---------- back to top ---------- */
.joju .totop {
  position: fixed;
  right: calc(16px + env(safe-area-inset-right, 0px));
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  z-index: 9999;
  opacity: 0;
  transform: translateY(16px) scale(.9);
  pointer-events: none;
  transition: opacity .3s ease, transform .3s cubic-bezier(.2,.7,.2,1);
}
.joju .totop.show { opacity: 1; transform: none; pointer-events: auto; }
@media (min-width: 640px) {
  .joju .totop { right: calc(32px + env(safe-area-inset-right, 0px)); bottom: calc(32px + env(safe-area-inset-bottom, 0px)); }
}
.joju a:focus-visible, .joju button:focus-visible { outline: 2px solid #BD9B88; outline-offset: 3px; }
`;

function Heading({ children, size = "lg", className = "" }) {
  const sizes = {
    lg: "text-[32px] sm:text-[44px] lg:text-[54px]",
    xl: "text-[38px] sm:text-[54px] lg:text-[68px]",
  };
  return (
    <h2 className={`serif font-medium leading-[1.06] ${sizes[size]} ${className}`}>
      {children}
    </h2>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow mb-5 sm:mb-6">{children}</p>;
}

function Orbs({ variant = "a" }) {
  const sets = {
    a: [
      { cls: "orb-a", style: { left: "-8%", top: "4%", width: 420, height: 420 } },
      { cls: "orb-b", style: { right: "-6%", bottom: "2%", width: 500, height: 500, animationDelay: "-6s" } },
      { cls: "orb-c", style: { right: "28%", top: "-8%", width: 260, height: 260, animationDelay: "-11s" } },
    ],
    b: [
      { cls: "orb-b", style: { right: "-6%", top: "-4%", width: 460, height: 460, animationDelay: "-3s" } },
      { cls: "orb-a", style: { left: "-8%", bottom: "-6%", width: 380, height: 380, animationDelay: "-9s" } },
    ],
  };
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {sets[variant].map((o, i) => (
        <div key={i} className={`orb ${o.cls}`} style={o.style} />
      ))}
    </div>
  );
}

function IconTile({ children, className = "" }) {
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,.2)] ${className}`}>
      {children}
    </span>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(y > 400);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const R = 22;
  const C = 2 * Math.PI * R;

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`totop ${show ? "show" : ""} glass group flex h-11 w-11 items-center justify-center rounded-full text-[#F4ECE6] transition hover:bg-[#BD9B88]/50 sm:h-12 sm:w-12`}
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r={R} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="2" />
        <circle cx="26" cy="26" r={R} fill="none" stroke="#BD9B88" strokeWidth="2" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - progress)} />
      </svg>
      <ArrowUp size={18} className="relative transition group-hover:-translate-y-0.5" />
    </button>
  );
}

function WhoWeAre() {
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".joju [data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const card = e.target.closest?.(".glass, .glass-strong, .glass-light, .glass-dark");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="joju min-h-screen overflow-x-clip bg-[#030B18] text-[#F4ECE6]"
    >
      <style>{styles}</style>

      <Navbar />

      <main>
        {/* PAGE HERO */}
        <section id="top" className="night relative flex items-center pb-20 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[760px]">
          <Orbs variant="a" />

          <div className="wrap relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <p className="eyebrow rise mb-6 sm:mb-8">Get to know us</p>

              <h1 className="serif rise rise-2 max-w-3xl text-[40px] font-medium leading-[1.02] sm:text-6xl lg:text-[72px]">
                Built on trust.
                <br />
                <em className="tan-text pr-2 font-normal italic">Driven by purpose.</em>
              </h1>

              <p className="lede rise rise-3 mt-7 max-w-md sm:mt-8">
                Discover Joju Ventures and our commitment to providing
                dependable gas solutions for homes, businesses and the
                communities we serve.
              </p>

              <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-4 sm:mt-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-gradient-to-b from-[#E6CDBD] to-[#BD9B88] px-7 py-3.5 text-sm font-semibold text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_18px_40px_-16px_rgba(189,155,136,.7)] transition hover:brightness-105"
                >
                  Talk to our team
                  <ArrowUpRight size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <div className="glass inline-flex items-center gap-3 rounded-full px-6 py-3 text-[13px] text-[#F4ECE6]/70">
                  <Link to="/" className="transition hover:text-[#E6CDBD]">Home</Link>
                  <span className="text-[#BD9B88]">/</span>
                  <span className="text-[#F4ECE6]">Who We Are</span>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div data-reveal="right" className="relative mx-auto w-full max-w-[520px]">
              <div className="glass-strong relative mx-auto w-[min(88vw,390px)] rounded-[40px] p-3.5 sm:rounded-[48px] sm:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-gradient-to-b from-[#10233D] to-[#020713] sm:rounded-[36px]">
                  <div className="spin absolute left-1/2 top-[42%] h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#BD9B88]/35">
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#BD9B88] shadow-[0_0_20px_#BD9B88]" />
                  </div>
                  <div className="spin-rev absolute left-1/2 top-[42%] h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#BD9B88]/25">
                    <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#E6CDBD]" />
                  </div>
                  <div className="pulse absolute left-1/2 top-[42%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BD9B88]/30 blur-3xl" />

                  <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                    <Flame size={110} strokeWidth={1.2} className="flicker text-[#BD9B88]" fill="rgba(189,155,136,0.18)" />
                  </div>

                  <span className="absolute right-6 top-6 text-[11px] font-medium tracking-[0.25em] text-[#BD9B88]/70">
                    01 — About Joju
                  </span>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020713] via-[#020713]/85 to-transparent p-6 pt-24">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BD9B88]">
                      Joju Ventures
                    </span>
                    <strong className="serif mt-2 block text-[26px] font-medium leading-tight">
                      Our story. Our purpose.
                    </strong>
                  </div>
                </div>
              </div>

              <div className="glass-strong float absolute -left-4 top-[30%] hidden items-center gap-3 rounded-2xl p-4 sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                  <ShieldCheck size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Safety first</p>
                  <p className="text-[11px] text-[#F4ECE6]/60">In everything we do</p>
                </div>
              </div>

              <div className="glass-strong float absolute -right-3 bottom-12 hidden items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-[#E6CDBD] sm:flex">
                <Sparkles size={14} />
                Our story
              </div>
            </div>
          </div>

          <div className="brass-line absolute bottom-0 left-0 right-0 opacity-70" />
        </section>

        {/* AT A GLANCE */}
        <section className="night-2 relative pb-4 pt-14 sm:pt-16">
          <div className="wrap">
            <p className="eyebrow mb-6 flex justify-center text-center">What we do, at a glance</p>

            <div
              data-reveal
              className="glass grid divide-y divide-[#BD9B88]/15 rounded-[24px] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rounded-[30px]"
            >
              {glance.map((g) => (
                <div key={g.word} className="px-6 py-9 text-center lg:px-10 lg:py-10">
                  <p className="serif tan-text text-[32px] font-medium leading-none sm:text-[40px]">{g.word}</p>
                  <p className="mx-auto mt-4 max-w-[240px] text-[13.5px] leading-7 text-[#F4ECE6]/62">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section id="story" className="pad frozen relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div data-reveal className="mb-12 flex items-center justify-between gap-6 sm:mb-14">
              <p className="eyebrow">Our story</p>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#F4ECE6]/35">
                01 / The company
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
              <div data-reveal>
                <Heading>
                  Energy is essential.
                  <br />
                  <em className="tan-text pr-2 font-normal italic">So is trust.</em>
                </Heading>

                <div className="glass-light mt-10 rounded-[24px] p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BD9B88]">
                    What we believe
                  </p>
                  <ul className="mt-5 space-y-4">
                    {beliefs.map((b) => (
                      <li key={b} className="flex items-start gap-4 text-sm leading-6 text-[#F4ECE6]/85">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                          <Check size={13} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div data-reveal="right" className="space-y-5">
                <p className="lede">
                  Joju Ventures is a gas business focused on serving the energy
                  needs of individuals, households and businesses.
                </p>
                <p className="lede">
                  We recognise that access to dependable energy plays an
                  important role in everyday living and business operations.
                  That is why we are committed to making gas solutions
                  accessible through a service-oriented approach built around
                  reliability, safety and customer satisfaction.
                </p>
                <p className="lede">
                  Our goal is to build lasting relationships with our customers
                  by consistently putting service quality and their needs at the
                  centre of what we do.
                </p>

                <Link
                  to="/what-we-are"
                  className="group inline-flex items-center gap-2 border-b border-[#BD9B88] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#BD9B88] transition hover:gap-4"
                >
                  Explore what we do
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COMMITMENT SHOWCASE */}
        <section className="pad night-2 relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <div data-reveal className="relative pb-6 sm:pr-6">
              <div className="glass-strong rounded-[26px] p-2.5 sm:rounded-[34px] sm:p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#173A59] via-[#10233D] to-[#020713] sm:rounded-[26px]">
                  <div className="pulse absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BD9B88]/25 blur-3xl" />
                  <Flame
                    size={140}
                    strokeWidth={1.1}
                    className="flicker absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#BD9B88]"
                    fill="rgba(189,155,136,0.14)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020713]/70 via-transparent to-transparent" />

                  <div className="glass-dark absolute bottom-3 left-3 flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18]">
                      <Flame size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Joju Ventures</p>
                      <p className="text-[11px] text-[#F4ECE6]/60">Your Essentials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal="right">
              <Eyebrow>Our commitment</Eyebrow>
              <Heading>
                More than a business.
                <br />
                <em className="tan-text pr-2 font-normal italic">A responsibility.</em>
              </Heading>
              <p className="lede mt-6 max-w-md">
                We understand that our customers depend on reliable energy. We
                approach that responsibility with care, dedication and a
                commitment to quality service.
              </p>

              <ul className="mt-8 space-y-4">
                {expect.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm text-[#F4ECE6]/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                      <Check size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section id="mission" className="pad frozen-2 relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10">
            <div data-reveal className="mb-12 flex items-center justify-between gap-6 sm:mb-14">
              <p className="eyebrow">Our direction</p>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#F4ECE6]/35">
                02 / Our purpose
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <article data-reveal className="glass-strong lift rounded-[26px] p-7 sm:rounded-[32px] sm:p-10">
                <IconTile className="h-14 w-14">
                  <Target size={24} strokeWidth={1.5} className="text-[#BD9B88]" />
                </IconTile>
                <p className="mt-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BD9B88]">
                  Our mission
                </p>
                <h3 className="serif mt-3 text-[28px] font-medium leading-tight sm:text-[34px]">
                  Delivering dependable energy solutions.
                </h3>
                <p className="mt-4 max-w-md text-[13.5px] leading-7 text-[#F4ECE6]/68">
                  To provide reliable gas solutions through a customer-focused
                  approach that prioritises service quality, safety and lasting
                  relationships.
                </p>
              </article>

              <article
                data-reveal
                style={{ "--reveal-delay": "100ms" }}
                className="glass-strong lift rounded-[26px] p-7 sm:rounded-[32px] sm:p-10"
              >
                <IconTile className="h-14 w-14">
                  <Eye size={24} strokeWidth={1.5} className="text-[#BD9B88]" />
                </IconTile>
                <p className="mt-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BD9B88]">
                  Our vision
                </p>
                <h3 className="serif mt-3 text-[28px] font-medium leading-tight sm:text-[34px]">
                  Building trust through energy.
                </h3>
                <p className="mt-4 max-w-md text-[13.5px] leading-7 text-[#F4ECE6]/68">
                  To become a trusted name in the gas business, recognised for
                  dependable service, customer confidence and a commitment to
                  excellence.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="approach" className="pad night relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
              <div data-reveal>
                <Eyebrow>How we work</Eyebrow>
                <Heading>
                  A simple approach,
                  <br />
                  <em className="tan-text pr-2 font-normal italic">done properly.</em>
                </Heading>
              </div>

              <p data-reveal className="lede max-w-sm md:ml-auto">
                Behind every delivery is a team that listens first and works to
                keep your energy supply dependable.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {approach.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.n}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 100}ms` }}
                    className="glass lift rounded-[24px] p-6 sm:rounded-[28px] sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="serif tan-text text-5xl font-normal italic leading-none">{s.n}</span>
                      <IconTile className="h-10 w-10 rounded-xl">
                        <Icon size={19} strokeWidth={1.5} className="text-[#BD9B88]" />
                      </IconTile>
                    </div>
                    <h3 className="serif mt-9 text-[24px] font-medium leading-snug">{s.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-7 text-[#F4ECE6]/62">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section id="values" className="pad frozen relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10">
            <div data-reveal className="mb-12 flex items-center justify-between gap-6 sm:mb-14">
              <p className="eyebrow">What guides us</p>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#F4ECE6]/35">
                03 / Our values
              </span>
            </div>

            <div className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
              <div data-reveal>
                <Heading>
                  The principles
                  <br />
                  <em className="tan-text pr-2 font-normal italic">behind our work.</em>
                </Heading>
              </div>
              <p data-reveal className="lede max-w-sm md:ml-auto">
                Our values shape how we serve our customers, approach our work
                and build relationships.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <article
                    key={v.number}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 100}ms` }}
                    className="val group glass relative flex min-h-[320px] flex-col overflow-hidden rounded-[24px] p-6 sm:rounded-[28px] sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="serif select-none text-6xl font-medium italic leading-none text-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40"
                        style={{ WebkitTextStroke: "1px rgba(189,155,136,0.6)" }}
                      >
                        {v.number}
                      </span>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#BD9B88]/30 bg-[#BD9B88]/10 text-[#BD9B88] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#030B18] group-hover:text-[#E6CDBD]">
                        <Icon size={20} />
                      </div>
                    </div>

                    <div className="mt-auto pt-14">
                      <h3 className="serif text-[26px] font-medium leading-tight transition-colors duration-500 group-hover:text-[#030B18]">
                        {v.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-7 text-[#F4ECE6]/62 transition-colors duration-500 group-hover:text-[#030B18]/80">
                        {v.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="absolute right-6 top-[46%] text-[#BD9B88] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-[#030B18]"
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section id="serve" className="pad night-2 relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div data-reveal className="max-w-2xl">
              <Eyebrow>Who we serve</Eyebrow>
              <Heading>Energy for the people who keep things moving.</Heading>
              <p className="lede mt-6 max-w-lg">
                From a family kitchen to a busy restaurant, we are focused on
                supporting homes and businesses with dependable gas solutions.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {serve.map((u, i) => {
                const Icon = u.icon;
                return (
                  <div
                    key={u.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 90}ms` }}
                    className="glass lift rounded-[22px] p-6 sm:rounded-[26px] sm:p-7"
                  >
                    <IconTile>
                      <Icon size={20} strokeWidth={1.5} className="text-[#BD9B88]" />
                    </IconTile>
                    <h3 className="serif mt-8 text-[26px] font-medium leading-tight">{u.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-7 text-[#F4ECE6]/62">{u.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section id="promise" className="pad frozen-2 relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10">
            <div
              data-reveal
              className="glass-strong relative overflow-hidden rounded-[26px] px-6 py-12 sm:rounded-[34px] sm:px-14 sm:py-16 lg:px-20 lg:py-20"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#BD9B88]/22 blur-3xl"
              />
              <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
                <div>
                  <Eyebrow>What you can expect</Eyebrow>
                  <Heading size="xl">
                    Reliable.
                    <br />
                    Safe.
                    <br />
                    <em className="tan-text pr-2 font-normal italic">Dependable.</em>
                  </Heading>
                  <p className="lede mt-7 max-w-md sm:mt-8">
                    Energy is essential to everyday life. That is why we put
                    reliability, safety and customer care at the centre of every
                    gas solution we provide.
                  </p>
                </div>

                <ul className="glass rounded-[24px] p-6 sm:p-8">
                  {expect.map((item, i) => (
                    <li
                      key={item}
                      className={`flex items-start gap-4 py-4 text-sm leading-6 text-[#F4ECE6]/85 ${
                        i !== 0 ? "border-t border-[#BD9B88]/15" : ""
                      }`}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                        <Check size={13} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pad night relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <Eyebrow>Good to know</Eyebrow>
              <Heading>Questions about us.</Heading>
              <p className="lede mt-6 max-w-xs">
                A few quick answers about Joju Ventures and how we work.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 border-b border-[#BD9B88] pb-1 text-sm font-semibold text-[#BD9B88] transition hover:text-[#F4ECE6]"
              >
                Still have questions?
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={faq.question} className="glass rounded-2xl px-5 sm:px-7">
                    <button
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6"
                      aria-expanded={isOpen}
                    >
                      <span className="serif text-[19px] font-medium text-[#F4ECE6] sm:text-[22px]">
                        {faq.question}
                      </span>
                      <Plus
                        size={20}
                        className={`shrink-0 text-[#BD9B88] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <p className="max-w-xl pb-6 text-[13.5px] leading-7 text-[#F4ECE6]/68">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section id="cta" className="pad night-2 relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div
              data-reveal
              className="tan-card relative overflow-hidden rounded-[28px] px-6 py-14 text-[#030B18] sm:rounded-[40px] sm:px-16 lg:py-24"
            >
              <ArrowRight
                size={300}
                strokeWidth={1}
                className="float pointer-events-none absolute -bottom-10 -right-10 text-[#030B18]/10"
              />
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#030B18]/70">
                  <span className="h-px w-10 bg-[#030B18]/60" />
                  Let's work together
                </p>

                <h2 className="serif mt-6 text-[34px] font-medium leading-[1.05] sm:text-5xl lg:text-[60px]">
                  Let's build a more dependable energy experience.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#030B18]/75">
                  Get in touch with Joju Ventures and let's discuss how we can
                  serve your needs.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#030B18] px-7 py-3.5 text-sm font-semibold text-[#F4ECE6] shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_24px_50px_-20px_rgba(3,11,24,.8)] transition hover:-translate-y-1 hover:bg-[#020713]"
                >
                  Talk to our team
                  <ArrowUpRight
                    size={17}
                    className="text-[#BD9B88] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default WhoWeAre;
