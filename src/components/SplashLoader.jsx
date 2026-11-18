
import { useEffect, useState } from "react";

const MIN_TIME = 3800;
const MAX_TIME = 7500;
const HOLD_TIME = 800;
const EXIT_TIME = 1400;

const RING_R = 108;
const RING_C = 2 * Math.PI * RING_R;

const STATUS = [
  "Preparing your gas experience",
  "Checking our supply network",
  "Getting everything ready",
  "Ready to serve you",
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap');

@keyframes splashLogoIn {
  from { opacity: 0; transform: scale(.94); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes splashLetter {
  from { opacity: 0; transform: translateY(40%); filter: blur(6px); }
  to { opacity: 1; transform: none; filter: blur(0); }
}

@keyframes splashRise {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
}

@keyframes splashStatus {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}

@keyframes splashGlow {
  0%, 100% { opacity: .45; }
  50% { opacity: .85; }
}

@keyframes splashSpin {
  to { transform: rotate(360deg); }
}

.splash-serif {
  font-family: 'Cormorant Garamond', Georgia, serif;
}

.splash-sans {
  font-family: 'Manrope', system-ui, sans-serif;
}

.splash-glow {
  animation: splashGlow 5s ease-in-out infinite;
}

.splash-logo {
  animation: splashLogoIn 1s cubic-bezier(.2,.7,.2,1) .1s both;
}

.splash-letter {
  display: inline-block;
  animation: splashLetter .8s cubic-bezier(.2,.7,.2,1) both;
}

.splash-sub {
  animation: splashRise .9s cubic-bezier(.2,.7,.2,1) 1.2s both;
}

.splash-foot {
  animation: splashRise .9s cubic-bezier(.2,.7,.2,1) 1.4s both;
}

.splash-status {
  animation: splashStatus .45s cubic-bezier(.2,.7,.2,1) both;
}

.splash-dashes {
  animation: splashSpin 40s linear infinite;
  transform-origin: 120px 120px;
}

@media (prefers-reduced-motion: reduce) {
  .splash-glow,
  .splash-logo,
  .splash-letter,
  .splash-sub,
  .splash-foot,
  .splash-status,
  .splash-dashes {
    animation: none;
  }
}
`;

const ease = (t) =>
  0.5 * t + 0.5 * ((1 - Math.cos(Math.PI * t)) / 2);

export default function SplashLoader({ children }) {
  const [done, setDone] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (done) return;

    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const start = performance.now();
    let loaded = document.readyState === "complete";

    let raf;
    let holdTimer;
    let exitTimer;

    const onLoad = () => {
      loaded = true;
    };

    window.addEventListener("load", onLoad);

    const finish = () => {
      setLeaving(true);

      exitTimer = setTimeout(() => {
        document.body.style.overflow = "";
        setDone(true);
      }, EXIT_TIME);
    };

    const tick = (now) => {
      const elapsed = now - start;
      const timeP = Math.min(elapsed / MIN_TIME, 1);
      const ready = loaded || elapsed >= MAX_TIME;

      const eased = ease(timeP);

      setProgress(
        Math.round(
          (ready ? eased : Math.min(eased, 0.9)) * 100
        )
      );

      if (ready && elapsed >= MIN_TIME) {
        setProgress(100);
        holdTimer = setTimeout(finish, HOLD_TIME);
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("load", onLoad);
      cancelAnimationFrame(raf);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [done]);

  const curtain =
    "transform .95s cubic-bezier(.76,0,.24,1) .45s";

  const statusIdx =
    progress < 30 ? 0 :
    progress < 62 ? 1 :
    progress < 100 ? 2 : 3;

  const ringOffset = RING_C * (1 - progress / 100);

  const letters = ["J", "O", "J", "U"];

  const logoClass =
    "col-start-1 row-start-1 h-24 w-auto max-w-[150px] object-contain sm:h-28";

  return (
    <>
      {children}

      {!done && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Loading Joju Ventures"
          className="splash-sans fixed inset-0 z-[100] overflow-hidden text-[#F4ECE6]"
          style={{
            pointerEvents: leaving ? "none" : "auto",
          }}
        >
          <style>{css}</style>

          {/* Top curtain */}
          <div
            className="absolute left-0 right-0 top-0 h-[50.5%] bg-[#030B18]"
            style={{
              transform: leaving
                ? "translateY(-101%)"
                : "none",
              transition: curtain,
            }}
          />

          {/* Bottom curtain */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[50.5%] bg-[#030B18]"
            style={{
              transform: leaving
                ? "translateY(101%)"
                : "none",
              transition: curtain,
            }}
          />

          {/* Center transition line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, #BD9B88, transparent)",
              boxShadow: "0 0 20px rgba(189,155,136,.8)",
              opacity: leaving ? 1 : 0,
              transform: leaving ? "scaleX(1)" : "scaleX(0)",
              transition:
                "transform .5s cubic-bezier(.2,.7,.2,1), opacity .3s ease .9s",
            }}
          />

          {/* Main content */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            style={{
              opacity: leaving ? 0 : 1,
              transform: leaving ? "scale(1.03)" : "none",
              transition:
                "opacity .45s ease, transform .6s ease",
            }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="splash-glow pointer-events-none absolute left-1/2 top-[40%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(31,91,150,.32), transparent 65%)",
              }}
            />

            {/* Vignette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,.4) 100%)",
              }}
            />

            {/* Logo stage */}
            <div className="relative h-[240px] w-[240px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 240 240"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="jojuSplashArc"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#8C6B58" />
                    <stop offset="55%" stopColor="#BD9B88" />
                    <stop offset="100%" stopColor="#E6CDBD" />
                  </linearGradient>
                </defs>

                {/* Outer dashed ring */}
                <g className="splash-dashes">
                  <circle
                    cx="120"
                    cy="120"
                    r="118"
                    fill="none"
                    stroke="rgba(189,155,136,.3)"
                    strokeWidth="1"
                    strokeDasharray="2 10"
                    strokeLinecap="round"
                  />
                </g>

                {/* Progress track */}
                <circle
                  cx="120"
                  cy="120"
                  r={RING_R}
                  fill="none"
                  stroke="rgba(255,255,255,.09)"
                  strokeWidth="2"
                />

                {/* Progress arc */}
                <circle
                  cx="120"
                  cy="120"
                  r={RING_R}
                  fill="none"
                  stroke="url(#jojuSplashArc)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={ringOffset}
                  transform="rotate(-90 120 120)"
                  style={{
                    transition: "stroke-dashoffset .15s linear",
                  }}
                />
              </svg>

              {/* Logo fills from bottom */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="splash-logo grid">
                  <img
                    src="/joju-logo.png"
                    alt=""
                    aria-hidden="true"
                    className={`${logoClass} opacity-[.14] grayscale`}
                  />

                  <img
                    src="/joju-logo.png"
                    alt="Joju Ventures"
                    className={logoClass}
                    style={{
                      clipPath: `inset(${100 - progress}% 0 0 0)`,
                      transition: "clip-path .15s linear",
                      filter:
                        "drop-shadow(0 8px 24px rgba(189,155,136,.3))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Brand name */}
            <h1 className="splash-serif mt-8 flex text-5xl font-medium tracking-[.14em] text-[#F4ECE6] sm:text-6xl">
              {letters.map((letter, i) => (
                <span
                  key={i}
                  className="splash-letter"
                  style={{
                    animationDelay: `${0.9 + i * 0.12}s`,
                  }}
                >
                  {letter}
                </span>
              ))}

              <span
                className="splash-letter text-[#BD9B88]"
                style={{
                  animationDelay: `${0.9 + letters.length * 0.12}s`,
                }}
              >
                .
              </span>
            </h1>

            <p className="splash-sub mt-2 text-sm font-medium tracking-[.3em] text-[#BD9B88]">
              VENTURES
            </p>

            {/* Loading status */}
            <div className="splash-sub mt-8 flex h-5 items-center justify-center">
              <p
                key={statusIdx}
                className="splash-status text-[13px] text-[#F4ECE6]/55"
              >
                {STATUS[statusIdx]}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            className="splash-foot absolute inset-x-0 bottom-0"
            style={{
              opacity: leaving ? 0 : 1,
              transition: "opacity .4s ease",
            }}
          >
            <div className="flex items-end justify-between px-6 pb-6 sm:px-12 sm:pb-8">
              <p className="max-w-[170px] text-xs leading-5 text-[#F4ECE6]/40 sm:max-w-none">
                Reliable gas supply.
                <br />
                Service you can trust.
              </p>

              <p className="splash-serif flex items-baseline gap-1 tabular-nums">
                <span className="text-5xl font-light leading-none text-[#F4ECE6] sm:text-6xl">
                  {progress}
                </span>

                <span className="text-lg font-light text-[#BD9B88]">
                  %
                </span>
              </p>
            </div>

            {/* Bottom progress bar */}
            <div className="h-[3px] w-full bg-white/[.07]">
              <div
                className="h-full bg-gradient-to-r from-[#8C6B58] via-[#BD9B88] to-[#E6CDBD]"
                style={{
                  width: `${progress}%`,
                  transition: "width .15s linear",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
