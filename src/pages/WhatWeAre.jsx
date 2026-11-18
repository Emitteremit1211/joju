
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Flame,
  HeartHandshake,
  Home as HomeIcon,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Factory,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
  DESIGN TOKENS — JOJU VENTURES
  midnight #030B18 · deep navy #020713 · blue #10233D
  blue accent #173A59 · tan #BD9B88
  sand #E6CDBD · cream #F4ECE6
  Fonts: Cormorant Garamond (display) + Manrope (body)
*/

const offerings = [
  {
    number: "01",
    icon: Flame,
    title: "Gas Supply",
    description:
      "Gas supply solutions designed to support the everyday energy needs of households and businesses.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Gas Distribution",
    description:
      "Focused on making gas products accessible through dependable distribution and customer service.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Business Solutions",
    description:
      "Gas supply support for businesses that depend on consistent energy to keep their operations running.",
  },
  {
    number: "04",
    icon: Users,
    title: "Customer Service",
    description:
      "A customer-focused approach that prioritises communication, convenience and lasting relationships.",
  },
];

const benefits = [
  "Customer-focused service",
  "Commitment to safety",
  "Reliable supply approach",
  "Solutions for different customer needs",
];

const focus = [
  { word: "Reliability", text: "A supply approach built around dependability." },
  { word: "Safety", text: "A genuine commitment to safe, responsible service." },
  { word: "Service", text: "Customer care at the centre of every conversation." },
];

const settings = [
  {
    icon: HomeIcon,
    title: "Homes",
    text: "Everyday energy for cooking and living, handled with care.",
  },
  {
    icon: Building2,
    title: "Businesses",
    text: "Consistent supply for operations that cannot afford to stop.",
  },
  {
    icon: Factory,
    title: "Industries",
    text: "Gas-related solutions that support wider commercial energy needs.",
  },
];

const journey = [
  {
    n: "I",
    icon: MessageCircle,
    title: "Tell us what you need",
    text: "Reach out with your enquiry, whether it is for a home, a business or a commercial setting.",
  },
  {
    n: "II",
    icon: BadgeCheck,
    title: "We find the right fit",
    text: "We take time to understand your requirements so the solution suits the way you use gas.",
  },
  {
    n: "III",
    icon: Truck,
    title: "Supply and distribution",
    text: "We focus on making access convenient, dependable and safe for you.",
  },
  {
    n: "IV",
    icon: HeartHandshake,
    title: "Ongoing support",
    text: "Our team stays available and focused on your satisfaction, beyond the first delivery.",
  },
];

const standards = [
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Safe handling and responsible service sit at the centre of how we work.",
  },
  {
    icon: Clock3,
    title: "Dependability",
    text: "We aim to deliver a supply experience our customers can count on.",
  },
  {
    icon: Phone,
    title: "Communication",
    text: "Clear, friendly communication from the first enquiry onwards.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    text: "High standards in our operations, service delivery and relationships.",
  },
];

const enquiry = [
  "Whether the need is for a home, a business or commercial use",
  "What you use gas for day to day",
  "Roughly how much or how often you need supply",
  "Where you are, so we can confirm availability in your area",
];

const faqs = [
  {
    question: "What does Joju Ventures offer?",
    answer:
      "We provide gas supply and gas distribution, business solutions for companies that depend on consistent energy, and a customer service approach built around communication and convenience.",
  },
  {
    question: "Do you work with households and businesses?",
    answer:
      "Yes. We are focused on supporting households and individuals, small and medium-sized businesses, and commercial energy users.",
  },
  {
    question: "How do I make an enquiry?",
    answer:
      "Head to our contact page and send us a message about what you need. Our team will get back to you.",
  },
  {
    question: "Is safety important to your service?",
    answer:
      "Absolutely. Reliability, safety and quality are central to how we work and how we serve our customers.",
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
  background: linear-gradient(145deg, rgba(8,24,45,.78), rgba(3,11,24,.7));
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

/* offering cards: glass that melts to tan on hover */
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

function WhatWeAre() {
  const [activeFaq, setActiveFaq] = useState(0);

  /* scroll reveal (reveals once) */
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

  /* glass sheen follows the cursor */
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
        {/* =========================================
            HERO
        ========================================= */}
        <section id="top" className="night relative flex items-center pb-20 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[760px]">
          <Orbs variant="a" />

          <div className="wrap relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <p className="eyebrow rise mb-6 sm:mb-8">What we do</p>

              <h1 className="serif rise rise-2 max-w-3xl text-[40px] font-medium leading-[1.02] sm:text-6xl lg:text-[72px]">
                Energy solutions.
                <br />
                <em className="tan-text pr-2 font-normal italic">For everyday needs.</em>
              </h1>

              <p className="lede rise rise-3 mt-7 max-w-md sm:mt-8">
                From household energy needs to business operations, Joju
                Ventures is focused on providing gas solutions backed by
                dependable service and customer care.
              </p>

              <div className="rise rise-3 mt-9 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-gradient-to-b from-[#E6CDBD] to-[#BD9B88] px-7 py-3.5 text-sm font-semibold text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_18px_40px_-16px_rgba(189,155,136,.7)] transition hover:brightness-105"
                >
                  Talk to us
                  <ArrowUpRight size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/who-we-are"
                  className="glass inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-medium text-[#F4ECE6] transition hover:bg-white/10"
                >
                  Discover our story
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="glass mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3 text-[13px] text-[#F4ECE6]/70 sm:mt-12">
                <Link to="/" className="transition hover:text-[#E6CDBD]">Home</Link>
                <span className="text-[#BD9B88]">/</span>
                <span className="text-[#F4ECE6]">What We Are</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div data-reveal="right" className="relative mx-auto w-full max-w-[520px]">
              {/* Replace with an actual Joju Ventures gas facility photograph */}
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
                    <Flame size={115} strokeWidth={1.2} className="flicker text-[#BD9B88]" fill="rgba(189,155,136,0.18)" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020713] via-[#020713]/85 to-transparent p-6 pt-24">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BD9B88]">
                      Joju Ventures
                    </span>
                    <strong className="serif mt-2 block text-[26px] font-medium leading-tight">
                      Powering possibilities.
                    </strong>
                  </div>
                </div>
              </div>

              <div className="glass-strong float absolute -left-4 top-[30%] hidden items-center gap-3 rounded-2xl p-4 sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                  <ShieldCheck size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Service you can trust</p>
                  <p className="text-[11px] text-[#F4ECE6]/60">Quality. Care. Commitment.</p>
                </div>
              </div>

              <div className="glass-strong float absolute -right-3 bottom-12 hidden items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-[#E6CDBD] sm:flex">
                <Sparkles size={14} />
                Your Essentials
              </div>
            </div>
          </div>

          <div className="brass-line absolute bottom-0 left-0 right-0 opacity-70" />
        </section>

        {/* =========================================
            OUR FOCUS STRIP
        ========================================= */}
        <section className="night-2 relative pb-4 pt-14 sm:pt-16">
          <div className="wrap">
            <p className="eyebrow mb-6 flex justify-center text-center">What we are built around</p>

            <div
              data-reveal
              className="glass grid divide-y divide-[#BD9B88]/15 rounded-[24px] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rounded-[30px]"
            >
              {focus.map((f) => (
                <div key={f.word} className="px-6 py-9 text-center lg:px-10 lg:py-10">
                  <p className="serif tan-text text-[32px] font-medium leading-none sm:text-[40px]">{f.word}</p>
                  <p className="mx-auto mt-4 max-w-[240px] text-[13.5px] leading-7 text-[#F4ECE6]/62">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            INTRODUCTION
        ========================================= */}
        <section id="business" className="pad frozen relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div data-reveal className="mb-12 flex items-center justify-between gap-6 sm:mb-14">
              <p className="eyebrow">Our business</p>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#F4ECE6]/35">
                01 / What we offer
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
              <div data-reveal>
                <Heading>
                  Making energy
                  <br />
                  <em className="tan-text pr-2 font-normal italic">work for you.</em>
                </Heading>
              </div>

              <div data-reveal="right" className="space-y-5">
                <p className="lede">
                  Energy plays an important role in homes, businesses and
                  industries. At Joju Ventures, we focus on providing
                  gas-related solutions that support these everyday needs.
                </p>
                <p className="lede">
                  Our approach combines customer service, accessibility and a
                  commitment to dependable supply to help our customers meet
                  their energy requirements.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
              {settings.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 90}ms` }}
                    className="glass-light lift flex items-start gap-5 rounded-[22px] p-6 sm:rounded-[26px]"
                  >
                    <IconTile>
                      <Icon size={20} strokeWidth={1.5} className="text-[#BD9B88]" />
                    </IconTile>
                    <div>
                      <h3 className="serif text-[24px] font-medium leading-tight">{s.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-7 text-[#F4ECE6]/62">{s.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICES
        ========================================= */}
        <section id="services" className="pad night relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10">
            <div data-reveal className="mb-12 flex items-center justify-between gap-6 sm:mb-14">
              <p className="eyebrow">Our capabilities</p>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#F4ECE6]/35">
                02 / Our services
              </span>
            </div>

            <div className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
              <div data-reveal>
                <Heading>
                  What we bring
                  <br />
                  <em className="tan-text pr-2 font-normal italic">to the table.</em>
                </Heading>
              </div>
              <p data-reveal className="lede max-w-sm md:ml-auto">
                We are committed to serving different customer needs with
                practical gas solutions and a customer-first mindset.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {offerings.map((item, i) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.number}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 100}ms` }}
                    className="val group glass relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] p-6 sm:rounded-[28px] sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="serif select-none text-6xl font-medium italic leading-none text-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40"
                        style={{ WebkitTextStroke: "1px rgba(189,155,136,0.6)" }}
                      >
                        {item.number}
                      </span>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#BD9B88]/30 bg-[#BD9B88]/10 text-[#BD9B88] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#030B18] group-hover:text-[#E6CDBD]">
                        <Icon size={20} />
                      </div>
                    </div>

                    <div className="mt-auto pt-14">
                      <h3 className="serif text-[26px] font-medium leading-tight transition-colors duration-500 group-hover:text-[#030B18]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-7 text-[#F4ECE6]/62 transition-colors duration-500 group-hover:text-[#030B18]/80">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      aria-label={`Enquire about ${item.title}`}
                      className="absolute right-6 top-24 text-[#BD9B88] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#030B18]"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            HOW WE SERVE YOU
        ========================================= */}
        <section id="process" className="pad night-2 relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
              <div data-reveal>
                <Eyebrow>How we serve you</Eyebrow>
                <Heading>
                  From first enquiry
                  <br />
                  <em className="tan-text pr-2 font-normal italic">to dependable supply.</em>
                </Heading>
              </div>
              <p data-reveal className="lede max-w-sm md:ml-auto">
                A clear, friendly process designed to make getting the right
                gas solution simple.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {journey.map((s, i) => {
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

        {/* =========================================
            WHO WE SERVE
        ========================================= */}
        <section id="serve" className="pad frozen-2 relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div data-reveal className="relative">
              <div className="glass-strong rounded-[26px] p-2.5 sm:rounded-[34px] sm:p-3">
                {/* Replace with an actual company or customer photograph */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#173A59] via-[#10233D] to-[#020713] sm:rounded-[26px]">
                  <div className="pulse absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BD9B88]/25 blur-3xl" />
                  <Flame
                    size={130}
                    strokeWidth={1.1}
                    className="flicker absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 text-[#BD9B88]"
                    fill="rgba(189,155,136,0.14)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020713]/75 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BD9B88]">
                    Energy for everyday life
                  </p>
                </div>
              </div>
            </div>

            <div data-reveal="right">
              <Eyebrow>Who we serve</Eyebrow>
              <Heading>
                Supporting the people and
                <br />
                <em className="tan-text pr-2 font-normal italic">businesses that matter.</em>
              </Heading>
              <p className="lede mt-6 max-w-md">
                Different customers have different energy needs. Our business
                is focused on supporting a range of customers with gas
                solutions and attentive service.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Households and individuals",
                  "Small and medium-sized businesses",
                  "Commercial energy users",
                ].map((item) => (
                  <li key={item} className="glass flex items-center gap-4 rounded-2xl px-5 py-3.5 text-sm text-[#F4ECE6]/90">
                    <CheckCircle2 size={19} className="shrink-0 text-[#BD9B88]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICE STANDARDS
        ========================================= */}
        <section id="standards" className="pad night relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div data-reveal className="max-w-2xl">
              <Eyebrow>Our service standards</Eyebrow>
              <Heading>What you can count on from us.</Heading>
              <p className="lede mt-6 max-w-lg">
                These are the commitments behind every enquiry, supply and
                conversation.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {standards.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 90}ms` }}
                    className="glass lift rounded-[22px] p-6 sm:rounded-[26px] sm:p-7"
                  >
                    <IconTile>
                      <Icon size={20} strokeWidth={1.5} className="text-[#BD9B88]" />
                    </IconTile>
                    <h3 className="serif mt-8 text-[26px] font-medium leading-tight">{s.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-7 text-[#F4ECE6]/62">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            WHY JOJU
        ========================================= */}
        <section id="why-joju" className="pad frozen relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10">
            <div data-reveal className="mb-12 flex items-center justify-between gap-6 sm:mb-14">
              <p className="eyebrow">The Joju difference</p>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#F4ECE6]/35">
                03 / Why Joju
              </span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <div data-reveal>
                <Heading>
                  A better approach
                  <br />
                  to <em className="tan-text pr-2 font-normal italic">energy service.</em>
                </Heading>
                <p className="lede mt-6 max-w-md">
                  We believe that great service goes beyond supplying a
                  product. It is about understanding customer needs, building
                  trust and delivering a dependable experience.
                </p>
                <Link
                  to="/who-we-are"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-[#BD9B88] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#BD9B88] transition hover:gap-4"
                >
                  Learn about our company
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div data-reveal="right" className="glass-strong divide-y divide-[#BD9B88]/15 rounded-[24px] px-6 sm:rounded-[30px] sm:px-9">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-5 py-6">
                    <span
                      className="serif select-none text-4xl font-medium italic leading-none text-transparent"
                      style={{ WebkitTextStroke: "1px rgba(189,155,136,0.65)" }}
                    >
                      0{index + 1}
                    </span>
                    <strong className="serif flex-1 text-[22px] font-medium leading-snug sm:text-[24px]">
                      {benefit}
                    </strong>
                    <CheckCircle2 size={20} className="shrink-0 text-[#BD9B88]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            BEFORE YOU GET IN TOUCH
        ========================================= */}
        <section id="enquiry" className="pad night-2 relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div
              data-reveal
              className="glass-strong relative overflow-hidden rounded-[26px] px-6 py-12 sm:rounded-[34px] sm:px-14 sm:py-16 lg:px-20 lg:py-20"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#BD9B88]/22 blur-3xl"
              />
              <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
                <div>
                  <Eyebrow>Making an enquiry</Eyebrow>
                  <Heading size="xl">
                    Tell us what
                    <br />
                    <em className="tan-text pr-2 font-normal italic">you need.</em>
                  </Heading>
                  <p className="lede mt-7 max-w-md sm:mt-8">
                    A few details help our team respond quickly and point you
                    to the right solution.
                  </p>
                </div>

                <ul className="glass rounded-[24px] p-6 sm:p-8">
                  {enquiry.map((item, i) => (
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

        {/* =========================================
            FAQ
        ========================================= */}
        <section id="faq" className="pad frozen-2 relative">
          <Orbs variant="a" />

          <div className="wrap relative z-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <Eyebrow>Good to know</Eyebrow>
              <Heading>Questions about our services.</Heading>
              <p className="lede mt-6 max-w-xs">
                A few quick answers about what Joju Ventures offers.
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

        {/* =========================================
            CONTACT CTA
        ========================================= */}
        <section id="cta" className="pad night relative">
          <Orbs variant="b" />

          <div className="wrap relative z-10">
            <div
              data-reveal
              className="tan-card relative overflow-hidden rounded-[28px] px-6 py-14 text-[#030B18] sm:rounded-[40px] sm:px-16 lg:py-24"
            >
              <Flame
                size={380}
                strokeWidth={1}
                className="float pointer-events-none absolute -bottom-20 -right-10 text-[#030B18]/10"
              />
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#030B18]/70">
                  <span className="h-px w-10 bg-[#030B18]/60" />
                  Your energy partner
                </p>

                <h2 className="serif mt-6 text-[34px] font-medium leading-[1.05] sm:text-5xl lg:text-[60px]">
                  Let's find the right solution for you.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#030B18]/75">
                  Have a gas supply enquiry or want to learn more about what we
                  offer? We'd be glad to hear from you.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#030B18] px-7 py-3.5 text-sm font-semibold text-[#F4ECE6] shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_24px_50px_-20px_rgba(3,11,24,.8)] transition hover:-translate-y-1 hover:bg-[#020713]"
                >
                  Contact Joju Ventures
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

export default WhatWeAre;
