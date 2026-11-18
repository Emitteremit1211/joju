
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
    ArrowRight,
    ArrowUp,
    ArrowUpRight,
    BadgeCheck,
    Building2,
    Check,
    Clock3,
    Flame,
    HeartHandshake,
    Home as HomeIcon,
    Phone,
    Plus,
    ShieldCheck,
    Sparkles,
    Store,
    Truck,
    Users,
    X,
} from "lucide-react";

/*
  DESIGN TOKENS — JOJU VENTURES (MIDNIGHT BLUE LIQUID GLASS)

  midnight  #030B18  main background
  abyss     #020712  deeper navy
  ocean     #102B43  lighter blue cards
  blue      #0D2940  secondary background
  tan       #BD9B88  logo colour, secondary accent
  sand      #E6CDBD  soft tan highlight
  cream     #F4ECE6  text

  Fonts: Cormorant Garamond (display) + Manrope (body)
*/

const services = [
    {
        number: "01",
        title: "Gas Supply",
        description:
            "Dependable gas supply solutions for everyday and business needs.",
        icon: Flame,
    },
    {
        number: "02",
        title: "Gas Distribution",
        description: "Making gas access convenient and reliable for our customers.",
        icon: Truck,
    },
    {
        number: "03",
        title: "Customer Support",
        description: "A service-first approach focused on customer satisfaction.",
        icon: ShieldCheck,
    },
];

const marquee = [
    "Gas Supply",
    "Gas Distribution",
    "Customer Support",
    "Safety",
    "Reliability",
    "Quality",
];

const pillars = [
    {
        word: "Reliability",
        text: "Energy you can count on, for the moments that matter.",
    },
    {
        word: "Safety",
        text: "Safe handling and responsible service sit at the centre of what we do.",
    },
    {
        word: "Service",
        text: "A customer-first approach, from the first conversation onwards.",
    },
];

const benefits = [
    {
        icon: Clock3,
        title: "Dependable supply",
        description:
            "Gas solutions built around reliability for homes and businesses.",
    },
    {
        icon: ShieldCheck,
        title: "Safety first",
        description:
            "A genuine emphasis on safety and quality in the way we work.",
    },
    {
        icon: Truck,
        title: "Convenient access",
        description:
            "Making gas access easier and more reliable for our customers.",
    },
    {
        icon: HeartHandshake,
        title: "Customer care",
        description:
            "A service-first approach focused on customer satisfaction.",
    },
];

const useCases = [
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

const steps = [
    {
        n: "I",
        icon: Phone,
        title: "Reach out",
        text: "Get in touch with the Joju Ventures team and tell us what you need.",
    },
    {
        n: "II",
        icon: Truck,
        title: "We get you supplied",
        text: "We focus on making gas access convenient, reliable and safe for you.",
    },
    {
        n: "III",
        icon: BadgeCheck,
        title: "Enjoy dependable service",
        text: "Count on a team that stays focused on your satisfaction.",
    },
];

const compare = [
    {
        label: "Supply",
        before: "Uncertain and stressful",
        after: "Dependable gas supply",
    },
    {
        label: "Access",
        before: "Hard to organise",
        after: "Convenient and reliable access",
    },
    {
        label: "Safety",
        before: "Treated as an afterthought",
        after: "An emphasis on safety and quality",
    },
    {
        label: "Support",
        before: "Left to figure it out alone",
        after: "A service-first approach",
    },
];

const faqs = [
    {
        question: "What does Joju Ventures do?",
        answer:
            "Joju Ventures provides gas solutions with an emphasis on reliability, safety and customer care, including gas supply, gas distribution and customer support.",
    },
    {
        question: "Who do you serve?",
        answer:
            "We are focused on supporting both homes and businesses with dependable gas solutions.",
    },
    {
        question: "How do I get in touch?",
        answer:
            "Head to our contact page and send us a message. Our team will get back to you about your energy needs.",
    },
    {
        question: "Is safety a priority for you?",
        answer:
            "Yes. Reliability, safety and quality are at the heart of how we work and how we serve our customers.",
    },
    {
        question: "Where do you operate?",
        answer:
            "Please reach out through our contact page to confirm availability in your area and how we can support you.",
    },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap');

.joju {
  font-family: 'Manrope', system-ui, sans-serif;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}

.joju .serif {
  font-family: 'Cormorant Garamond', Georgia, serif;
  letter-spacing: -0.01em;
}

.joju .wrap {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 640px) {
  .joju .wrap { padding: 0 28px; }
}

.joju .pad { padding: 104px 0; }

@media (max-width: 1023px) {
  .joju .pad { padding: 80px 0; }
}

@media (max-width: 640px) {
  .joju .pad { padding: 60px 0; }
}

.joju img { max-width: 100%; }
.joju section[id] { scroll-margin-top: 72px; }

/* ---------- midnight blue backgrounds ---------- */

.joju .night {
  background:
    radial-gradient(900px 520px at 80% 20%, rgba(189,155,136,.16), transparent 62%),
    radial-gradient(700px 420px at 0% 100%, rgba(25,75,120,.32), transparent 60%),
    linear-gradient(180deg, #020712 0%, #030B18 100%);
}

.joju .night-2 {
  background:
    radial-gradient(800px 460px at 15% 10%, rgba(189,155,136,.11), transparent 60%),
    linear-gradient(180deg, #030B18 0%, #020712 100%);
}

.joju .frozen {
  background:
    radial-gradient(700px 420px at 90% 0%, rgba(189,155,136,.13), transparent 60%),
    radial-gradient(600px 400px at 0% 100%, rgba(25,75,120,.28), transparent 60%),
    linear-gradient(180deg, #0D2940 0%, #061A2D 100%);
}

.joju .frozen-2 {
  background:
    radial-gradient(700px 420px at 5% 10%, rgba(189,155,136,.11), transparent 60%),
    radial-gradient(600px 400px at 100% 100%, rgba(25,75,120,.26), transparent 60%),
    linear-gradient(180deg, #061A2D 0%, #030B18 100%);
}

/* ---------- text ---------- */

.joju .tan-text {
  background: linear-gradient(110deg, #F4ECE6 0%, #E6CDBD 42%, #BD9B88 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.joju .brass-text {
  background: linear-gradient(110deg, #F4ECE6 0%, #E6CDBD 40%, #BD9B88 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.joju .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: #BD9B88;
}

.joju .eyebrow::before {
  content: "";
  width: 32px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #BD9B88);
}

.joju .lede {
  font-size: 15px;
  line-height: 1.85;
  color: rgba(244,236,230,.66);
  font-weight: 400;
}

@media (min-width: 640px) {
  .joju .lede { font-size: 16px; }
}

/* =====================================================
   LIQUID GLASS — MIDNIGHT BLUE + TAN
   ===================================================== */

.joju .glass,
.joju .glass-strong,
.joju .glass-light,
.joju .glass-dark {
  --mx: 50%;
  --my: 0%;
  border: 1px solid rgba(255,255,255,.07);
  isolation: isolate;
}

.joju .glass:not(.absolute):not(.fixed),
.joju .glass-strong:not(.absolute):not(.fixed),
.joju .glass-light:not(.absolute):not(.fixed),
.joju .glass-dark:not(.absolute):not(.fixed) {
  position: relative;
}

.joju .glass {
  background: linear-gradient(
    135deg,
    rgba(255,255,255,.11) 0%,
    rgba(255,255,255,.025) 42%,
    rgba(255,255,255,.05) 100%
  );
  -webkit-backdrop-filter: blur(22px) saturate(170%) brightness(1.06);
  backdrop-filter: blur(22px) saturate(170%) brightness(1.06);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.24),
    inset 0 -1px 0 rgba(255,255,255,.04),
    inset 0 0 22px rgba(255,255,255,.025),
    0 22px 48px -28px rgba(0,0,0,.75);
}

.joju .glass-strong {
  background: linear-gradient(
    135deg,
    rgba(255,255,255,.15) 0%,
    rgba(255,255,255,.035) 40%,
    rgba(255,255,255,.07) 100%
  );
  -webkit-backdrop-filter: blur(34px) saturate(180%) brightness(1.08);
  backdrop-filter: blur(34px) saturate(180%) brightness(1.08);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.32),
    inset 0 -1px 0 rgba(255,255,255,.05),
    inset 0 0 40px rgba(255,255,255,.03),
    0 50px 100px -35px rgba(0,0,0,.8),
    0 0 90px -30px rgba(189,155,136,.28);
}

.joju .glass-light {
  background: linear-gradient(
    135deg,
    rgba(255,255,255,.10) 0%,
    rgba(255,255,255,.025) 45%,
    rgba(255,255,255,.05) 100%
  );
  -webkit-backdrop-filter: blur(24px) saturate(165%) brightness(1.05);
  backdrop-filter: blur(24px) saturate(165%) brightness(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.22),
    inset 0 0 28px rgba(255,255,255,.025),
    0 30px 60px -35px rgba(0,0,0,.65);
}

.joju .glass-dark {
  background: linear-gradient(
    145deg,
    rgba(8,25,45,.86),
    rgba(2,7,18,.82)
  );
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  backdrop-filter: blur(28px) saturate(160%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.13),
    inset 0 0 30px rgba(255,255,255,.02),
    0 30px 60px -35px rgba(0,0,0,.75);
}

/* specular rim */

.joju .glass::before,
.joju .glass-strong::before,
.joju .glass-light::before,
.joju .glass-dark::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    rgba(244,236,230,.55) 0%,
    rgba(255,255,255,0) 28%,
    rgba(255,255,255,0) 68%,
    rgba(189,155,136,.55) 100%
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box exclude,
    linear-gradient(#000 0 0);
  z-index: 2;
}

/* moving sheen */

.joju .glass::after,
.joju .glass-strong::after,
.joju .glass-light::after,
.joju .glass-dark::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    420px circle at var(--mx) var(--my),
    rgba(230,205,189,.12),
    transparent 55%
  );
  opacity: 0;
  transition: opacity .35s ease;
  z-index: 1;
}

@media (hover: hover) {
  .joju .glass:hover::after,
  .joju .glass-strong:hover::after,
  .joju .glass-light:hover::after,
  .joju .glass-dark:hover::after {
    opacity: 1;
  }
}

/* ---------- ambient glow orbs ---------- */

.joju .orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(70px);
  will-change: transform;
  animation: jjDrift 18s ease-in-out infinite;
}

.joju .orb-a {
  background: radial-gradient(
    circle at 30% 30%,
    rgba(189,155,136,.5),
    rgba(189,155,136,0) 70%
  );
}

.joju .orb-b {
  background: radial-gradient(
    circle at 60% 40%,
    rgba(40,105,160,.45),
    rgba(25,75,120,0) 70%
  );
}

.joju .orb-c {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(230,205,189,.32),
    rgba(230,205,189,0) 70%
  );
}

@keyframes jjDrift {
  0%,100% {
    transform: translate3d(0,0,0) scale(1);
  }
  33% {
    transform: translate3d(30px,-24px,0) scale(1.08);
  }
  66% {
    transform: translate3d(-24px,20px,0) scale(.95);
  }
}

@media (max-width: 640px) {
  .joju .orb {
    filter: blur(50px);
    opacity: .8;
  }
}

/* ---------- tan card ---------- */

.joju .tan-card {
  background:
    radial-gradient(120% 90% at 85% 0%, rgba(255,255,255,.35), transparent 55%),
    linear-gradient(140deg, #D6B8A6 0%, #BD9B88 55%, #8C6B58 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.5),
    inset 0 -24px 48px rgba(90,60,45,.18),
    0 40px 90px -40px rgba(189,155,136,.5);
}

.joju .brass-line {
  background: linear-gradient(90deg, transparent, rgba(189,155,136,.6), transparent);
  height: 1px;
}

/* service cards */

.joju .svc {
  transition:
    transform .5s cubic-bezier(.2,.7,.2,1),
    background .5s ease,
    border-color .5s ease,
    box-shadow .5s ease;
}

@media (hover: hover) {
  .joju .svc:hover {
    transform: translateY(-8px);
    background: linear-gradient(
      140deg,
      rgba(230,205,189,.96),
      rgba(189,155,136,.94) 60%,
      rgba(156,122,102,.94)
    );
    border-color: rgba(230,205,189,.8);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.55),
      0 30px 80px -24px rgba(189,155,136,.6);
  }
}

.joju .lift {
  transition: transform .45s cubic-bezier(.2,.7,.2,1);
}

@media (hover: hover) {
  .joju .lift:hover { transform: translateY(-6px); }
}

/* ---------- motion ---------- */

@keyframes jjRise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.joju .rise {
  opacity: 0;
  animation: jjRise .9s cubic-bezier(.2,.7,.2,1) forwards;
}

.joju .rise-2 { animation-delay: .12s; }
.joju .rise-3 { animation-delay: .24s; }

@keyframes jjFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.joju .float { animation: jjFloat 7s ease-in-out infinite; }

@keyframes jjFlicker {
  0%,100% {
    transform: scale(1) rotate(-1deg);
    filter: drop-shadow(0 0 28px rgba(189,155,136,.55));
  }
  25% {
    transform: scale(1.05) rotate(1deg);
    filter: drop-shadow(0 0 46px rgba(189,155,136,.8));
  }
  50% {
    transform: scale(.98) rotate(-.5deg);
    filter: drop-shadow(0 0 34px rgba(189,155,136,.6));
  }
  75% {
    transform: scale(1.04) rotate(1.2deg);
    filter: drop-shadow(0 0 52px rgba(189,155,136,.85));
  }
}

.joju .flicker { animation: jjFlicker 3.2s ease-in-out infinite; }

@keyframes jjSpin { to { transform: rotate(360deg); } }
@keyframes jjSpinRev { to { transform: rotate(-360deg); } }

.joju .spin { animation: jjSpin 40s linear infinite; }
.joju .spin-rev { animation: jjSpinRev 60s linear infinite; }

@keyframes jjMarquee { to { transform: translateX(-100%); } }

.joju .marquee-track { animation: jjMarquee 36s linear infinite; }

@keyframes jjPulse {
  0%,100% {
    opacity: .5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.joju .pulse { animation: jjPulse 2.6s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .joju .rise,
  .joju .float,
  .joju .flicker,
  .joju .spin,
  .joju .spin-rev,
  .joju .marquee-track,
  .joju .pulse,
  .joju .orb {
    animation: none;
    opacity: 1;
  }
}

/* ---------- scroll reveal ---------- */

.joju [data-reveal] {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition:
    opacity 700ms ease,
    transform 700ms cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--reveal-delay, 0ms);
}

.joju [data-reveal="right"] {
  transform: translate3d(22px, 0, 0);
}

.joju [data-reveal="left"] {
  transform: translate3d(-22px, 0, 0);
}

.joju [data-reveal].is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (max-width: 640px) {
  .joju [data-reveal="left"],
  .joju [data-reveal="right"] {
    transform: translate3d(0, 24px, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .joju [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* ---------- back to top ---------- */

.joju .totop {
  position: fixed;
  right: calc(16px + env(safe-area-inset-right, 0px));
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  z-index: 60;
  opacity: 0;
  transform: translateY(16px) scale(.9);
  pointer-events: none;
  transition:
    opacity .3s ease,
    transform .3s cubic-bezier(.2,.7,.2,1);
}

.joju .totop.show {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}

@media (min-width: 640px) {
  .joju .totop {
    right: calc(32px + env(safe-area-inset-right, 0px));
    bottom: calc(32px + env(safe-area-inset-bottom, 0px));
  }
}

.joju a:focus-visible,
.joju button:focus-visible {
  outline: 2px solid #BD9B88;
  outline-offset: 3px;
}
`;

function Heading({ children, size = "lg", className = "" }) {
    const sizes = {
        lg: "text-[32px] sm:text-[44px] lg:text-[54px]",
        xl: "text-[40px] sm:text-[56px] lg:text-[72px]",
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

/* Ambient glow orbs */
function Orbs({ variant = "a" }) {
    const sets = {
        a: [
            {
                cls: "orb-a",
                style: { left: "-8%", top: "4%", width: 420, height: 420 },
            },
            {
                cls: "orb-b",
                style: {
                    right: "-6%",
                    bottom: "2%",
                    width: 500,
                    height: 500,
                    animationDelay: "-6s",
                },
            },
            {
                cls: "orb-c",
                style: {
                    right: "28%",
                    top: "-8%",
                    width: 260,
                    height: 260,
                    animationDelay: "-11s",
                },
            },
        ],
        b: [
            {
                cls: "orb-b",
                style: {
                    right: "-6%",
                    top: "-4%",
                    width: 460,
                    height: 460,
                    animationDelay: "-3s",
                },
            },
            {
                cls: "orb-a",
                style: {
                    left: "-8%",
                    bottom: "-6%",
                    width: 380,
                    height: 380,
                    animationDelay: "-9s",
                },
            },
        ],
    };

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {sets[variant].map((o, i) => (
                <div key={i} className={`orb ${o.cls}`} style={o.style} />
            ))}
        </div>
    );
}

/* Floating back-to-top button with progress ring */

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-[#BD9B88]/40 bg-[#030B18] text-[#BD9B88] shadow-[0_8px_30px_rgba(0,0,0,.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#10233D] hover:text-[#F4ECE6] ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}


/* One marquee row */
function MarqueeRow({ hidden = false }) {
    return (
        <div
            aria-hidden={hidden ? "true" : undefined}
            className="marquee-track flex shrink-0 items-center gap-10 pr-10"
        >
            {[...marquee, ...marquee, ...marquee].map((item, i) => (
                <div key={i} className="flex items-center gap-10">
                    <span
                        className="serif whitespace-nowrap text-3xl font-medium italic text-transparent sm:text-5xl"
                        style={{
                            WebkitTextStroke: "1px rgba(189,155,136,0.7)",
                        }}
                    >
                        {item}
                    </span>

                    <Flame size={20} className="text-[#BD9B88]" />
                </div>
            ))}
        </div>
    );
}

/* Small icon tile */
function IconTile({ children, className = "" }) {
    return (
        <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,.2)] ${className}`}
        >
            {children}
        </span>
    );
}

export default function Home() {
    const [activeFaq, setActiveFaq] = useState(0);
    const heroRef = useRef(null);

    /* Scroll reveal */
    useEffect(() => {
        const elements = document.querySelectorAll(".joju [data-reveal]");

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

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
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    /* Cursor-follow glow in hero */
    const handleMove = (e) => {
        const el = heroRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();

        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    /* Liquid-glass sheen follows the cursor */
    const handlePointerMove = (e) => {
        if (e.pointerType && e.pointerType !== "mouse") return;

        const card = e.target.closest?.(
            ".glass, .glass-strong, .glass-light, .glass-dark"
        );

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

            {/* =========================================
          HERO
      ========================================= */}

            <section
                id="home"
                ref={heroRef}
                onMouseMove={handleMove}
                className="night relative flex items-center pb-20 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[820px]"
            >
                <Orbs variant="a" />

                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(520px circle at var(--mx, 70%) var(--my, 30%), rgba(189,155,136,0.14), transparent 65%)",
                    }}
                />

                <div className="wrap relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
                    <div>
                        <p className="eyebrow rise mb-6 sm:mb-8">
                            Reliable energy. Trusted service.
                        </p>

                        <h1 className="serif rise rise-2 max-w-3xl text-[40px] font-medium leading-[1.02] sm:text-6xl lg:text-[76px]">
                            Powering homes.
                            <br />
                            <em className="tan-text pr-2 font-normal italic">
                                Supporting
                            </em>
                            <br />
                            businesses.
                        </h1>

                        <p className="lede rise rise-3 mt-7 max-w-md sm:mt-8">
                            Your trusted partner for dependable gas solutions, built around
                            safety, quality and service you can count on.
                        </p>

                        <div className="rise rise-3 mt-9 flex flex-col gap-3.5 sm:mt-10 sm:flex-row">
                            <Link
                                to="/what-we-are"
                                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-gradient-to-b from-[#E6CDBD] to-[#BD9B88] px-7 py-3.5 text-sm font-semibold text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_18px_40px_-16px_rgba(189,155,136,.7)] transition hover:brightness-105"
                            >
                                Explore our services

                                <ArrowUpRight
                                    size={17}
                                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                            <Link
                                to="/who-we-are"
                                className="glass inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-medium text-[#F4ECE6] transition hover:bg-white/10"
                            >
                                Discover Joju
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="glass mt-10 inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-3xl px-6 py-3.5 text-[13px] text-[#F4ECE6]/75 sm:mt-12 sm:gap-x-6 sm:rounded-full sm:px-7">
                            <span>Gas supply</span>
                            <span className="h-1 w-1 rounded-full bg-[#BD9B88]" />
                            <span>Gas distribution</span>
                            <span className="h-1 w-1 rounded-full bg-[#BD9B88]" />
                            <span>Customer support</span>
                        </div>
                    </div>

                    {/* HERO VISUAL */}

                    <div data-reveal="right" className="relative mx-auto w-full max-w-[520px]">
                        <div className="glass-strong relative mx-auto w-[min(88vw,390px)] rounded-[40px] p-3.5 sm:rounded-[48px] sm:p-4">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-gradient-to-b from-[#102B43] to-[#020712] sm:rounded-[36px]">
                                <div className="spin absolute left-1/2 top-[42%] h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#BD9B88]/35">
                                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#BD9B88] shadow-[0_0_20px_#BD9B88]" />
                                </div>

                                <div className="spin-rev absolute left-1/2 top-[42%] h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#BD9B88]/25">
                                    <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#E6CDBD]" />
                                </div>

                                <div className="pulse absolute left-1/2 top-[42%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BD9B88]/30 blur-3xl" />

                                <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                                    <Flame
                                        size={120}
                                        strokeWidth={1.2}
                                        className="flicker text-[#BD9B88]"
                                        fill="rgba(189,155,136,0.18)"
                                    />
                                </div>

                                <span className="absolute right-6 top-6 text-[11px] font-medium tracking-[0.25em] text-[#BD9B88]/70">
                                    01 / 04
                                </span>

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020712] via-[#020712]/85 to-transparent p-6 pt-24">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BD9B88]">
                                        Joju Ventures
                                    </span>

                                    <strong className="serif mt-2 block text-[26px] font-medium leading-tight">
                                        Energy for everyday living.
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="glass-strong float absolute -left-4 top-[30%] hidden items-center gap-3 rounded-2xl p-4 sm:flex">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                                <Flame size={19} />
                            </span>

                            <div>
                                <p className="text-sm font-semibold">Reliable energy</p>
                                <p className="text-[11px] text-[#F4ECE6]/60">For every need</p>
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
          MARQUEE
      ========================================= */}

            <section className="relative z-10 overflow-hidden border-b border-[#BD9B88]/20 bg-[#020712] py-7">
                <div className="flex">
                    <MarqueeRow />
                    <MarqueeRow hidden />
                </div>
            </section>

            {/* =========================================
          PILLARS
      ========================================= */}

            <section className="night-2 relative pb-4 pt-14 sm:pt-18">
                <div className="wrap">
                    <p className="eyebrow mb-6 flex justify-center text-center">
                        What we stand for
                    </p>

                    <div
                        data-reveal
                        className="glass grid divide-y divide-[#BD9B88]/15 rounded-[24px] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rounded-[30px]"
                    >
                        {pillars.map((p) => (
                            <div
                                key={p.word}
                                className="px-6 py-9 text-center lg:px-10 lg:py-10"
                            >
                                <p className="serif tan-text text-[34px] font-medium leading-none sm:text-[44px]">
                                    {p.word}
                                </p>

                                <p className="mx-auto mt-4 max-w-[240px] text-[13.5px] leading-7 text-[#F4ECE6]/62">
                                    {p.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          ABOUT
      ========================================= */}

            <section id="about" className="pad frozen relative">
                <Orbs variant="b" />

                <div className="wrap relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
                    <div data-reveal>
                        <Eyebrow>Who we are</Eyebrow>

                        <Heading>
                            More than gas.
                            <br />
                            <em className="tan-text pr-2 font-normal italic">
                                A commitment to
                            </em>
                            <br />
                            dependable service.
                        </Heading>

                        <p className="lede mt-6 max-w-md">
                            At Joju Ventures, we believe that dependable energy is essential
                            to everyday life and business operations. We are focused on
                            providing gas solutions with an emphasis on reliability, safety
                            and customer care.
                        </p>

                        <Link
                            to="/who-we-are"
                            className="group mt-8 inline-flex items-center gap-2 border-b border-[#BD9B88] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#BD9B88] transition hover:gap-4"
                        >
                            Learn more about us
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div
                        data-reveal="right"
                        className="glass-light divide-y divide-[#BD9B88]/15 rounded-[24px] px-6 sm:rounded-[30px] sm:px-10"
                    >
                        {benefits.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="flex gap-5 py-6 sm:gap-6 sm:py-7"
                                >
                                    <IconTile className="mt-0.5">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-[#BD9B88]"
                                        />
                                    </IconTile>

                                    <div>
                                        <h3 className="serif text-[24px] font-medium sm:text-[26px]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1.5 max-w-sm text-[13.5px] leading-7 text-[#F4ECE6]/62">
                                            {item.description}
                                        </p>
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
                    <div className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
                        <div data-reveal>
                            <Eyebrow>What we do</Eyebrow>

                            <Heading>
                                Energy solutions.
                                <br />
                                <em className="tan-text pr-2 font-normal italic">
                                    Built around you.
                                </em>
                            </Heading>
                        </div>

                        <p data-reveal className="lede max-w-sm md:ml-auto">
                            We focus on delivering practical gas solutions with service you
                            can depend on.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
                        {services.map((s, i) => {
                            const Icon = s.icon;

                            return (
                                <article
                                    key={s.number}
                                    data-reveal
                                    style={{ "--reveal-delay": `${i * 120}ms` }}
                                    className="svc group glass relative flex min-h-[340px] flex-col overflow-hidden rounded-[26px] p-7 sm:rounded-[30px] sm:p-9"
                                >
                                    <span
                                        className="serif pointer-events-none absolute -right-2 -top-5 select-none text-[8rem] font-medium italic leading-none text-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30"
                                        style={{
                                            WebkitTextStroke: "1px rgba(189,155,136,0.5)",
                                        }}
                                    >
                                        {s.number}
                                    </span>

                                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-[#BD9B88]/30 bg-[#BD9B88]/10 text-[#BD9B88] shadow-[inset_0_1px_0_rgba(255,255,255,.2)] transition-all duration-500 group-hover:rotate-6 group-hover:border-[#030B18]/20 group-hover:bg-[#030B18] group-hover:text-[#E6CDBD]">
                                        <Icon size={24} />
                                    </div>

                                    <div className="relative mt-auto pt-20">
                                        <h3 className="serif text-[30px] font-medium leading-tight transition-colors duration-500 group-hover:text-[#030B18]">
                                            {s.title}
                                        </h3>

                                        <p className="mt-3 max-w-xs text-[13.5px] leading-7 text-[#F4ECE6]/62 transition-colors duration-500 group-hover:text-[#030B18]/80">
                                            {s.description}
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="absolute bottom-8 right-8 text-[#BD9B88] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#030B18]"
                                    />
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================
          SHOWCASE
      ========================================= */}

            <section className="pad night-2 relative">
                <Orbs variant="b" />

                <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
                    <div data-reveal>
                        <Eyebrow>Always dependable</Eyebrow>

                        <Heading>Energy that shows up.</Heading>

                        <p className="lede mt-6 max-w-md">
                            From the kitchen at home to the demands of a growing business,
                            Joju Ventures is focused on making gas supply and access simple,
                            safe and dependable.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Dependable gas solutions for homes and businesses",
                                "A strong emphasis on safety and quality",
                                "A service-first team focused on your satisfaction",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-4 text-sm text-[#F4ECE6]/85"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.5)]">
                                        <Check size={13} />
                                    </span>

                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div data-reveal="right" className="relative pb-10 sm:pr-6">
                        <div className="glass-strong rounded-[26px] p-2.5 sm:rounded-[34px] sm:p-3">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#173A59] via-[#102B43] to-[#020712] sm:rounded-[26px]">
                                <div className="pulse absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BD9B88]/25 blur-3xl" />

                                <Flame
                                    size={150}
                                    strokeWidth={1.1}
                                    className="flicker absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#BD9B88]"
                                    fill="rgba(189,155,136,0.14)"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/70 via-transparent to-transparent" />

                                <div className="glass-dark absolute bottom-3 left-3 flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18]">
                                        <Flame size={16} />
                                    </span>

                                    <div>
                                        <p className="text-sm font-semibold">Joju Ventures</p>
                                        <p className="text-[11px] text-[#F4ECE6]/60">
                                            Your Essentials
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-strong float absolute bottom-0 right-0 hidden w-48 rounded-2xl p-5 sm:block">
                            <ShieldCheck size={21} className="text-[#BD9B88]" />

                            <p className="serif mt-3 text-[22px] font-medium leading-tight">
                                Safety first
                            </p>

                            <p className="mt-1 text-[11px] leading-5 text-[#F4ECE6]/60">
                                In everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          WHO IT IS FOR
      ========================================= */}

            <section id="use-cases" className="pad frozen-2 relative">
                <Orbs variant="a" />

                <div className="wrap relative z-10">
                    <div data-reveal className="max-w-2xl">
                        <Eyebrow>Who it is for</Eyebrow>
                        <Heading>Built for everyone who needs reliable energy.</Heading>
                    </div>

                    <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                        {useCases.map((u, i) => {
                            const Icon = u.icon;

                            return (
                                <div
                                    key={u.title}
                                    data-reveal
                                    style={{ "--reveal-delay": `${i * 90}ms` }}
                                    className="glass lift rounded-[22px] p-6 sm:rounded-[26px] sm:p-7"
                                >
                                    <IconTile>
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-[#BD9B88]"
                                        />
                                    </IconTile>

                                    <h3 className="serif mt-8 text-[26px] font-medium leading-tight">
                                        {u.title}
                                    </h3>

                                    <p className="mt-3 text-[13.5px] leading-7 text-[#F4ECE6]/62">
                                        {u.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================
          HOW IT WORKS
      ========================================= */}

            <section id="how-it-works" className="pad night relative">
                <Orbs variant="b" />

                <div className="wrap relative z-10">
                    <div className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
                        <div data-reveal>
                            <Eyebrow>Simple process</Eyebrow>
                            <Heading>Getting started, simplified.</Heading>
                        </div>

                        <p className="lede max-w-sm md:ml-auto">
                            Reach out, get supplied and enjoy a more dependable way to meet
                            your energy needs.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
                        {steps.map((s, i) => {
                            const Icon = s.icon;

                            return (
                                <div
                                    key={s.n}
                                    data-reveal
                                    style={{ "--reveal-delay": `${i * 120}ms` }}
                                    className="glass lift rounded-[24px] p-7 sm:rounded-[30px] sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="serif brass-text text-5xl font-normal italic leading-none sm:text-[56px]">
                                            {s.n}
                                        </span>

                                        <IconTile className="h-10 w-10 rounded-xl">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.5}
                                                className="text-[#BD9B88]"
                                            />
                                        </IconTile>
                                    </div>

                                    <h3 className="serif mt-10 text-[24px] font-medium leading-snug sm:text-[26px]">
                                        {s.title}
                                    </h3>

                                    <p className="mt-3 max-w-xs text-[13.5px] leading-7 text-[#F4ECE6]/62">
                                        {s.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================
          THE JOJU PROMISE
      ========================================= */}

            <section id="promise" className="pad night-2 relative">
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
                                <Eyebrow>The Joju promise</Eyebrow>

                                <Heading size="xl">
                                    Reliable.
                                    <br />
                                    Safe.
                                    <br />
                                    <em className="tan-text pr-2 font-normal italic">
                                        Dependable.
                                    </em>
                                </Heading>

                                <p className="lede mt-7 max-w-md sm:mt-8">
                                    Energy is essential to everyday life. That is why we put
                                    reliability, safety and customer care at the centre of every
                                    gas solution we provide.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#F4ECE6]/85">
                                    <span className="flex items-center gap-2">
                                        <Check size={16} className="text-[#BD9B88]" />
                                        Quality you can trust
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <Check size={16} className="text-[#BD9B88]" />
                                        Service that cares
                                    </span>
                                </div>

                                <Link
                                    to="/contact"
                                    className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 bg-gradient-to-b from-[#E6CDBD] to-[#BD9B88] px-7 py-3.5 text-sm font-semibold text-[#030B18] shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_18px_40px_-16px_rgba(189,155,136,.7)] transition hover:brightness-105 sm:mt-10"
                                >
                                    Talk to Joju Ventures

                                    <ArrowUpRight
                                        size={17}
                                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            </div>

                            {/* Seal */}

                            <div className="relative mx-auto flex h-[240px] w-[240px] items-center justify-center sm:h-[320px] sm:w-[320px]">
                                <div className="spin absolute inset-0 rounded-full border border-dashed border-[#BD9B88]/40" />

                                <div className="absolute inset-5 rounded-full border border-[#BD9B88]/30" />

                                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#E6CDBD] via-[#BD9B88] to-[#7A5B49] shadow-[inset_0_2px_0_rgba(255,255,255,.5),inset_0_-24px_40px_rgba(70,45,32,.28),0_30px_80px_-20px_rgba(189,155,136,.5)] sm:inset-12" />

                                <div className="relative text-center text-[#030B18]">
                                    <Flame size={40} strokeWidth={1.5} className="mx-auto" />

                                    <p className="serif mt-3 text-2xl font-semibold tracking-wide">
                                        Joju
                                    </p>

                                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] opacity-75">
                                        Your Essentials
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          COMPARE
      ========================================= */}

            <section id="compare" className="pad frozen relative">
                <Orbs variant="a" />

                <div className="wrap relative z-10">
                    <div data-reveal className="mx-auto max-w-3xl text-center">
                        <Heading>Getting gas, the usual way and the Joju way.</Heading>
                    </div>

                    <div
                        data-reveal
                        className="glass-strong mx-auto mt-12 max-w-4xl overflow-hidden rounded-[24px] sm:mt-14 sm:rounded-[30px]"
                    >
                        <div className="hidden grid-cols-[.7fr_1fr_1fr] border-b border-[#BD9B88]/20 px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] sm:grid">
                            <span />
                            <span className="text-[#F4ECE6]/45">The usual way</span>
                            <span className="text-[#BD9B88]">With Joju Ventures</span>
                        </div>

                        {compare.map((row) => (
                            <div
                                key={row.label}
                                className="grid grid-cols-1 gap-3 border-b border-[#BD9B88]/15 px-6 py-6 last:border-b-0 sm:grid-cols-[.7fr_1fr_1fr] sm:items-start sm:px-10"
                            >
                                <span className="serif text-[22px] font-medium">
                                    {row.label}
                                </span>

                                <span className="flex items-start gap-2 text-sm leading-6 text-[#F4ECE6]/50">
                                    <X size={15} className="mt-1 shrink-0" />

                                    <span>
                                        <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-[#F4ECE6]/35 sm:hidden">
                                            The usual way
                                        </span>

                                        {row.before}
                                    </span>
                                </span>

                                <span className="flex items-start gap-2 text-sm leading-6 text-[#F4ECE6]">
                                    <Check
                                        size={15}
                                        className="mt-1 shrink-0 text-[#BD9B88]"
                                    />

                                    <span>
                                        <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-[#BD9B88] sm:hidden">
                                            With Joju Ventures
                                        </span>

                                        {row.after}
                                    </span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          WHY JOJU
      ========================================= */}

            <section id="why-joju" className="pad frozen-2 relative">
                <Orbs variant="b" />

                <div className="wrap relative z-10">
                    <div data-reveal className="max-w-2xl">
                        <Eyebrow>Why Joju Ventures?</Eyebrow>

                        <Heading>A better way to power your day.</Heading>

                        <p className="lede mt-6 max-w-lg">
                            Whether you are looking after a home or running a business, Joju
                            Ventures brings dependable gas solutions together with service
                            you can trust.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
                        <div
                            data-reveal
                            className="glass-light lift rounded-[24px] p-5 sm:rounded-[30px] sm:p-8"
                        >
                            <div className="relative mb-7 flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#173A59] to-[#020712] sm:mb-8">
                                <div className="pulse absolute h-40 w-40 rounded-full bg-[#BD9B88]/25 blur-3xl" />

                                <HomeIcon
                                    size={56}
                                    strokeWidth={1.2}
                                    className="relative text-[#BD9B88]"
                                />
                            </div>

                            <Users
                                size={26}
                                strokeWidth={1.4}
                                className="text-[#BD9B88]"
                            />

                            <h3 className="serif mt-5 text-[28px] font-medium sm:text-[32px]">
                                For homes
                            </h3>

                            <p className="mt-3 max-w-sm text-[13.5px] leading-7 text-[#F4ECE6]/68">
                                Dependable gas for everyday living, backed by a team that
                                cares about your safety and satisfaction.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-7 inline-flex items-center gap-2 border-b border-[#F4ECE6]/70 pb-1 text-sm font-semibold transition hover:border-[#BD9B88] hover:text-[#BD9B88]"
                            >
                                Get in touch
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div
                            data-reveal
                            style={{ "--reveal-delay": "100ms" }}
                            className="glass-dark lift rounded-[24px] p-5 sm:rounded-[30px] sm:p-8"
                        >
                            <div className="relative mb-7 flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#102B43] to-[#020712] sm:mb-8">
                                <div className="pulse absolute h-40 w-40 rounded-full bg-[#BD9B88]/25 blur-3xl" />

                                <Building2
                                    size={56}
                                    strokeWidth={1.2}
                                    className="relative text-[#BD9B88]"
                                />
                            </div>

                            <Building2
                                size={26}
                                strokeWidth={1.4}
                                className="text-[#BD9B88]"
                            />

                            <h3 className="serif mt-5 text-[28px] font-medium sm:text-[32px]">
                                For businesses
                            </h3>

                            <p className="mt-3 max-w-sm text-[13.5px] leading-7 text-[#F4ECE6]/68">
                                Gas solutions that support your operations, with a
                                service-first approach focused on your needs.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-7 inline-flex items-center gap-2 border-b border-[#BD9B88] pb-1 text-sm font-semibold text-[#BD9B88] transition hover:border-[#F4ECE6] hover:text-[#F4ECE6]"
                            >
                                Talk to our team
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          FAQ
      ========================================= */}

            <section id="faq" className="pad night relative">
                <Orbs variant="a" />

                <div className="wrap relative z-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
                    <div data-reveal>
                        <Eyebrow>Got questions?</Eyebrow>

                        <Heading>We've got answers.</Heading>

                        <p className="lede mt-6 max-w-xs">
                            Find out more about Joju Ventures and how we can support your
                            energy needs.
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
                                <div
                                    key={faq.question}
                                    className="glass rounded-2xl px-5 sm:px-7"
                                >
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
                                            className={`shrink-0 text-[#BD9B88] transition-transform duration-300 ${isOpen ? "rotate-45" : ""
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

            <section
                id="contact-cta"
                className="relative overflow-hidden bg-[#030B18] px-6 py-20 sm:px-10 lg:py-28"
            >
                <Orbs variant="b" />

                <div className="wrap relative z-10 mx-auto">
                    <div className="tan-card relative min-h-[420px] overflow-hidden rounded-[28px] px-6 py-14 text-[#030B18] sm:rounded-[40px] sm:px-16 lg:flex lg:items-center lg:py-24">

                        {/* Decorative flame */}
                        <Flame
                            size={380}
                            strokeWidth={1}
                            className="float pointer-events-none absolute -bottom-20 -right-10 text-[#030B18]/10"
                        />

                        {/* Decorative glow */}
                        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />

                        <div className="relative z-10 max-w-3xl">

                            <p className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#030B18]/70">
                                <span className="h-px w-10 bg-[#030B18]/60" />
                                Let's connect
                            </p>

                            <h2 className="serif mt-6 text-[34px] font-medium leading-[1.05] sm:text-5xl lg:text-[60px]">
                                Looking for a reliable gas partner?
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-[#030B18]/75">
                                Let's talk about how Joju Ventures can support your energy
                                needs with reliable gas supply and dependable service.
                            </p>

                            <Link
                                to="/contact"
                                className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#030B18] px-7 py-3.5 text-sm font-semibold text-[#F4ECE6] shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_24px_50px_-20px_rgba(2,7,18,.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#10233D]"
                            >
                                Contact Joju Ventures

                                <ArrowUpRight
                                    size={17}
                                    className="text-[#BD9B88] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <BackToTop />
        </div>
    );
}
