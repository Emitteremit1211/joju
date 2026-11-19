import { useEffect, useState } from "react";
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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  HeartHandshake,
  Home as HomeIcon,
  Phone,
  ShieldCheck,
  Store,
  Truck,
  Users,
  X,
} from "lucide-react";

/*
  JOJU VENTURES — HOME
  Shares the Contact page's background system:
  midnight navy gradients, angled shards, tan accent, soft glass panels.

  Fonts: Cormorant Garamond (display) + Manrope (body)

  IMAGES live in /public. If your files are .jpg or .webp, change the extensions below.
*/

const SLIDE_MS = 5000; // each hero slide stays for 5 seconds

const heroSlides = [
  {
    src: "/joju-hero.png",
    alt: "Joju Ventures gas supply",
    tag: "Gas Supply",
    line1: "We sell gas.",
    line2: "Delivered with care.",
    text: "Joju Ventures supplies gas to homes, restaurants and businesses, with safety and quality built into every order.",
  },
  {
    src: "/joju-full.png",
    alt: "Joju Ventures full gas cylinders",
    tag: "Gas Refills",
    line1: "Cylinders full.",
    line2: "Kitchens running.",
    text: "Dependable gas you can count on, so your home or business never has to stop cooking.",
  },
  {
    src: "/joju-in.png",
    alt: "Joju Ventures in action",
    tag: "Gas Distribution",
    line1: "Gas access,",
    line2: "made simple.",
    text: "A service-first team focused on convenient, reliable and safe gas distribution.",
  },
];

const bodyImages = {
  showcase: "/joju-full.png",
  homes: "/joju-in.png",
  business: "/joju-hero.png",
};

const services = [
  {
    title: "Gas Supply",
    description:
      "Dependable gas supply solutions for everyday and business needs.",
    icon: Flame,
  },
  {
    title: "Gas Distribution",
    description: "Making gas access convenient and reliable for our customers.",
    icon: Truck,
  },
  {
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
    description: "A genuine emphasis on safety and quality in the way we work.",
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
    description: "A service-first approach focused on customer satisfaction.",
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
    n: "01",
    icon: Phone,
    title: "Reach out",
    text: "Get in touch with the Joju Ventures team and tell us what you need.",
  },
  {
    n: "02",
    icon: Truck,
    title: "We get you supplied",
    text: "We focus on making gas access convenient, reliable and safe for you.",
  },
  {
    n: "03",
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap');

.joju {
  font-family: 'Manrope', system-ui, sans-serif;
  background: #030B18;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}

.joju .serif {
  font-family: 'Cormorant Garamond', Georgia, serif;
  letter-spacing: -.015em;
}

.joju .wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.joju .pad { padding: 100px 0; }

@media (max-width: 640px) {
  .joju .pad { padding: 72px 0; }
  .joju .wrap { padding: 0 19px; }
}

.joju img { max-width: 100%; }
.joju section[id] { scroll-margin-top: 72px; }

/* ---------- structured midnight backgrounds (same as Contact) ---------- */

.joju .night {
  background:
    radial-gradient(850px 500px at 85% 15%, rgba(31,91,150,.20), transparent 65%),
    radial-gradient(650px 420px at 0% 90%, rgba(39,112,180,.11), transparent 65%),
    linear-gradient(180deg, #030B18 0%, #061326 100%);
}

.joju .night-2 {
  background:
    radial-gradient(700px 420px at 12% 5%, rgba(31,91,150,.15), transparent 65%),
    radial-gradient(600px 400px at 95% 100%, rgba(189,155,136,.07), transparent 65%),
    linear-gradient(180deg, #061326 0%, #030B18 100%);
}

.joju .night-3 {
  background:
    radial-gradient(800px 420px at 50% 0%, rgba(31,91,150,.13), transparent 65%),
    linear-gradient(180deg, #030B18 0%, #020713 100%);
}

.joju .shard {
  position: absolute;
  pointer-events: none;
  background: linear-gradient(160deg, rgba(31,91,150,.23), rgba(8,24,45,.015) 75%);
}

.joju .accent-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(189,155,136,.65), transparent);
}

/* ---------- text ---------- */

.joju .accent-text {
  background: linear-gradient(110deg, #F4ECE6 0%, #E6CDBD 48%, #BD9B88 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.joju .accent-text-soft {
  background: linear-gradient(110deg, #F4ECE6 0%, #BD9B88 55%, #9C7C69 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.joju .lede {
  font-size: 15px;
  line-height: 1.9;
  color: rgba(244,236,230,.6);
}

@media (min-width: 640px) {
  .joju .lede { font-size: 16px; }
}

/* ---------- glass panels (same as Contact) ---------- */

.joju .glass {
  background: linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.018));
  border: 1px solid rgba(189,155,136,.16);
  -webkit-backdrop-filter: blur(18px) saturate(130%);
  backdrop-filter: blur(18px) saturate(130%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.09),
    0 30px 60px -35px rgba(0,0,0,.8);
}

.joju .glass-strong {
  background: linear-gradient(145deg, rgba(16,35,61,.88), rgba(3,11,24,.94));
  border: 1px solid rgba(189,155,136,.23);
  -webkit-backdrop-filter: blur(26px) saturate(140%);
  backdrop-filter: blur(26px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.11),
    0 40px 90px -40px rgba(0,0,0,.85),
    0 0 70px -35px rgba(31,91,150,.22);
}

.joju .glass-dark {
  background: linear-gradient(145deg, rgba(16,35,61,.94), rgba(2,7,19,.97));
  border: 1px solid rgba(189,155,136,.17);
  -webkit-backdrop-filter: blur(22px);
  backdrop-filter: blur(22px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    0 30px 70px -40px rgba(0,0,0,.8);
}

.joju .primary-button {
  background: linear-gradient(110deg, #E6CDBD, #BD9B88 60%, #9C7C69);
  color: #030B18;
  box-shadow: 0 16px 35px -17px rgba(189,155,136,.5);
  transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
}

.joju .primary-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
  box-shadow: 0 20px 40px -18px rgba(189,155,136,.65);
}

.joju .soft-card {
  transition: transform .3s ease, border-color .3s ease, background .3s ease;
}

.joju .soft-card:hover {
  transform: translateY(-5px);
  border-color: rgba(189,155,136,.4);
  background: linear-gradient(145deg, rgba(31,91,150,.14), rgba(255,255,255,.025));
}

/* ---------- full-screen hero slideshow ---------- */

.joju .hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(9%) scale(1.06);
  transition: opacity 1.2s ease, transform 1.4s cubic-bezier(.22,.7,.2,1);
  z-index: 1;
  will-change: transform, opacity;
}

.joju .hero-slide.prev {
  opacity: 0;
  transform: translateX(-9%) scale(1.04);
}

.joju .hero-slide.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  z-index: 2;
}

.joju .hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.joju .hero-slide.active img {
  animation: jjKen 7s ease-out forwards;
}

@keyframes jjKen {
  from { transform: scale(1.12); }
  to   { transform: scale(1); }
}

@keyframes jjProgress {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.joju .progress-fill {
  transform-origin: left;
  animation: jjProgress ${SLIDE_MS}ms linear forwards;
}

@keyframes jjSweep {
  0%   { transform: translateX(-120%) skewX(-18deg); }
  100% { transform: translateX(320%) skewX(-18deg); }
}

.joju .sweep { position: relative; overflow: hidden; }

.joju .sweep::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 40%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.38), transparent);
  animation: jjSweep 3.8s ease-in-out infinite;
}

/* ---------- motion ---------- */

@keyframes jjRise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}

.joju .rise {
  opacity: 0;
  animation: jjRise .85s cubic-bezier(.2,.7,.2,1) forwards;
}

.joju .rise-2 { animation-delay: .12s; }
.joju .rise-3 { animation-delay: .24s; }

@keyframes jjFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.joju .float { animation: jjFloat 7s ease-in-out infinite; }

@keyframes jjSpin { to { transform: rotate(360deg); } }
.joju .spin { animation: jjSpin 40s linear infinite; }

@keyframes jjMarquee { to { transform: translateX(-100%); } }
.joju .marquee-track { animation: jjMarquee 38s linear infinite; }

.joju .faq-answer { animation: jjFaq .25s ease both; }

@keyframes jjFaq {
  from { opacity: 0; transform: translateY(-5px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ---------- scroll reveal ---------- */

.joju [data-reveal] {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
  transition:
    opacity 650ms ease,
    transform 650ms cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--reveal-delay, 0ms);
}

.joju [data-reveal="left"]  { transform: translate3d(-24px, 0, 0); }
.joju [data-reveal="right"] { transform: translate3d(24px, 0, 0); }

.joju [data-reveal].is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (max-width: 640px) {
  .joju [data-reveal="left"],
  .joju [data-reveal="right"] {
    transform: translate3d(0, 28px, 0);
  }
}

.joju a:focus-visible,
.joju button:focus-visible {
  outline: 2px solid #BD9B88;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .joju [data-reveal],
  .joju [data-reveal="left"],
  .joju [data-reveal="right"] {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .joju .rise,
  .joju .float,
  .joju .spin,
  .joju .marquee-track,
  .joju .faq-answer,
  .joju .hero-slide.active img,
  .joju .progress-fill,
  .joju .sweep::after {
    animation: none;
    opacity: 1;
  }

  .joju .hero-slide { transition: opacity .3s ease; transform: none; }
  .joju .soft-card,
  .joju .primary-button { transition: none; }
}
`;

function Heading({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`serif font-semibold leading-[1.04] ${className}`}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mb-6 flex items-center gap-4 text-sm font-semibold text-[#BD9B88]">
      <span className="h-px w-9 bg-current opacity-70" />
      {children}
    </p>
  );
}

/* Angled shards — the Contact page background structure */
function Shards({ variant = "a" }) {
  const sets = {
    a: [
      {
        left: "-6%",
        top: "5%",
        width: 460,
        height: 600,
        clipPath: "polygon(0 100%, 42% 0, 100% 58%)",
        opacity: 0.75,
      },
      {
        right: "-6%",
        bottom: "-5%",
        width: 580,
        height: 450,
        clipPath: "polygon(100% 0, 100% 100%, 0 100%, 34% 38%)",
        opacity: 0.65,
      },
      {
        right: "20%",
        top: "-8%",
        width: 250,
        height: 320,
        clipPath: "polygon(50% 0, 100% 100%, 0 82%)",
        opacity: 0.4,
      },
    ],
    b: [
      {
        right: "-5%",
        top: "-5%",
        width: 500,
        height: 480,
        clipPath: "polygon(100% 0, 100% 100%, 20% 30%)",
        opacity: 0.65,
      },
      {
        left: "-5%",
        bottom: "-8%",
        width: 480,
        height: 360,
        clipPath: "polygon(0 0, 70% 100%, 0 100%)",
        opacity: 0.5,
      },
    ],
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {sets[variant].map((shape, index) => (
        <div key={index} className="shard" style={shape} />
      ))}
    </div>
  );
}

function IconTile({ children, className = "" }) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD] ${className}`}
    >
      {children}
    </span>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
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
            style={{ WebkitTextStroke: "1px rgba(189,155,136,0.65)" }}
          >
            {item}
          </span>

          <Flame size={20} className="text-[#BD9B88]" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [slide, setSlide] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [paused, setPaused] = useState(false);

  const goTo = (i) => {
    const n = heroSlides.length;
    setPrev(slide);
    setSlide(((i % n) + n) % n);
  };

  /* Hero slideshow: changes image every 5 seconds */
  useEffect(() => {
    if (paused) return;

    const id = setTimeout(() => goTo(slide + 1), SLIDE_MS);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, paused]);

  /* Scroll reveal */
  useEffect(() => {
    const elements = document.querySelectorAll(".joju [data-reveal]");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="joju min-h-screen overflow-x-clip bg-[#030B18] text-[#F4ECE6]">
      <style>{styles}</style>

      <Navbar />

      {/* =========================================
          HERO — FULL SCREEN SLIDESHOW
      ========================================= */}

      <section
        id="home"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative min-h-[100svh] overflow-hidden bg-[#030B18]"
      >
        {/* sliding images */}
        {heroSlides.map((s, i) => (
          <div
            key={s.src}
            className={`hero-slide ${
              i === slide ? "active" : i === prev ? "prev" : ""
            }`}
            aria-hidden={i !== slide}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* navy tint, readability + shard structure */}
        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#030B18] via-[#030B18]/80 to-[#030B18]/15" />
        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-[#030B18] via-transparent to-[#030B18]/65" />
        <div className="pointer-events-none absolute inset-0 z-[3] opacity-80">
          <Shards variant="b" />
        </div>

        {/* layered text (remounts per slide so it re-animates) */}
        <div className="wrap relative z-10 flex min-h-[100svh] flex-col justify-center pb-44 pt-36 sm:pb-48 sm:pt-40">
          <div key={slide} className="max-w-3xl">
            <p className="rise glass mb-7 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold text-[#F4ECE6]/85">
              <span className="h-2 w-2 rounded-full bg-[#BD9B88] shadow-[0_0_12px_rgba(189,155,136,.7)]" />
              {heroSlides[slide].tag}
            </p>

            <h1 className="serif rise rise-2 text-[48px] font-semibold leading-[1.02] sm:text-7xl lg:text-[92px]">
              {heroSlides[slide].line1}
              <br />
              <em className="accent-text pr-2 font-medium italic">
                {heroSlides[slide].line2}
              </em>
            </h1>

            <p className="lede rise rise-3 mt-7 max-w-lg !text-[#F4ECE6]/75 sm:mt-8">
              {heroSlides[slide].text}
            </p>

            <div className="rise rise-3 mt-9 flex flex-col gap-3.5 sm:mt-10 sm:flex-row">
              <Link
                to="/contact"
                className="primary-button sweep group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold"
              >
                Buy gas now
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/what-we-are"
                className="glass inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-[#F4ECE6] transition hover:bg-white/10"
              >
                Our services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* bottom control bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-6 sm:pb-8">
          <div className="wrap">
            <div className="glass-strong flex flex-col gap-5 rounded-[26px] p-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-7 sm:py-4">
              <div className="flex flex-1 items-center gap-3 sm:max-w-md">
                <span className="serif text-2xl font-semibold tabular-nums">
                  0{slide + 1}
                  <span className="text-sm text-[#F4ECE6]/45">
                    {" "}
                    / 0{heroSlides.length}
                  </span>
                </span>

                <div className="flex flex-1 gap-2">
                  {heroSlides.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Show slide ${i + 1}`}
                      className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                    >
                      {i < slide && (
                        <span className="absolute inset-0 bg-[#BD9B88]" />
                      )}

                      {i === slide && (
                        <span
                          key={slide}
                          className="progress-fill absolute inset-0 bg-[#BD9B88]"
                          style={{
                            animationPlayState: paused ? "paused" : "running",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden items-center gap-5 text-[13px] text-[#F4ECE6]/70 lg:flex">
                <span>Gas supply</span>
                <span className="h-1 w-1 rounded-full bg-[#BD9B88]" />
                <span>Gas distribution</span>
                <span className="h-1 w-1 rounded-full bg-[#BD9B88]" />
                <span>Customer support</span>
              </div>

              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => goTo(slide - 1)}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F4ECE6] transition hover:border-[#BD9B88] hover:bg-[#BD9B88] hover:text-[#030B18]"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => goTo(slide + 1)}
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F4ECE6] transition hover:border-[#BD9B88] hover:bg-[#BD9B88] hover:text-[#030B18]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="accent-line absolute bottom-0 left-0 right-0 z-10 opacity-70" />
      </section>

      {/* =========================================
          MARQUEE
      ========================================= */}

      <section className="relative z-10 overflow-hidden border-b border-[#BD9B88]/20 bg-[#030B18] py-7">
        <div className="flex">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </section>

      {/* =========================================
          PILLARS
      ========================================= */}

      <section className="night-2 relative pb-4 pt-20">
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div data-reveal className="mb-8 flex justify-center">
            <Eyebrow>What we stand for</Eyebrow>
          </div>

          <div
            data-reveal
            className="glass grid divide-y divide-[#BD9B88]/15 rounded-[28px] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {pillars.map((p) => (
              <div key={p.word} className="px-6 py-10 text-center lg:px-10">
                <p className="serif accent-text text-[38px] font-semibold leading-none sm:text-[48px]">
                  {p.word}
                </p>

                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-7 text-[#F4ECE6]/55">
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

      <section id="about" className="pad night-2 relative">
        <Shards variant="a" />

        <div className="wrap relative z-10 grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div data-reveal="left">
            <Eyebrow>Who we are</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              More than gas.
              <br />
              <em className="accent-text-soft pr-2 font-medium italic">
                A commitment to dependable service.
              </em>
            </Heading>

            <p className="lede mt-7 max-w-md">
              At Joju Ventures, we believe that dependable energy is essential
              to everyday life and business operations. We are focused on
              providing gas solutions with an emphasis on reliability, safety
              and customer care.
            </p>

            <Link
              to="/who-we-are"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[#BD9B88]/60 pb-1 text-sm font-bold text-[#E6CDBD] transition hover:text-white"
            >
              Learn more about us
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div data-reveal="right" className="space-y-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass soft-card flex items-start gap-5 rounded-2xl p-5 sm:p-6"
                >
                  <IconTile>
                    <Icon size={21} strokeWidth={1.6} />
                  </IconTile>

                  <div>
                    <h3 className="serif text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-7 text-[#F4ECE6]/55">
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
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>What we do</Eyebrow>
            </div>

            <Heading className="text-5xl sm:text-6xl lg:text-7xl">
              Energy solutions,
              <br />
              <em className="accent-text pr-2 font-medium italic">
                built around you.
              </em>
            </Heading>

            <p className="lede mt-6">
              We focus on delivering practical gas solutions with service you
              can depend on.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <article
                  key={s.title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 100}ms` }}
                  className="glass soft-card group flex min-h-[300px] flex-col rounded-[26px] p-7 sm:p-8"
                >
                  <IconTile>
                    <Icon size={22} strokeWidth={1.6} />
                  </IconTile>

                  <h3 className="serif mt-auto pt-16 text-3xl font-semibold">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#F4ECE6]/55">
                    {s.description}
                  </p>

                  <div className="mt-6 flex justify-end border-t border-white/10 pt-5">
                    <ArrowUpRight
                      size={19}
                      className="text-[#BD9B88] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          SHOWCASE
      ========================================= */}

      <section className="pad night-3 relative">
        <Shards variant="a" />

        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div data-reveal="left">
            <Eyebrow>Always dependable</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              Energy that
              <br />
              <em className="accent-text-soft pr-2 font-medium italic">
                shows up.
              </em>
            </Heading>

            <p className="lede mt-7 max-w-md">
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
                  className="flex items-center gap-4 text-sm text-[#F4ECE6]/80"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18]">
                    <Check size={13} />
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="right" className="relative pb-10 sm:pr-6">
            <div className="glass-strong rounded-[30px] p-2.5 sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#173A59] via-[#102B43] to-[#020713]">
                <img
                  src={bodyImages.showcase}
                  alt="Joju Ventures gas cylinders"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020713]/75 via-transparent to-transparent" />

                <div className="glass-dark absolute bottom-3 left-3 flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#BD9B88] text-[#030B18]">
                    <Flame size={16} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold">Joju Ventures</p>
                    <p className="text-[11px] text-[#F4ECE6]/55">
                      Your Essentials
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong float absolute bottom-0 right-0 hidden w-48 rounded-2xl p-5 sm:block">
              <ShieldCheck size={21} className="text-[#BD9B88]" />

              <p className="serif mt-3 text-[22px] font-semibold leading-tight">
                Safety first
              </p>

              <p className="mt-1 text-[11px] leading-5 text-[#F4ECE6]/55">
                In everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHO IT IS FOR
      ========================================= */}

      <section id="use-cases" className="pad night relative">
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Who it is for</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              Built for everyone who needs{" "}
              <em className="accent-text pr-2 font-medium italic">
                reliable energy.
              </em>
            </Heading>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => {
              const Icon = u.icon;

              return (
                <div
                  key={u.title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 90}ms` }}
                  className="glass soft-card rounded-[24px] p-6 sm:p-7"
                >
                  <IconTile>
                    <Icon size={21} strokeWidth={1.6} />
                  </IconTile>

                  <h3 className="serif mt-8 text-[28px] font-semibold leading-tight">
                    {u.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#F4ECE6]/55">
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

      <section id="how-it-works" className="pad night-2 relative">
        <Shards variant="a" />

        <div className="wrap relative z-10 grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div data-reveal="left">
            <Eyebrow>Simple and straightforward</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              Getting started,
              <br />
              <em className="accent-text-soft pr-2 font-medium italic">
                simplified.
              </em>
            </Heading>

            <p className="lede mt-7 max-w-lg">
              Reach out, get supplied and enjoy a more dependable way to meet
              your energy needs.
            </p>

            <Link
              to="/contact"
              className="primary-button mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold"
            >
              Contact our team
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((s, i) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.n}
                  data-reveal="right"
                  style={{ "--reveal-delay": `${i * 120}ms` }}
                  className="glass flex gap-5 rounded-2xl p-5 sm:p-6"
                >
                  <IconTile>
                    <Icon size={21} />
                  </IconTile>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold tracking-widest text-[#BD9B88]">
                        {s.n}
                      </span>

                      <h3 className="serif text-xl font-semibold sm:text-2xl">
                        {s.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-[#F4ECE6]/50">
                      {s.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          THE JOJU PROMISE
      ========================================= */}

      <section id="promise" className="pad night-3 relative">
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div
            data-reveal
            className="glass-strong relative overflow-hidden rounded-[30px] px-6 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full bg-[#173A59]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-[#BD9B88]/12 blur-3xl"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
              <div>
                <Eyebrow>The Joju promise</Eyebrow>

                <Heading className="text-6xl sm:text-7xl lg:text-[84px]">
                  Reliable.
                  <br />
                  Safe.
                  <br />
                  <em className="accent-text pr-2 font-medium italic">
                    Dependable.
                  </em>
                </Heading>

                <p className="lede mt-7 max-w-md">
                  Energy is essential to everyday life. That is why we put
                  reliability, safety and customer care at the centre of every
                  gas solution we provide.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#F4ECE6]/80">
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
                  className="primary-button group mt-9 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold"
                >
                  Talk to Joju Ventures
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* seal */}
              <div className="relative mx-auto flex h-[240px] w-[240px] items-center justify-center sm:h-[320px] sm:w-[320px]">
                <div className="spin absolute inset-0 rounded-full border border-dashed border-[#BD9B88]/40" />
                <div className="absolute inset-5 rounded-full border border-[#BD9B88]/30" />
                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#E6CDBD] via-[#BD9B88] to-[#7A5B49] shadow-[inset_0_2px_0_rgba(255,255,255,.5),inset_0_-24px_40px_rgba(70,45,32,.28),0_30px_80px_-20px_rgba(189,155,136,.5)] sm:inset-12" />

                <div className="relative text-center text-[#030B18]">
                  <Flame size={40} strokeWidth={1.5} className="mx-auto" />

                  <p className="serif mt-3 text-3xl font-semibold">Joju</p>

                  <p className="mt-1 text-xs font-bold opacity-75">
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

      <section id="compare" className="pad night relative">
        <Shards variant="a" />

        <div className="wrap relative z-10">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <Heading className="text-5xl sm:text-6xl">
              Getting gas, the usual way
              <br />
              <em className="accent-text pr-2 font-medium italic">
                and the Joju way.
              </em>
            </Heading>
          </div>

          <div
            data-reveal
            className="glass-strong mx-auto mt-14 max-w-4xl overflow-hidden rounded-[28px]"
          >
            <div className="hidden grid-cols-[.7fr_1fr_1fr] border-b border-[#BD9B88]/20 px-10 py-5 text-sm font-semibold sm:grid">
              <span />
              <span className="text-[#F4ECE6]/45">The usual way</span>
              <span className="text-[#BD9B88]">With Joju Ventures</span>
            </div>

            {compare.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-3 border-b border-[#BD9B88]/15 px-6 py-6 last:border-b-0 sm:grid-cols-[.7fr_1fr_1fr] sm:items-start sm:px-10"
              >
                <span className="serif text-2xl font-semibold">
                  {row.label}
                </span>

                <span className="flex items-start gap-2 text-sm leading-6 text-[#F4ECE6]/50">
                  <X size={15} className="mt-1 shrink-0" />

                  <span>
                    <span className="mb-0.5 block text-xs font-semibold text-[#F4ECE6]/35 sm:hidden">
                      The usual way
                    </span>
                    {row.before}
                  </span>
                </span>

                <span className="flex items-start gap-2 text-sm leading-6 text-[#F4ECE6]">
                  <Check size={15} className="mt-1 shrink-0 text-[#BD9B88]" />

                  <span>
                    <span className="mb-0.5 block text-xs font-semibold text-[#BD9B88] sm:hidden">
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

      <section id="why-joju" className="pad night-2 relative">
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Why Joju Ventures?</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              A better way to{" "}
              <em className="accent-text-soft pr-2 font-medium italic">
                power your day.
              </em>
            </Heading>

            <p className="lede mt-6 max-w-lg">
              Whether you are looking after a home or running a business, Joju
              Ventures brings dependable gas solutions together with service
              you can trust.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                img: bodyImages.homes,
                alt: "Gas for homes",
                icon: Users,
                title: "For homes",
                text: "Dependable gas for everyday living, backed by a team that cares about your safety and satisfaction.",
                cta: "Get in touch",
                panel: "glass",
              },
              {
                img: bodyImages.business,
                alt: "Gas for businesses",
                icon: Building2,
                title: "For businesses",
                text: "Gas solutions that support your operations, with a service-first approach focused on your needs.",
                cta: "Talk to our team",
                panel: "glass-dark",
              },
            ].map((card, i) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 100}ms` }}
                  className={`${card.panel} soft-card rounded-[28px] p-5 sm:p-8`}
                >
                  <div className="relative mb-7 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-[#173A59] to-[#020713] sm:mb-8 sm:h-56">
                    <img
                      src={card.img}
                      alt={card.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020713]/65 to-transparent" />
                  </div>

                  <Icon size={26} strokeWidth={1.5} className="text-[#BD9B88]" />

                  <h3 className="serif mt-5 text-3xl font-semibold sm:text-4xl">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#F4ECE6]/60">
                    {card.text}
                  </p>

                  <Link
                    to="/contact"
                    className="group mt-7 inline-flex items-center gap-2 border-b border-[#BD9B88]/60 pb-1 text-sm font-bold text-[#E6CDBD] transition hover:text-white"
                  >
                    {card.cta}
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ
      ========================================= */}

      <section id="faq" className="pad night-3 relative">
        <Shards variant="a" />

        <div className="wrap relative z-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div data-reveal="left">
            <Eyebrow>Got questions?</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              We've got
              <br />
              <em className="accent-text pr-2 font-medium italic">
                answers.
              </em>
            </Heading>

            <p className="lede mt-6 max-w-xs">
              Find out more about Joju Ventures and how we can support your
              energy needs.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 border-b border-[#BD9B88]/60 pb-1 text-sm font-bold text-[#E6CDBD] transition hover:text-white"
            >
              Still have questions?
              <ArrowUpRight
                size={16}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div data-reveal className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`glass overflow-hidden rounded-2xl transition ${
                    isOpen ? "border-[#BD9B88]/35" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="serif text-xl font-semibold sm:text-2xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-180 bg-[#BD9B88] text-[#030B18]"
                          : "bg-white/[.06] text-[#BD9B88]"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer px-5 pb-6 sm:px-6">
                      <div className="mb-4 h-px bg-gradient-to-r from-[#BD9B88]/50 to-transparent" />
                      <p className="text-sm leading-8 text-[#F4ECE6]/55">
                        {faq.answer}
                      </p>
                    </div>
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

      <section id="contact-cta" className="night relative pb-20 pt-8">
        <div className="wrap relative z-10">
          <div
            data-reveal
            className="glass-strong relative overflow-hidden rounded-[30px] p-8 sm:p-12 lg:p-14"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full bg-[#173A59]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-[#BD9B88]/12 blur-3xl"
            />

            <Flame
              size={300}
              strokeWidth={1}
              className="float pointer-events-none absolute -bottom-12 right-4 hidden text-[#BD9B88]/10 md:block"
            />

            <div className="relative max-w-2xl">
              <Eyebrow>Let's connect</Eyebrow>

              <Heading className="text-4xl sm:text-5xl lg:text-6xl">
                Looking for a{" "}
                <em className="accent-text pr-2 font-medium italic">
                  reliable gas partner?
                </em>
              </Heading>

              <p className="lede mt-6 max-w-xl">
                Let's talk about how Joju Ventures can support your energy
                needs with reliable gas supply and dependable service.
              </p>

              <Link
                to="/contact"
                className="primary-button group mt-9 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold"
              >
                Contact Joju Ventures
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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